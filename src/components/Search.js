import React, { Component } from 'react'
import axios from 'axios'

let md5 = require('md5')

class Search extends Component {
    constructor() {
        super();

        this.ts = new Date();
        this.api_key = '15d2ff88086bb8aab041f5ea70cc8fbd';
        this.priv_key = 'd567b22a62562345c4382b7f0ea5e442ebfb514d';
        this.hash = md5(this.ts + this.priv_key + this.api_key).toString();
    }

    state = {
      query: '',
      results: []
    }

    getInfo = () => {
      axios.get(`http://gateway.marvel.com/v1/public/characters?name=${this.state.query}apikey=${this.api_key}&hash=${this.hash}&ts=${this.ts}`)
      .then(res => {
        // let characters = res.data.data.results;
        this.setState({results: res.data.data.results})
      })
      .then(err => console.log(err))
    }

    handleInputChange = () => {
      this.setState({
        query: this.search.value
      }, () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo()
          }
        }
      })
    }

  render() {
    return (
      <form>
        <input 
          type="text"
          ref={input => this.search = input}
          onChange = {this.handleInputChange}
        />
      </form>
    )
  }
}

export default Search