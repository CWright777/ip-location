import React, { Component } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
  }

  render(){
    return (
      <div className='main-container text-center'>
        <Header/>
        <div className='container'>
          <SearchInput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}
