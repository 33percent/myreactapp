console.log('app js is loading');

//JSX
let app={
  title:"title",
  "subtitle":"subtitle",
  newarr:["a","b","c"]
};
const onFormsubmit = (e) => {
  e.preventDefault();
  let a = e.target.elements.named.value;
  if(a){
    app.newarr.push(a);
    e.target.elements.named.value = "";
    finalrendering();
    console.log(app)
  } else {
  }
}
const removeall = () => {
  app.newarr.length = 0;
  finalrendering();
}
const whatshoudlido = () =>{
  let randomnum = Math.floor(Math.random() * app.newarr.length);
  console.log(randomnum);
}
const finalrendering = () => {
  var templates =(
    <div>
    <div id = "namechange">{app.title}</div>
    <p>{app.subtitle}</p>
    <ol>
    <li>Me</li>
    <li>You</li>
    </ol>
    <h1>Neww tags</h1>
    <p>{app.newarr.length}</p>
    {
      [12,25,26,'asdhasdhj',null,undefined]
    }
    <form onSubmit={onFormsubmit}>
    <input type = "text" name="named"/>
    <input type = "submit" value = "Save"/>
    </form>
    <button onClick={removeall}>Remove all</button>
    <button onClick={whatshoudlido}> What dhould i do </button>
    </div>);
    var idss = document.getElementById('app');
    ReactDOM.render(templates,idss);
  };
  finalrendering();
