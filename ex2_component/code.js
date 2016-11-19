function Welcome(props){
  return <h3>This line is displayed via {props.type} type component : {props.name}</h3>;
}

class Hello extends React.Component{
  render(){
    return <h3>This line is displayed via {this.props.type} type component : {this.props.name}</h3>;
  }
}

ReactDOM.render(
  <div>
    <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
    <h1>Functional Component</h1>
    <ul>
      <li>Its similar to JavaScript functions(), which will be accepting one parameter known as props</li>
      <li>And returns an react Element</li>
    </ul>
    <Welcome type="function" name="Welcome"/>
    <p>
      Note: Always start component names with a capital letter.
    </p>

    <h1>Class Component</h1>
    <ul>
      <li>Its follows ES6 class sturcture</li>
      <li>custom class component should extend React.Component</li>
      <li>class contains a method called render which returns React element</li>
    </ul>
    <Hello type="class" name="Hello"/>
    <p>
      Note: Always class names start with a capital letter.
    </p>

  </div>,
  document.getElementById('root')
);
