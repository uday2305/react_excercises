
/***
  SlidesContainer Component
  Parent Component all Slides
**/
class SlidesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slidePlaying: "1"};
    // This binding is necessary to make `this` work in the callback
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  /**
      KeyPress Listener of teh SlidesContainer
      keyCode 39 - RightArrow - Current Slide  + 1
      keyCode 37 - leftArrow - Current Slide  - 1
  **/
  handleKeyPress(event) {
      if(event.keyCode === 39)
      {
        if(this.state.slidePlaying!==this.props.totalSlides){
          this.setState({slidePlaying:""+(parseInt(this.state.slidePlaying) + 1)});
        }
      }
      else if (event.keyCode === 37) {
        if(this.state.slidePlaying!=="1"){
          this.setState({slidePlaying:""+(parseInt(this.state.slidePlaying) - 1)});
        }
      }
  }

  render() {
    const slideContainerStyle = {
      minHeight:"100%",
      height:"auto",
      backgroundColor: "#222",
      color:"white"
  };
    return (
      <div style={slideContainerStyle} onKeyUp={this.handleKeyPress} tabIndex="1">
          <Slide slideNum="1" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="2" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="3" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="4" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="5" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="6" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="7" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="8" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="9" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="10" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="11" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="12" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="13" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="14" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="15" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="16" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="17" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="18" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="19" playingSlide={this.state.slidePlaying}/>
          <Slide slideNum="20" playingSlide={this.state.slidePlaying}/>
      </div>
    );
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const slides = {
      "1": Slide1,
      "2": Slide2,
      "3": Slide3,
      "4": Slide4,
      "5": Slide5,
      "6": Slide6,
      "7": Slide7,
      "8": Slide8,
      "9": Slide9,
      "10": Slide10,
      "11": Slide11,
      "12": Slide12,
      "13": Slide13,
      "14": Slide14,
      "15": Slide15,
      "16": Slide16,
      "17": Slide17,
      "18": Slide18,
      "19": Slide19,
      "20": Slide20
    };
    var SlideToShow = slides[this.props.playingSlide];
    if(this.props.playingSlide !== this.props.slideNum){
      return null;
    }

    return(
        <div>
              <SlideToShow />
        </div>
    );
  }
}

class Slide1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const logo= "./logo.svg"
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Introduction to React</h2>
        </div>
        <p className="App-intro">
          Lets get started.........
        </p>
        <p className="Author">
          Uday Pulavarthi
        </p>
      </div>
    );
  }
}

class Slide2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const jslibs= "./apps.png";
    return(
      <ImageComponent imageSrc={jslibs}  imageAlt="libs"  />
    );
  }
}

class Slide3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const brands= "./brands.png";
      return(
        <ImageComponent imageSrc={brands}  imageAlt="brands"  />
    );
  }
}

function ImageComponent(props){
  return(
    <div className = "imageContainer">
        <img className = "imageContent" src={props.imageSrc}  alt={props.imageAlt}  />
    </div>
  );
}

class Slide4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
          <HeadingComponent content="What is React?" />
          <div>
                <ul className="listContainer">
                  <li> A <span className="highlightBlue">Library </span> for creating User Interfaces </li>
                  <li> Renders your UI and responds to Events</li>
                  <li> Aka: The <span className="highlightBlue">V</span> in MVC</li>
                </ul>
          </div>
      </div>
    );
  }
}

class Slide5 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./codeImg.jpg";
    return(
      <div>
          <HeadingComponent content="Hello React" />
          <div className="marTop_15">
            <ImageComponent imageSrc={urlImage}  imageAlt="JSXCode"  />
          </div>
      </div>
    );
  }
}

class Slide6 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
          <HeadingComponent content="JSX" />
          <div>
                <ul className="listContainer">
                  <li> <span className="highlightBlue">JSX</span> lets you create JavaScript using HTML Syntax </li>
                  <li> Its <span className="highlightBlue">Optional..</span> But once you get used to it is very helpful </li>
                </ul>
          </div>
          <div className="importantText">
              <span className="highlightBlue">Markup and display logic share the same concern </span>
          </div>
      </div>
    );
  }
}


class Slide7 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
          <HeadingComponent content="React has no........" />
          <div>
                <ul className="listContainer small">
                  <li> controllers </li>
                  <li> directives </li>
                  <li> templates </li>
                  <li> global event listeners </li>
                  <li> models </li>
                  <li> no view models </li>
                </ul>
          </div>
          <div className="importantText">
              <span className="highlightBlue">Just Components </span>
          </div>
      </div>
    );
  }
}

class Slide8 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <div>
        <HeadingComponent content="Everything is Component" />
        <div>
              <ul className="listContainer small">
                <li> HTML is defined inside the Component </li>
                <li> Component contains logic </li>
                <li> State is private </li>
                <li> Support Parameters(Props) </li>
                <li> Events or Callbacks for communication </li>
              </ul>
        </div>
        </div>
    );
  }
}
class Slide9 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./component1.png";
      return(
        <div>
          <HeadingComponent content="Components" />
          <div className="marTop_15">
            <ImageComponent imageSrc={urlImage}  imageAlt="component1"  />
          </div>
        </div>
    );
  }
}

class Slide10 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./component2.png";
      return(
        <div>
          <HeadingComponent content="Components" />
          <div className="marTop_15">
            <ImageComponent imageSrc={urlImage}  imageAlt="component2"  />
          </div>
        </div>
    );
  }
}

class Slide11 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./component3.png";
      return(
        <div>
          <HeadingComponent content="Components" />
          <div className="marTop_15">
            <ImageComponent imageSrc={urlImage}  imageAlt="component3"  />
          </div>
        </div>
    );
  }
}

class Slide12 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./component4.png";
      return(
        <div>
          <HeadingComponent content="Components" />
          <div className="marTop_15">
            <ImageComponent imageSrc={urlImage}  imageAlt="component4"  />
          </div>
        </div>
    );
  }
}

class Slide13 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./component5.png";
      return(
        <div>
          <HeadingComponent content="Components" />
          <div className="marTop_15">
            <ImageComponent imageSrc={urlImage}  imageAlt="component5"  />
          </div>
        </div>
    );
  }
}
class Slide14 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      return(
        <div>
            <HeadingComponent content="Separation of Component makes:" />
            <div>
                  <ul className="listContainer small">
                    <li> Composable </li>
                    <li> reusable </li>
                    <li> maintainable </li>
                    <li> testable </li>
                  </ul>
            </div>
            <div className="importantText">
                <span className="highlightBlue">*IF* components are truly self-contained </span>
            </div>
        </div>
    );
  }
}

class Slide15 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const urlImage= "./vdom.jpg";
    return(
      <ImageComponent imageSrc={urlImage}  imageAlt="virtual DOM"  />
    );
  }
}

class Slide16 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./vdom1.jpg";
      return(
        <ImageComponent imageSrc={urlImage}  imageAlt="Virtual DOM"  />
    );
  }
}

class Slide17 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      return(
        <div>
            <HeadingComponent content="On Every Update:" />
            <div>
                  <ul className="listContainer small">
                    <li> React builds a new virtual DOM subtree </li>
                    <li> Diff it with the old one </li>
                    <li> Computes the minimal sets of DOM mutations and puts them in a queue </li>
                    <li> Batch executes all updates </li>
                  </ul>
            </div>
        </div>
    );
  }
}

class Slide18 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      return(
        <div>
            <HeadingComponent content="Usage of React:" />
            <div>
                  <ul className="listContainer small">
                    <li>
                        Isomarphic JavaScript:
                        <p> - Shared JavaScript runs on both the client & server</p>
                     </li>
                    <li>
                        Native Apps (React Native):
                        <p> - Learn once and use  everywhere</p>
                     </li>
                  </ul>
            </div>
        </div>
    );
  }
}

class Slide19 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const urlImage= "./reactNative.jpg";
    return(
      <div>
        <HeadingComponent content="React Eco-System:" />
        <ImageComponent imageSrc={urlImage}  imageAlt="reactNative"  />
      </div>
    );
  }
}

class Slide20 extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const urlImage= "./thankyou.jpg";
      return(
        <div className="thankyou">
          <ImageComponent imageSrc={urlImage}  imageAlt="thankyou"  />
        </div>
    );
  }
}


function HeadingComponent(props){
  return(
    <div className="App-heading-container">
        <div className="App-heading-content">{props.content}</div>
    </div>
  );
}
ReactDOM.render(
  <SlidesContainer totalSlides="20"/>,
  document.getElementById('root')
);
