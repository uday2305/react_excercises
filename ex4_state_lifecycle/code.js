class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    console.log("component Mounted");
    this.timerId = setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    console.log("component UnMounted");
    clearInterval(this.timerId);
  }
  tick(){
    this.setState(function(prevState, props) {
      return {
        date:new Date()
      };
    });
  }
  render(){
    return(
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
    );
  }
}

function Paragraph(props) {
  return <p>{props.details}</p>;
}
function Heading(props){
  return <h1>{props.details}</h1>;
}

function App(props){
  return (
    <div>
        <Heading details="Clock Component with StateFull:" />
        <Clock />
        <Heading details="3 important thing to be remembered in the context of state" />
        <Paragraph details="Do not Modify state directly always use setState()" />
        <Paragraph details="state updates will be done asynchronously" />
        <Paragraph details="State updates are merged" />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
