import React, { Component } from 'react'
import axios from 'axios'

let md5 = require('md5')

const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();

        this.ts = new Date();
        this.api_key = '15d2ff88086bb8aab041f5ea70cc8fbd';
        this.priv_key = 'd567b22a62562345c4382b7f0ea5e442ebfb514d';
        this.hash = md5(this.ts + this.priv_key + this.api_key).toString();
        this.size = 'portrait_medium';
    }

    state = {
        results: [],
    }

      componentDidMount() {
        
            axios
            .get(`http://gateway.marvel.com/v1/public/characters?apikey=${this.api_key}&hash=${this.hash}&ts=${this.ts}`)
            .then(res => {
              this.setState({ results: Object.values(res.data.data.results) });
              //console.log(res.data)
            })
            .then(err => console.log(err))

    }

    

  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;