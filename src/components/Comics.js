import React, { Component } from 'react'
import { Consumer } from '../context'

// import Comic from './Comic'


class Comics extends Component {

  render() {

    return (
        <Consumer>
            {value => {
                console.log(value);
                return (
                    <React.Fragment>
                        <h1>Comic</h1>
                            <div className="row">
                              {value.results.map((result, name, thumbnail) => (
                                <div className="col-md-6"> 
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <h5>{result.name}</h5>
                                        <img className="img-thumbnail" src={`${result.thumbnail.path}/portrait_medium.jpg`} />
                                        <p>{result.description}</p>  
                                    </div>
                                </div>
                              </div>
                                ))}
                            </div>
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
  }
}

export default Comics