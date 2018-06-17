import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/test';

const styles = {
  display: "inline-block",
  margin: 20,
};

const Header = ({ testValue, testAction }) => (
  <div style={{styles}}>
    <h1 style={styles}>Dungeon Game</h1>
    {testValue && <h2 style={styles}>TEST PASSED</h2>}
    <button style={styles} type="button" onClick={testAction}>TEST ACTION</button>
  </div>
);

const mapStateToProps = state => ({
  testValue: state.testReducer.test,
});

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
