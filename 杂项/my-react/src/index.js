import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import './index.css'

// ReactDOM.render(
//   <CommentApp />,
//   document.getElementById('root')
// )

// class  Header extends Component  {
// //   constructor () {
// //     super()
// //   }
// //   componentWillUnmount() {
// //     console.log('component will unmount')
// //   }
// //   render () {
// //     return (
// //       <div>我是header</div>
// //     )
// //   }
// // }
// //
// // class Index extends Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       isShowHeader: true
// //     }
// //   }
// //
// //   handleShowOrHide () {
// //     this.setState({
// //       isShowHeader: !this.state.isShowHeader
// //     })
// //   }
// //
// //   render () {
// //     return (
// //       <div>
// //         {this.state.isShowHeader ? <Header /> : null}
// //         <button onClick={this.handleShowOrHide.bind(this)}>
// //           显示或者隐藏标题
// //         </button>
// //       </div>
// //     )
// //   }
// // }

class Clock extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }

  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() })
    }, 1000)
  }

  render () {
    return (
      <div>
        <h1>
          {this.state.date}
        </h1>
      </div>
    )
  }
}

class Index extends Component {
  constructor () {
    super()
    this.state = { isShowClock: true }
  }

  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render () {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或隐藏时钟
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)