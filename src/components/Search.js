import React, { Component } from 'react'
import { Consumer } from '../context'

import axios from 'axios'

let md5 = require('md5')

class Search extends Component {

    constructor() {
      super();

      this.ts = new Date();
      this.api_key = '15d2ff88086bb8aab041f5ea70cc8fbd';
      this.priv_key = 'd567b22a62562345c4382b7f0ea5e442ebfb514d';
      this.hash = md5(this.ts + this.priv_key + this.api_key).toString();
      this.size = 'portrait_medium';
    }

    findHero = (e) => {
      axios
      .get(`http://gateway.marvel.com/v1/public/characters?name=${this.state.superHero}&apikey=${this.api_key}&hash=${this.hash}&ts=${this.ts}`)
      .then(res => {
        console.log(res.data)
      })
      .then(err => console.log(err))

      e.preventDefault()
    }

    state = {
      superHero: '',
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
          return(
            <form onSubmit={this.findHero}>
              <input 
                type="text"
                name="superHero"
                value={this.state.superHero}
                ref={input => this.search = input}
                onChange = {this.onChange}
              />
              <button className="btn btn-primary" type="submit"></button>
            </form>
          ) 
        }}
        
      </Consumer>
    )
  }
}

export default Search