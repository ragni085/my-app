import React, { Component } from "react";
import PersionalInfo from "./profie/persionalInfo";
import FamilyInfo from "./profie/familyInfo";
import EduInfo from "./profie/eduInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 1
    };
  }

  stepHandler = (type = "forward") => {
    if (type === "forward") {
      this.setState({ stepNumber: this.state.stepNumber + 1 });
    } else if (type === "backward") {
      this.setState({ stepNumber: this.state.stepNumber - 1 });
    }
  };
  nextPage = () => {
    this.setState({
      stepNumber: this.state.stepNumber+1
    })
  }

  prevPage = () => {
    this.setState({
      stepNumber: this.state.stepNumber-1
    })
  }


  stepForms = () => {
    let { stepNumber } = this.state;
    if (stepNumber === 1) {
      return (
        <>
          <div> <PersionalInfo /></div>
          <button onClick={() => this.stepHandler("forward")}>nextd</button>
        </>
      );
    } else if (stepNumber === 2) {
      return (
        <>
          <div><FamilyInfo/></div>
          <button onClick={() => this.stepHandler("backward")}>previous</button>
          <button onClick={() => this.stepHandler("forward")}>next</button>
        </>
      );
    } else if (stepNumber === 3) {
      return (
        <>
          <div><EduInfo/></div>
          <button onClick={() => this.stepHandler("backward")}>previous</button>
          <button onClick={() => this.addHandler()}>Save</button>
        </>
      );
    }
  };
  addHandler = () => {};

  formsHandler = () => {

  }

  render() {
    const {stepNumber} = this.state
    
      switch (stepNumber) {
        case 1:
          return(
            <PersionalInfo stepForms={this.stepForms} nextPage = {this.nextPage}/>
          )
        case 2:
          return(
            <FamilyInfo stepForms={this.stepForms()} nextPage = {this.nextPage} prevPage = {this.prevPage}/>
          )
        case 3:
          return(
            <EduInfo stepForms={this.stepForms()} nextPage = {this.nextPage} prevPage = {this.prevPage}/>
          )
      }
    
  }
}

export default App;