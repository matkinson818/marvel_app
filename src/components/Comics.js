import React, { Component } from 'react'
import axios from 'axios'

let md5 = require('md5')

class Comics extends Component {

    constructor() {
        super();

        this.ts = new Date();
        this.api_key = '15d2ff88086bb8aab041f5ea70cc8fbd';
        this.priv_key = 'd567b22a62562345c4382b7f0ea5e442ebfb514d';
        this.hash = md5(this.ts + this.priv_key + this.api_key).toString();
        this.size = 'portrait_medium'
    }

    state = {
        pictures: [],
      }

      componentDidMount() {
        this.getComics();
    }

    async getComics() {
        axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${this.api_key}&hash=${this.hash}&ts=${this.ts}`)
        .then(res => {
          // let imgs = res.data.data.results;
          this.setState({ pictures: res.data.data.results[0].thumbnail });
          console.log(res)
        })
        .then(err => console.log(err))
    } 

  render() {
    console.log('hello')

    return (
        <div>
            <h1>Hi</h1>
            <img className="img-thumbnail" src={`${this.state.pictures.path}/portrait_medium.jpg`} />
        </div>  
    )
  }
}

export default Comics