import React, { Component } from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'

import './index.css'

class CountInfo extends Component {
  static propTypes = {
    style: PropTypes.object,
    store: PropTypes.object.isRequired,
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
              CountInfo: { this.props.store }
            </div>
          )
        }
      </div>
    )
  }
}

export default CountInfo
