import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../../src/Modal.css'

class Modal extends Component {

  render() {
      if(!this.props.show) {
          return null;
      }

      return (
        <div className="backdropStyle">
          <div className="modalStyle">
            {this.props.children}
  
            <div className="footer">
              <button onClick={this.props.onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      );
  }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };


export default Modal
