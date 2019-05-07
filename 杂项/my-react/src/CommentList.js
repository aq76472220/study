// CommentList.js
import React, { Component } from 'react'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  handleDeleteComment (index) {
    this.props.onDeleteComment(index)
  }

  _getProcessedContent (content) {
    return content.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  render() {
    var _updateTimeString = (createdTime)=> {
      const duration = (+Date.now() -  createdTime) / 1000
      return duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    }
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <div key={i} >
              <div>{comment.username}：
                <p dangerouslySetInnerHTML={{
                  __html: this._getProcessedContent(comment.content)
                }} />
              </div>
              <div>{_updateTimeString(comment.createdTime)}</div>
              <span className='comment-delete' onClick={this.handleDeleteComment.bind(this, i)}>
                删除
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CommentList