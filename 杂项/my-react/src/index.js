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


// const users = [
//   { username: 'Jerry', age: 21, gender: 'male' },
//   { username: 'Tomy', age: 22, gender: 'male' },
//   { username: 'Lily', age: 19, gender: 'female' },
//   { username: 'Lucy', age: 20, gender: 'female' }
// ]

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

// class Index extends Component {
//   render () {
//     return (
//       <div>
//         {users.map((user, i) => {
//           return (
//             <div  key={i}>
//               <div>姓名：{user.username}</div>
//               <div>年龄：{user.age}</div>
//               <div>性别：{user.gender}</div>
//               <hr />
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Index />,
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
//   componentWillMount () {
//     this.timer = setInterval(() => {
//       this.setState({ date: new Date() })
//     }, 1000)
//   }
//
//   handleShowOrHide () {
//     this.setState({
//       isShowClock: !this.state.isShowClock
//     })
//   }
//
//   componentWillUnmount () {
//     clearInterval(this.timer)
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
//
// class Index extends Component {
//   constructor () {
//     super()
//     this.state = { isShowClock: true }
//   }
//
//   handleShowOrHide () {
//     this.setState({
//       isShowClock: !this.state.isShowClock
//     })
//   }
//
//   render () {
//     return (
//       <div>
//         {this.state.isShowClock ? <Clock /> : null }
//         <button onClick={this.handleShowOrHide.bind(this)}>
//           显示或隐藏时钟
//         </button>
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
//     console.log(this.inputs.focus())
//   }
//
//   render () {
//     return (
//       <input ref={(input) => {
//          // input.focus()
//         return this.inputs = input
//       }} />
//     )
//   }
// }
//
// ReactDOM.render(
//   <AutoFocusInput />,
//   document.getElementById('root')
// )


// class Card extends Component {
//   constructor () {
//     super()
//   }
//   render () {
//     return (
//       <div className='two-cols-layout'>
//         <div className='sidebar'>
//           {this.props.children[0]}
//         </div>
//         <div className='main'>
//           {this.props.children[1]}
//         </div>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Card>
//     <h2>React.js 小书</h2>
//     <div>开源、免费、专业、简单</div>
//     订阅：<input />
//   </Card>,
//   document.getElementById('root')
// )

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  render () {
    return (
      <div className='editor-wrapper'>
        <span>{this.props.name}</span>
      </div>

    )
  }
}

ReactDOM.render(
  <Editor name ='我是谁' />,
  document.getElementById('root')
)

