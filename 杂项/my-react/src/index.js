import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
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

// class Clock extends Component {
//   constructor () {
//     super()
//     this.state = {
//       date: new Date()
//     }
//   }
//
//   render () {
//     return (
//       <div>
//         <h1>
//           <p>现在的时间是</p>
//           {this.state.date.toLocaleTimeString()}
//         </h1>
//       </div>
//     )
//   }
// }
//
// class Index extends Component {
//   render () {
//     return (
//       <div>
//         <Clock />
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// )

// class AutoFocusInput extends Component {
//   componentDidMount () {
//     console.log(this.input_i)
//     this.input_i.focus()
//   }
//
//   render () {
//     return (
//       <input ref={(input) => this.input_i = input} />
//     )
//   }
// }


// class Comment extends Component {
//   static propTypes = {
//     comment: PropTypes.object.isRequired
//   }
//   componentDidMount () {
//     console.log(this.props)
//   }
//   render () {
//     const { comment } = this.props
//     return (
//       <div className='comment'>
//         <div className='comment-user'>
//           <span>{comment.username} </span>：
//         </div>
//         <p>{comment.content}</p>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Comment  comment={{username: '你是谁', content: '我要睡觉'}} />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)