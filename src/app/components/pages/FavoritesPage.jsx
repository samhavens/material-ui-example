(function () {
  'use strict';

  var React = require('react');
  var mui = require('material-ui');

  var {Paper} = mui;

  module.exports = React.createClass({
    render: () => {
      return (
        <Paper innerClassName='favorites-page'>
          <header>
            <h2>Favorite beers</h2>
          </header>
        </Paper>
      );
    }
  });

})();
