(function () {
  'use strict';

  var React = require('react');
  var Router = require('react-router');
  var mui = require('material-ui');
  var injectTapEventPlugin = require("react-tap-event-plugin");

  // A lot of the code is auto-generated. However, fiddling around with it
  // shouldn't be a catastrophic failure. Just that you'd need to know your way
  // around a little. However, **BE CAREFUL WHILE DELETING SOME OF THE COMMENTS IN
  // THIS FILE; THE AUTO-GENERATORS RELY ON SOME OF THEM**.

  var HomePage = require('./components/pages/HomePage.jsx');
  var FavoritesPage = require('./components/pages/FavoritesPage.jsx');
  var AboutPage = require('./components/pages/AboutPage.jsx');
  // inject:pagerequire
  // endinject

  var menuItems = [
    { payload: 'home', text: 'Home', icon: 'action-home' },
    { payload: 'favorites', text: 'Favorites', icon: 'action-favorite' },
    { payload: 'about', text: 'About', icon: 'action-info' }
    // inject:menuitems
    // endinject
  ];

  var titles = {
    '/home': 'Home',
    '/favorites': 'Favorites',
    '/about': 'About'
    // inject:titles
    // endinject
  };

  var {Route, DefaultRoute, RouteHandler} = Router;
  var {AppCanvas, AppBar, LeftNav, IconButton, DropDownIcon} = mui;

  injectTapEventPlugin();

  var LeftNavComponent = React.createClass({
    mixins: [Router.Navigation],

    render: function () {
      // Optionally, you may add a header to the left navigation bar, by setting
      // the `LeftNav`'s `header` property to a React component, like os:
      //
      //     header={<div className='logo'>Header Title.</div>}
      return (
        <LeftNav
          ref="leftNav"
          docked={false}
          isInitiallyOpen={false}
          menuItems={this.props.menuItems}
          onClick={this._onLeftNavChange}
          onChange={this._onLeftNavChange} />
      );
    },

    toggle:function () {
      this.refs.leftNav.toggle();
    },

    close: function () {
      this.refs.leftNav.close()
    },

    _onLeftNavChange: function(e, selectedIndex, menuItem) {
      this.transitionTo(menuItem.payload);
      this.refs.leftNav.close();
    }
  });

  var Master = React.createClass({
    mixins: [Router.State],

    _onMenuIconButtonTouchTap: function () {
      this.refs.leftNav.toggle();
    },
    render: function () {
      return (
        <AppCanvas predefinedLayout={1}>

          <AppBar
            className="mui-dark-theme"
            title={titles[this.getPath()]}
            onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
            zDepth={0}>
            <div className="action-icons">
              <IconButton icon="navigation-more-vert" />
              <IconButton icon="action-favorite-outline" />
              <IconButton icon="action-search" />
            </div>
          </AppBar>

          <LeftNavComponent ref='leftNav' menuItems={menuItems} />

          <div className='mui-app-content-canvas'>
            <RouteHandler />
          </div>

        </AppCanvas>
      );
    }
  });

  var routes = (
    <Route name='app' path='/' handler={Master}>
      <Route name='home' handler={HomePage} />
      <Route name='favorites' handler={FavoritesPage} />
      <Route name='about' handler={AboutPage} />
      {/* inject:route */}
      {/* endinject */}
      <DefaultRoute handler={HomePage} />
    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
  });

})();
