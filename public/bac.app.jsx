var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "This is from the Component!",
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name,
      });
    }

  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
          <h1>Hello World, it's {name} </h1>
          <p>{message}</p>

          <form onSubmit={this.onButtonClick}>
            <input type="text" ref="name"/>
            <button>Set Name</button>
          </form>
      </div>
    );
  }
});

var myMessage = "What the fuck is this all about!";

ReactDOM.render(
  <Greeter  />,
  document.getElementById('app')
);
