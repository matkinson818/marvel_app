import React, { Component } from 'react'
import { Consumer } from '../context'

class Comics extends Component {

  render() {

    return (
        <Consumer>
            {value => {
                console.log(value);
                return (
                    <React.Fragment>
                        <h1 className="text-center mb-5">Marvel Comics</h1>
                            <div className="row">
                              {value.results.map((result, title, thumbnail) => (
                                <div className="col-md-6"> 
                                <div className="card text-white bg-dark mb-3 shadow-sm">
                                <h5 className="mx-auto card-header">{result.title}</h5>
                                    <div className="card-body mx-auto">
                                        <img className="img-thumbnail" src={`${result.thumbnail.path}/standard_xlarge.jpg`} />
                                        <p>ID: {result.id}</p>  
                                        <p>Issue Number: {result.issueNumber}</p>  
                                        <p>Format: {result.format}</p>  
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