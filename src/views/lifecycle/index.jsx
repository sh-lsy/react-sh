// import React, { Component } from 'react'

// export default class index extends Component {
//   // UNSAFE_componentWillMount() {
//   //   console.log('componentWillMount')
//   // }
//   componentDidMount() {
//     console.log('componentDidMount')
//   }
//   componentWillReceiveProps() {
//     console.log('componentWillReceiveProps')
//   }
//   shouldComponentUpdate() {
//     console.log('shouldComponentUpdate')
//   }
//   componentWillUpdate() {
//     console.log('componentWillUpdate')
//   }
//   componentDidUpdate() {
//     console.log('componentDidUpdate')
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
//   render() {
//     console.log('render');
//     return (
//       <div>生命周期</div>
//     )
//   }
// }
import React from 'react'

export default function index() {
  function getDerivedStateFromProps() {
    console.log(12121);
  }
  return (
    <div>index</div>
  )
}
