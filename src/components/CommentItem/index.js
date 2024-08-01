// Write your code here
import './index.css'

const Item = props => {
  const {item, key, b, change, like} = props
  console.log(b, 1)
  const {id, name, date, desc, isLiked} = item
  const newImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const newClass = isLiked ? 'liked-para' : 'comment-para'
  const c = () => {
    change(id)
  }
  const l = () => {
    like(id)
  }

  return (
    <li className="list-bg">
      <div className="details-main-bg">
        <div className="details-bg">
          <div className={`con-bg ${b}`}>
            <p>{name[0].toUpperCase()}</p>
          </div>
          <div className="p-bg">
            <p className="list-p1">{name}</p>
          </div>
          <div className="p-bg">
            <p className="list-p2">{date}</p>
          </div>
        </div>
        <div className="comment-para-bg">
          <p className="comment-para">{desc}</p>
        </div>
        <div className="like-delete-bg">
          <div className="like-bg">
            <img src={newImg} alt="like" className="like-img" />
            <button
              className={` del-btn ${newClass}`}
              onClick={l}
              type="button"
            >
              Like
            </button>
          </div>
          <button type="button" data-testid="delete" className="del-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="del-img"
              onClick={c}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Item
