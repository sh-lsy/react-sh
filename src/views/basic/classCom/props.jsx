import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class props extends Component {
  static propTypes = {
    title:propTypes.string,
    isShowSectitle: propTypes.bool
  }
  static defaultProps = {
    title: '默认props',
    isShowSectitle: true
  }
  render() {
    let {title, isShowSectitle} = this.props
    return (
      <div>
        <h2>{title}</h2>
        <h3>{isShowSectitle ? 'secTitle' : ''}</h3>
      </div>
    )
  }
}
