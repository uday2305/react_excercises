function App(props){
  return(
        <SelectionForm />
  );
}

function Formbutton(props){
  if(props.show!=="button"){
    return null;
  }
  return(
    <div>
    <button>Button</button>
    </div>
  );
}

class FormInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    try{
      this.setState({value: event.target.value.toUpperCase()});
    }
    catch(ex){

    }
  }
  render(){
    if(!(this.props.show==="inputnum" || this.props.show==="inputtext")){
      return null;
    }
    return(
        <div>
           {
             this.props.show == "inputtext" ?
              (
               <input type="text" value = {this.state.value} placeholder="enter a string" onChange={this.handleChange}/>
              )
              :
              (
                <input type="number" placeholder="enter a number"/>
              )
           }
      </div>
        );
  }
  }

function TextArea(props){
  if(props.show!=="textarea"){
    return null;
  }
  return(
    <div>
    <textarea  />
    </div>
  );
}
function Formbutton(props){
  if(props.show!=="button"){
    return null;
  }
  return(
    <button>Button</button>
  );
}

class SelectionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {formElementSelected:'inputnum'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({formElementSelected: event.target.value});
  }

  render(){
    return(
      <div>
      <select value={this.state.formElementSelected} onChange={this.handleChange}>
        <option value="inputnum">Input number</option>
        <option value="inputtext">Input text</option>
        <option value="button">Button</option>
        <option value="textarea">TextArea</option>
      </select>
      <Formbutton show={this.state.formElementSelected} />
      <FormInput show={this.state.formElementSelected} />
      <TextArea show={this.state.formElementSelected} />
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
