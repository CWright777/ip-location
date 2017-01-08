import React, { Component } from 'react';

export default props => {
  return (
    <div className='input-group col-lg-6 col-md-offset-3'>
      <input type="text"
        className="form-control"
        value={props.value}
        onChange={props.handleChange}
      />
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          type="button"
          onClick={props.handleSubmit}
        >
          Search!
        </button>
      </span>
    </div>
  )
}
