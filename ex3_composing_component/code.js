function Paragraph(props) {
  return <p>{props.details}</p>;
}
function Heading(props){
  return <h1>{props.details}</h1>;
}

function App() {
  return (
    <span>
      <Heading details="Compose Components"/>
      <Paragraph details="A component can compose multiple components" />
      <Paragraph details="This lets us use the same component abstraction for any level of detail" />
      <Paragraph details="This example contains 1 Heading component and 4 message components" />
      <Paragraph details="Note:Components must return a single root element, so we need to wrap all the components into one root tag element" />
    </span>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
