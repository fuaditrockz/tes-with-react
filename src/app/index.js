//file ini adalah contoh dalam membuat props dan menampilkan message didalam atribut react.
var React = require('react');
var ReactDOM = require('react-dom');

class CommentBox extends React.Component {
  render() {
    const comments = this._getComments();
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <Comment name="Muhammad Fuad" body="This is cool man" />
        <Comment name="Desi Mandasari" body="What the hell is going on..." />
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }
  _getCommentsTitle(commentCount) {
    if(commentCount === 0) {
      return 'No comments yet';
    } else if(commentCount === 1) {
      return 'You have 1 comments';
    } else {
      return '${commentCount} comments';
    }
  }

  _getComments() {
    const commentList = [
      {id: 1, author: 'Desi Mandasari', body:'Ini apaan sih? Kok gak jelas..'},
      {id: 2, author: 'Fuadit Muhammad', body:'Bangke lah males banget dah...'}
    ];

    return commentList.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} id={comment.id} />
      );
    });
  }
}

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.name}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete Comment
          </a>
        </div>
      </div>
    );
  }
}

// Meletakkan komponen yang sudah kita buat diatas, ke HTML...
ReactDOM.render(<CommentBox />, document.getElementById("todo-wrapper"));
