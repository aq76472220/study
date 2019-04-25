// CommentList.js
import React, { Component } from 'react'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    return (
      <div>{this.props.comments.map((comment, i) => {
        return (
          <div key={i}>
            {comment.username}：{comment.content}
          </div>
        )
      })}</div>
    )
  }
}

export default CommentList