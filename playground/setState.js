class Componentcounter extends React.Component{
  constructor(props){
    super(props);
    this.addone = this.addone.bind(this)
    this.subtractone = this.subtractone.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
      count:0
    }
  }
  addone(){
    this.setState((prevstate) => {
      console.log(prevstate);
      return {
        count:prevstate.count + 1
      }
    });
  }
  subtractone(){
    this.setState((prevstate) =>{
      return {
        count:prevstate.count - 1
      }
    })

  }
  reset(){
    this.setState({
      count:0
    });
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.setState(() => {
    //   return {
    //     count:0
    //   }
    // })
  }
  render(){
    return (
      <div>
      <h1>Count - {this.state.count}</h1>
      <button onClick={this.addone}>Add</button>
      <button onClick={this.subtractone}>Subtract</button>
      <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
ReactDOM.render(<Componentcounter/>,document.getElementById("app"))
