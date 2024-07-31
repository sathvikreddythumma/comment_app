// Write your code here
import './index.css'

const Item = props => {
  const {item} = props

  return (
    <li className="list-bg">
      <div className="details-main-bg">
        <div className="details-bg">
          <div className="con-bg">
            <p>R</p>
          </div>
          <div className="p-bg">
            <p className="list-p1">Richard Branson</p>
          </div>
          <div className="p-bg">
            <p className="list-p2">2 minutes ago</p>
          </div>
        </div>
        <div className="comment-para-bg">
          <p className="comment-para">para</p>
        </div>
        <div className="like-delete-bg">
          <div className="like-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="like-img"
            />
            <p className="comment-para">Like</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="del-img"
          />
        </div>
      </div>
    </li>
  )
}

export default Item
