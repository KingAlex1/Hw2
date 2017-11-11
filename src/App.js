import React, {
  PureComponent
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

let id = 0;
function getNewsId() {
  id += 1;
  return id;
}
class App extends PureComponent {
  state = {
    newsInput: "",
    news: [],
    
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      newsInput: value
    });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {
        newsInput,
        news
      } = this.state;
      const newNews = {
        inputValue: newsInput,
        id: getNewsId()
      };
      this.setState({
        newsInput: "",
        news: [...news, newNews]
      });
    }
  };
  render() {
    const {
      newsInput,
      news
    } = this.state;

    return (
      <div className="App">
        <input
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="input"
          placeholder="Какие новости?"
        />
        <div>
          {news.map(item => (
            <NewsPost
              key={item.id}
              id={item.id}
              text={item.inputValue}
            />
          ))}
        </div>
      </div>
    );
  }
}

class NewsPost extends PureComponent {
  state = {
    newsInput: "",
    comments: []
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      newsInput: value
    });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {
        newsInput,
        comments
      } = this.state;
      const newNews = {
        inputValue: newsInput,
        id: getNewsId()
      };
      this.setState({
        newsInput: "",
        comments: [...comments, newNews]
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
      newsInput,
      comments
    } = this.state;
    return (
      <div className="news-container">
        <p>
          {comments.map(item => (
            <Comment
              key={item.id}
              id={item.id}
              text={item.inputValue}
            />
          ))}
        </p>
        <input
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onClick={this.handleDelete}
          className="input-comment"
          placeholder="прокоментируем ?"
        />
      </div>
    );
  }
}

export default App;

class Comment extends PureComponent {
  handleChange = () => {
    const { id, onChange } = this.props;
    onChange(id);
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <p id={id}>{text}</p>
        <span
          className="delete"
          onClick={this.handleDelete}
        >
          x
        </span>
      </div>
    );
  }
}
