class Toggler extends React.Component {
  constructor(props) {
    super(props)
    this.togglevisi = this.togglevisi.bind(this);
    this.state = {
      visibility: false
    }
  }
  togglevisi() {
    this.setState((previos) => {
      return {
        visibility: previos.visibility ? false : true
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.visibility == false ? "false" : "true"}</h1>
        <button onClick={this.togglevisi}>Click to Toggle</button>
      </div>
    )
  }
}

ReactDOM.render(<Toggler />, document.getElementById('app'))
