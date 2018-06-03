console.log('app js is loading');

//JSX
var app = {
  title:"Changeing this",
  subtitle:"subtitles"
};
console.log(app);
var templates =(
  <div>
  <div id = "namechange">{app.title}</div>
  <p>{app.subtitle}</p>
  <ol>
  <li>Me</li>
  <li>You</li>
  </ol>
  <h1>Neww tags</h1>
  </div>);
  var username = {
    name:"Sandeep",
    "age":20,
    "location":"Chennai"
  }
  console.log(username)
  var templte1 = (
    <div>
    <p>{username.name}</p>
    <p>Age -> {username.age}</p>
    <p>Location -> {username.location}</p>
    </div>
  )
let count = 0;
const addone = () =>{
  count++;
  finalrendering();
};

  var idss = document.getElementById('app');


  const finalrendering = () =>{
    const maindiv = (
      <div>
      <h1> Count : {count}</h1>
      <button id="burtton" className="newclass" onClick={addone}>+1</button>
      </div>
    );
      ReactDOM.render(maindiv,idss);
  };
  finalrendering();
