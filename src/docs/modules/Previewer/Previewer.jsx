import React from 'react';
import templatePaths from 'data/templatePaths.json';
import './style.scss';

const screenSizes = {
  mobile: 360,
  tablet: 770,
  desktop: 1200,
};

export default class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.initialPath = '/';
    this.handleChangeSize = this.changeSize.bind(this);
    this._handlePathChoice = this.changePath.bind(this);
    this.state = { maxWidth: screenSizes.desktop, path: this.initialPath };
  }

  changePath(e) {
    this.setState({
      path: `/templates/${e.target.value}`,
    });
  }

  changeSize(size) {
    this.setState({
      maxWidth: screenSizes[size],
    });
  }

  render() {
    const style = {
      maxWidth: this.state.maxWidth,
    };
    const templateOptions = templatePaths.map(path => {
      return (
        <option key={path.path} value={path.name}>{path.name}</option>
      );
    });

    const preview = (this.state.path === '/') ? <div className="">Pick a template</div> : <iframe title="previewer" src={this.state.path} />;
    return (
      <div id="previewer">
        <div className="previewer-panel">
          <select onChange={this._handlePathChoice} onBlur={this._handlePathChoice} >
            <option key={this.initialPath} value={this.initialPath}>Select a path</option>
            {templateOptions}
          </select>
          <ul className="previewer-size">
            <li><button type="button" onClick={() => this.handleChangeSize('mobile')}>Mobile</button></li>
            <li><button type="button" onClick={() => this.handleChangeSize('tablet')}>Tablet</button></li>
            <li><button type="button" onClick={() => this.handleChangeSize('desktop')}>Desktop</button></li>
          </ul>
        </div>
        <div className="previewer-wrapper">
          <div className="previewer" style={style}>
            {preview}
          </div>
        </div>
      </div>
    );
  };
}
