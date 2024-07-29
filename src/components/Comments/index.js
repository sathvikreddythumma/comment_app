import './index.css'
import {Component} from 'react'
import Item from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {nameInput: '', commentInput: ''}

  addComment = event => {
    event.preventDefault()
  }

  nameupdate = event => {
    this.setState({nameInput: event.target.value})
  }

  commentupdate = event => {
    this.setState({nameInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput} = this.state

    return (
      <div className="bg1">
        <div className="bg2">
          <div className="h-bg">
            <h1 className="h1">Comments</h1>
          </div>
          <div className="add-bg">
            <div className="bg3">
              <div className="bg4">
                <form onSubmit={this.addComment}>
                  <p className="tech-para">
                    Say something about 4.0 Technologies
                  </p>
                  <input
                    type="text"
                    onChange={this.nameupdate}
                    className="inp1"
                    placeholder="Your Name"
                    value={nameInput}
                  />
                  <br /> <br />
                  <textarea
                    onChange={this.commentupdate}
                    type="text"
                    rows="7"
                    cols="55"
                    placeholder="Your Comment"
                    className="inp1"
                    value={commentInput}
                  />
                  <br />
                  <button type="button" className="btn">
                    Add Comment
                  </button>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="i1"
              />
            </div>
            <div className="hr-bg">
              <hr />
            </div>
            <div className="comment-bg">
              <div className="comment-count">
                <div className="count-bg">0</div>
                <p className="p2">Comments</p>
              </div>
            </div>
            <ul type="none" className="unlist-bg">
              <Item />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
