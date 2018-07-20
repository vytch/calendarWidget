import React from 'react';
import PropTypes from 'prop-types'; // ES6
import beautify from 'xml-beautifier';
import ReactDOMServer from 'react-dom/server';
import jsxToString from 'jsx-to-string';
import Tabs from 'core-partials/display/molecules/Tab';
import TabItem from 'core-partials/display/molecules/TabItem';
import Fangs from 'fangs.js';
import './style.scss';

const getComponentCode = component => {
  const reactAttrs = / data-(react[-\w]+="[^"]+)"/g;
  const reactRoot = / data-reactroot=""/g;
  const reactCommentStart = /<!-- react-text: [\d]+ -->/g;
  const reactCommentEnd = /<!-- \/react-text -->/g;

  return beautify(
    ReactDOMServer
      .renderToString(component)
      .replace(/\s{2,}/g, ' ')
      .replace(reactAttrs, '')
      .replace(reactRoot, '')
      .replace(reactCommentStart, '')
      .replace(reactCommentEnd, ''),
  );
};

const getThemeables = component => {
  return (
    <div>
      <h5>LL</h5>
      <div className="component-display-themeable ll-theme">{component}</div>

      <h5>FC</h5>
      <div className="component-display-themeable fc-theme">{component}</div>

      <h5>VC</h5>
      <div className="component-display-themeable vc-theme">{component}</div>
    </div>
  );
};

export default class ComponentDisplay extends React.Component {
  rawMarkup(content) {
    return { __html: [content]};
  }
  render() {
    const myElement = this.props.component;
    const code = getComponentCode(myElement);
    const fangContent = new Fangs(code);
    const themable = this.props.displayTheme ? getThemeables(myElement) : myElement;

    return (
      <div className="component-display">
        <h3 id={`component-display-${this.props.id}`}>{this.props.title}</h3>
        <div className="component-display-showcase">
          <Tabs>
            <TabItem
              id={`${this.props.id}-display`}
              label="Display"
              isActive
            >
              <div className="component-display-showcase-inner">
                <h4>Example</h4>
                {themable}
              </div>
              { this.props.showPrint &&
                <div className="component-display-showcase-inner">
                  <h4>Print </h4>
                  <div className="print">
                    {myElement}
                  </div>
                </div>}
              <div className="component-display-showcase-inner">
                <h4>Screen-reader transcript</h4>
                <div dangerouslySetInnerHTML={this.rawMarkup(fangContent.getTranslated())} />
              </div>
            </TabItem>
            <TabItem
              id={`${this.props.id}-code`}
              label="Code"
            >
              <div className="component-display-showcase-inner">
                <h4>HTML code</h4>
                <pre>
                  <code className="html" id={`code-${this.props.id}`}>{code}</code>
                </pre>
                <button type="button" className="clipboard-button" data-clipboard-target={`#code-${this.props.id}`} alt="Copy to clipboard">
                    Copy
                </button>
              </div>
              <div className="component-display-showcase-inner">
                <h4>React code</h4>
                <pre>
                  <code className="html" id={`codejs-${this.props.id}`}>{jsxToString(myElement)}</code>
                </pre>
                <button type="button" className="clipboard-button" data-clipboard-target={`#codejs-${this.props.id}`} alt="Copy to clipboard">
                    Copy
                </button>
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
    );
  }
}

ComponentDisplay.defaultProps = {
  displayTheme: false,
  showPrint: false,
};

ComponentDisplay.propTypes = {
  displayTheme: PropTypes.bool,
  showPrint: PropTypes.bool,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};
