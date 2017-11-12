import React, {PureComponent} from 'react';
import Comment from './Comment';

let id = 0;
function getNewsId() {
  id += 1;
  return id;
}
class NewsPost extends PureComponent {
  state = {
    commentInput: "",
    comments: []
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      commentInput: value
    });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {
        commentInput,
        comments
      } = this.state;
      const newNews = {
        text: commentInput,
        id: getNewsId()
      };
      this.setState({
        
        comments: [...comments, newNews],
        commentInput: ""
      });
    }
  };
  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(
        item => id !== item.id
      )
    }));
  };

  render() {
    const {
      commentInput,
      comments      
    } = this.state;
    const {text} = this.props
    return (
      <div className="news-container">
        <p>{text}</p>
        
        {comments.map(item => (
          <Comment
            key={item.id}
            id={item.id}
            text={item.text}
            onDelete={this.handleDelete}
            
          />
        ))}
        
        <input
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}         
          className="input-comment"
          placeholder="прокоментируем ?"
        />
      </div>
    );
  }
}

export default NewsPost