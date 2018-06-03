class Indecision extends React.Component{
  render(){
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    const options = ['option one','option two','option three'];
    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action/>
      <Options optionsall={options}/>
      <Remove />
      <Forms />
      </div>
    )
  }
}
class Options extends React.Component{
  constructor(props){
    super(props);
    this.mylogger = this.mylogger.bind(this)
  }
  mylogger(){
    console.log(this.props.optionsall);
  }
  render(){
    return (
      <div>
      <button onClick={this.mylogger}>Console.log</button>
      {
        this.props.optionsall.map((options_new) => <Newoption key={options_new} optiontext={options_new} />)
      }
      </div>
    )
  }
}
class  Newoption extends React.Component {
  render(){
    return (
      <div>
      <p>{this.props.optiontext}</p>
      </div>
    )
  }
}
class Header extends React.Component {
  render(){
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Remove extends React.Component {
  removebtn(){

    alert('clicked on remove button')
  }
  render(){
    return (
    <div>
    <button onClick={this.removebtn}>Remove all</button>
    </div>
  )
  }
}
class Action extends React.Component{
  actioner(){

  }
  render(){
    return (
      <div>
      <button onClick={this.actioner}> Click Me</button>
      </div>
    )
  }
}
class Forms extends React.Component{
  submmithandler(e){
    let username = e.target.elements.username.value.trim();
    if(username){
      e.target.elements.username.value = "";
      alert(`Your username is ${username}`);
    } else {
      alert('Not valid')
    }
    e.preventDefault();
  }
  render(){
    return (
      <div>
      <form onSubmit={this.submmithandler}>
      <input type="text" name="username" id="username"/>
      <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}
ReactDOM.render(<Indecision />, document.getElementById("app"))
