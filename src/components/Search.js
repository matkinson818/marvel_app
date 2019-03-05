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

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${this.api_key}&hash=${this.hash}&ts=${this.ts}`)
        .then(res => console.log(res.data))
        .then(err => console.log(err))
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Search