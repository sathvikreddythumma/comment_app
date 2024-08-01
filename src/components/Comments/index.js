import './index.css'
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
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
  state = {nameInput: '', commentInput: '', count: 0, list: [], isActive: false}

  addComment = event => {
    event.preventDefault()
    const {nameInput, commentInput, list, isActive} = this.state
    const num = Math.ceil((Math.random() * 10) % 7)
    const bgCol = initialContainerBackgroundClassNames[num - 1]
    console.log(bgCol)
    console.log(formatDistanceToNow(new Date()))
    const d = formatDistanceToNow(new Date())
    const obj = {
      id: uuidv4(),
      bg: bgCol,
      name: nameInput,
      date: d,
      desc: commentInput,
      isLiked: false,
    }
    this.setState(prev => ({
      list: [...prev.list, obj],
      nameInput: '',
      commentInput: '',
      count: prev.count + 1,
      isActive: false,
    }))
  }

  nameUpdate = event => {
    this.setState({nameInput: event.target.value})
  }

  commentUpdate = event => {
    this.setState({commentInput: event.target.value})
  }

  change = uId => {
    console.log(uId)
    const {list} = this.state
    this.setState(prev => ({
      list: list.filter(e => e.id !== uId),
      count: prev.count - 1,
    }))
  }

  like = uId1 => {
    const {list} = this.state
    this.setState(prev => ({
      list: prev.list.map(e => {
        if (e.id === uId1) {
          return {...e, isLiked: !e.isLiked}
        }
        return e
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, count, list, isActive} = this.state

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
                    onChange={this.nameUpdate}
                    className="inp1"
                    placeholder="Your Name"
                    value={nameInput}
                  />

                  <textarea
                    onChange={this.commentUpdate}
                    type="text"
                    rows="7"
                    cols="55"
                    placeholder="Your Comment"
                    className="inp1"
                    value={commentInput}
                  />

                  <button type="submit" className="btn">
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
                <div className="count-bg">{list.length}</div>
                <p className="p2">Comments</p>
              </div>
            </div>
            <div className="unList-bg">
              <ul type="none" className="unList-bg">
                {list.map(e => (
                  <Item
                    item={e}
                    key={e.id}
                    b={e.bg}
                    change={this.change}
                    like={this.like}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
