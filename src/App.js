import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';

let id = 0 ; 
function getNewsId(){
  id +=1;
  return id;
}
class App extends PureComponent { 
  state = {
     inputValue: '', 
     news: [     
      ]
    
  }
  handleChange = event =>{
    const value = event.target.value ;
    this.setState({inputValue:value})   
  }

  handleKeyDown = event =>{
      if (event.keyCode===13){
        const {inputValue, news} = this.state; 
        const newNews = {newsInput: inputValue, id: getNewsId()}
        this.setState({inputValue:'', news:[...news,newNews]})
      }
  }
  render() {
    const {inputValue, news} = this.state;
    
    return (
    <div className='App'>
    
      <input value = {inputValue}
        onChange = {this.handleChange}
        onKeyDown = {this.handleKeyDown}
        className = "input"
        placeholder = "Какие новости?"
      />
      <div>
      {news.map(item => ( 
        <NewsPost 
          key = {item.id}
          id = {item.id}
          text = {item.newsInput}
        />
      ))}
      </div>      
    </div>
    
    )
  }
}


class NewsPost extends PureComponent {
  state = {
    inputValue: '',
    comments: [
      {
        id: 0,
        newsInput: '',
      }
    ]
  }
  handleChange = event =>{
    const value = event.target.value ;
    this.setState({inputValue:value})   
  }

  handleKeyDown = event =>{
    if (event.keyCode===13){
      const {inputValue, comments} = this.state; 
      const newNews = {newsInput: inputValue, id: getNewsId()}
      this.setState({inputValue:'', comments:[...comments,newNews]})
    }
}
  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter( item=> id !== item.id)
    }));
  };

  render() {
    const {inputValue, comments} = this.state; 
    return(
    <div className="news-container" >
    <p>{comments.map(item => ( 
      <Comment 
        key = {item.id}
        id = {item.id}
        text = {item.newsInput}
      />
    ))}</p>
      <input value = {inputValue}
      onChange = {this.handleChange}
      onKeyDown = {this.handleKeyDown}
      onClick ={this.handleDelete}
      className = 'input-comment'
      placeholder = "прокоментируем ?"
      />
      
    </div>      
    );}
}


export default App;

class Comment extends PureComponent{
  
  handleChange = () => {
    const {id, onChange} = this.props;
    onChange(id);
  };

  

  render(){
    const {text} = this.props; 
    return (
      <div>
        <p id ={id}>{text}</p>
        <span className="delete"
        onClick = {this.handleDelete}>
        x
        </span>
      </div>  
    )
  }
}