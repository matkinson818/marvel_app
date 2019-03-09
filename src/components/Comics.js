import React, { Component } from 'react'
import axios from 'axios'
import { url } from 'inspector';

let md5 = require('md5')

class Comics extends Component {
    constructor() {
        super();

        this.ts = new Date();
        this.api_key = '15d2ff88086bb8aab041f5ea70cc8fbd';
        this.priv_key = 'd567b22a62562345c4382b7f0ea5e442ebfb514d';
        this.hash = md5(this.ts + this.priv_key + this.api_key).toString();
    }

    state = {
      comics: []
    }

    componentDidMount() {
        this.getComics();
    }

    getData() {
        axios.get(`http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge`)
        .then(res => {
          // let characters = res.data.data.results;
         // this.setState({imgs: res.data.data.results.thumbnail.path})
        })
        .then(err => console.log(err))
    }

  render() {
      //let imgs = imgs.map(img => <img className="img-thumbnail" src={imgs.thumbnail} key={img.id}></img>)
    return (
        <img></img>
    )
  }
}

export default Comics