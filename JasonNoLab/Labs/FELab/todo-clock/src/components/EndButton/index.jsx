import React, { Component } from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'


import './index.css'

class EndButton extends Component {
  static propTypes = {
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const wrapStyle = assign({}, this.props.style)

    return (
      <div className="clock" style={wrapStyle}>
        {
          true && (
            <div>
              EndButton
            </div>
          )
        }
      </div>
    )
  }
}

export default EndButton
