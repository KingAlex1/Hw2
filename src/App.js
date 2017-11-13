import React, {
  PureComponent
} from "react";
import "./index.css";
import NewsPost from './NewsPost'

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
        text: newsInput
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
        {news.map(item => (
          <NewsPost
            key={getNewsId()}
            text={item.text}
          />
        ))}        
      </div>
    );
  }
}
export default App;

