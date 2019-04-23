import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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


// class Index extends Component {
//   render () {
//     return (
//       <div>
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

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
