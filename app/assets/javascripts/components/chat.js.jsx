var ChatMessage = React.createClass({
  render: function(){
    return (
      <div className="message">
        <span className="author">
          {this.props.author}
        </span>
        <span className="contents">
          {this.props.contents}
        </span>
      </div>
    );
  }
});

var MessageBox = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.messages.map(function(message){
          return <ChatMessage
            author={message.author}
            contents={message.contents}
          />;
        })}
      </div>
    );
  }
});

var MessageForm = React.createClass({
  getInitialState: function(){
    return {text: ''};
  },

  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state.text);
    this.setState({text: ''});
  },

  changeHandler: function(e){
    this.setState({text: e.target.value});
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.changeHandler} value={this.state.text}/>
      </form>
    );
  }
});

var Chat = React.createClass({
  render: function(){
    return (
      <div>
        <MessageBox messages=[]/>
        <MessageForm/>
      </div>
    );
  }
});
