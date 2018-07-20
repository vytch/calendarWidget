import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import beautify from 'xml-beautifier';
import routes from './routes';

const fontCSS = 'asset/project/font.css';
const appCSS = 'asset/project/app-fed.css';
const docCSS = 'asset/doc/doc-fed.css';
const jqueryCSS = 'asset/project/libs-fed.css';
const previewerCSS = 'asset/doc/previewer-fed.css';
// const fedCSS = 'stylesheets/fed-styles.css';
const projectCSS = 'asset/project/main-project.css';
const styleguidePrCSS = 'asset/doc/main-one.css';
// const styleguideStyles = 'stylesheets/styleguide-styles.css';

const getJsAssets = path => {
  const assets = [];
  const docScript = '/asset/doc/doc.js';
  const styleguideScript = '/asset/doc/styleguide.js';
  const previewerScript = '/asset/doc/previewer.js';
  const commonScript = '/asset/common.js';
  const appScript = '/asset/project/app.js';
  const libsScript = '/asset/project/libs.js';
  const validatorScript = '/asset/project/validators.js';

  assets.push(commonScript);
  if (path === '/') {
    assets.push(docScript);
  }
  assets.push(libsScript);

  // If path is demo, we want doc, and previewer
  if (path.match(/^\/demo/)) {
    assets.push(docScript);
    assets.push(previewerScript);
  }

  if (path.match(/^\/styleguide/)) {
    assets.push(docScript);
    assets.push(styleguideScript);
    assets.push(appScript);
    assets.push(validatorScript);
  }

  if (path.match(/^\/templates/)) {
    assets.push(appScript);
    assets.push(validatorScript);
  }

  return assets;
};

const getComponentCode = component => {
  const reactAttrs = / data-(react[-\w]+="[^"]+)"/g;
  const reactRoot = / data-reactroot=""/g;
  const reactCommentStart = /<!-- react-text: [\d]+ -->/g;
  const reactCommentEnd = /<!-- \/react-text -->/g;

  return beautify(
    ReactDOMServer
      .renderToString(component)
      .replace(reactAttrs, '')
      .replace(reactRoot, '')
      .replace(reactCommentStart, '')
      .replace(reactCommentEnd, '')
    ,'  ');
};

module.exports = function render(locals) {  // eslint-disable-line
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets.filter(value => {
    return !locals.path.match(/^\/templates/) && value.match(/\.css$/);
  });

  if (locals.path.match(/^\/templates/)) {
    css.push(appCSS);
    css.push(jqueryCSS);
    css.push(projectCSS);
  }

  if (!locals.path.match(/^\/templates/)) {
    css.push(appCSS);
    // css.push(fedCSS);
    css.push(docCSS);
    css.push(jqueryCSS);
    css.push(previewerCSS);
    // css.push(styleguidePrCSS);
    // css.push(styleguideStyles);
    css.push(projectCSS);
  }

  css.push(fontCSS);

  const js = getJsAssets(locals.path);
  // console.log('======================');
  // console.log(locals.path);
  // console.log('======================');

  const script = js.map(file => <script key={file} src={file} />);

  const style = css.map(file => <link key={file} href={`\/${file}`} rel="stylesheet" />);
  let content = {};
  match({ routes: routes.routes, location: locals.path }, (error, redirectLocation, renderProps) => {
    content = (<RouterContext {...renderProps} />);
  });


  return `<!doctype html>${getComponentCode(
    <html lang="en">
      <head>
        <title>Revium static site</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        { style }
      </head>
      <body>

        {content}

        { script }
      </body>
    </html> // eslint-disable-line
  )}`;
};
