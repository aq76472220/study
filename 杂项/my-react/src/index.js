import React, { Component } from 'react'
import ReactDOM from 'react-dom'git
import PropTypes from 'prop-types'
import CommentApp from './CommentApp'
import './index.css'

// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = { isLiked: false }
//   }
//
//   handleClickOnLikeButton () {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }
//
//   render () {
//     const likedText = this.props.likedText || '取消'
//     const unlikedText = this.props.unlikedText || '点赞'
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? likedText : unlikedText} 👍
//       </button>
//     )
//   }
// }
//
// ReactDOM.render(
//   <LikeButton likedText ='真的已经赞了吗？' unlikedText = '我要去点赞........' />,
//   document.getElementById('root')
// )


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
// ccf1d49b79c8a884c63fc8ff5834aa3a4c6a0195
// class Index extends Component {
//   render () {
//     return (
//       <div>

//         <Clock />

//         {[
//           <span>React.js </span>,
//           <span>is </span>,
//           <span>good</span>
//         ]}
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


const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

// class Index extends Component {
//   render () {
//     const usersElements = [] // 保存每个用户渲染以后 JSX 的数组
//     for (let user of users) {
//       usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
//         <div>
//           <div>姓名：{user.username}</div>
//           <div>年龄：{user.age}</div>
//           <div>性别：{user.gender}</div>
//           <hr />
//         </div>
//       )
//     }
//
//     return (
//       <div>{usersElements}</div>
//     )
//   }
// }

// ReactDOM.render(
//   <Comment  comment={{username: '你是谁', content: '我要睡觉'}} />,
//   document.getElementById('root')
// )
class Index extends Component {
  render () {
    return (
      <div>
        {users.map((user, i) => {
          return (
            <div  key={i}>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}
>>>>>>> ccf1d49b79c8a884c63fc8ff5834aa3a4c6a0195

ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)
