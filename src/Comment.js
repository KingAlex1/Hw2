import React, {PureComponent} from 'react';

class Comment extends PureComponent {
  
  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
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

export default Comment ; 