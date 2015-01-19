(function () {
  'use strict';

  var React = require('react');
  var mui = require('material-ui');

  var {Paper, Input, RaisedButton} = mui;

  module.exports = React.createClass({

    render: () => {
      return (
        <Paper innerClassName='home-page'>
          <header>
            <h2>Beer search</h2>
          </header>
          <Input ref="beer" type="text" name="beer" placeholder="Search" description="Enter a term to search." />
          <RaisedButton label="Search" primary={true} />
        </Paper>
      );
    }
  });

})();
