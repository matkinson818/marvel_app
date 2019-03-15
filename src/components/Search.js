import React, { Component } from 'react'
import { Consumer } from '../context'

import axios from 'axios'

let md5 = require('md5')

class Search extends Component {
  state = {
    superHero: '',
  }

    constructor() {
      super();

      this.ts = new Date();
      this.api_key = '15d2ff88086bb8aab041f5ea70cc8fbd';
      this.priv_key = 'd567b22a62562345c4382b7f0ea5e442ebfb514d';
      this.hash = md5(this.ts + this.priv_key + this.api_key).toString();
      this.size = 'portrait_medium';
    }

    findHero = (dispatch, e) => {
      axios
      .get(`http://gateway.marvel.com/v1/public/characters?name=${this.state.superHero}&apikey=${this.api_key}&hash=${this.hash}&ts=${this.ts}`)
      .then(res => {
        console.log(res.data)
        dispatch({
          type: 'FIND_HERO',
          payload: res.data.data.results
        })
      })
      .then(err => console.log(err))

      e.preventDefault()
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card bg-light mt-4 mb-4">
              <form onSubmit = {this.findHero.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                      placeholder="Enter Super Hero..."
                      type="text"
                      name="superHero"
                      className="form-control form-control-lg"
                      value={this.state.superHero}
                      ref={input => this.search = input}
                      onChange={this.onChange}
                    />
                </div> 
                <button className="btn btn-outline-dark btn-lg btn-block mb-5" type="submit">Find your Hero</button>
              </form>
            </div>  
          ) 
        }}      
      </Consumer>
    )
  }
}

export default Search