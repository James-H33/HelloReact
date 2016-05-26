var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1> Hello World! It's {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var obj = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      obj.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      obj.message = message;
    }

    this.props.onNewData(obj);

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='name' placeholder="text goes here" />
          <div></div>
          <textarea ref='message' placeholder="text goes here" ></textarea>
          <div></div>
          <button> Sumbit</button>
        </form>
      </div>
    );
  }
})

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'James',
      message: 'This is my message',
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message,
    }
  },
  handleNewData: function(obj) {
    this.setState({
      name: obj.name,
      message: obj.message,
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
