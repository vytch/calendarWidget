import React from 'react';
import PropTypes from 'prop-types'; // ES6
import route from '../../../config/routes';


export default class Navigation extends React.Component {
  render() {
    const currentPath = this.props.currentRoute.path;
    const links = route.routes.map(route => {
      const className = (route.path === currentPath) ? 'active' : '';
      if (Array.isArray(route.childRoutes)) {
        let children = [];
        for (const childRoute of route.childRoutes) {
          children = childRoute.params.componentList.sort().map(component => {
            const path = childRoute.path.replace(/:[a-z]+/, component);
            const className = (path === currentPath) ? 'active' : '';
            return <li key={path} className={className}><a href={path}>{component}</a></li>;
          });
        }
        return (
          <li className={className} key={route.path}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button">
              {route.name}
              <span className="caret" />
            </a>
            <ul className="dropdown-menu">
              {children}
            </ul>
          </li>
        );
      }
      return <li className={className} key={route.path}><a href={route.path}>{route.name}</a></li>;
    });

    const classNames = (this.props.isFixed) ? 'navbar navbar-default navbar-fixed-top' : 'navbar navbar-default';
    return (
      <nav className={classNames}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">{this.props.currentRoute.title}</a>
          </div>
          <ul className="nav navbar-nav">
            {links}
          </ul>
        </div>
      </nav>
    );
  }
}

Navigation.defaultProps = {
  isFixed: false,
};

Navigation.propTypes = {
  currentRoute: PropTypes.object.isRequired,
  isFixed: PropTypes.bool,
};
