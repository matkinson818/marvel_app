import React from 'react'

const Comic = (props) => {
  
    return (
      <div className="col-md-6"> 
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>{props.results}</h5>
                <img className="img-fluid" src={props.results} alt=""/>
            </div>
        </div>
      </div>  
    )
  
}

export default Comic
