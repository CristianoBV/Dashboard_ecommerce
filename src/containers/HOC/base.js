import React, { Component } from 'react'
import Dashboard from '../../pages/Dashboard';

const base = Component => {
  return class extends React.Component {
    render(){
      return (
        <Dashboard history={this.props.history}>
          <Component {...this.props} />
        </Dashboard>
      )
    }
  }
}

export default base;
