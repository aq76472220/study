import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: JSON.parse(localStorage.getItem('comments'))? JSON.parse(localStorage.getItem('comments')) : []
    }
    console.log('construct')
  }

  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }

  _saveComments(comments){
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleDeleteComment (index) {
    var comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    this._saveComments(this.state.comments)
  }
  render() {
    console.log('render')
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)}
        />
        <CommentList
          onDeleteComment = {this.handleDeleteComment.bind(this)}
          comments = {this.state.comments}
        />
      </div>
    )
  }
}

export default CommentApp