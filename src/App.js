import React, { Component } from "react";
import PersonalInfo from "./profile/personalInfo";
import FamilyInfo from "./profile/familyInfo";
import EduInfo from "./profile/eduInfo";
import Preview from "./profile/preview";
import {action } from './store/student/action' 
import { connect } from 'react-redux'
import { toast } from "react-toastify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 1,
      firstName:'',
      lastName:'',
      email:'',
      contactNumber:'',
      age:'',
      gender:'',
      fatherName:'',
      motherName:'',
      presentAddress:'',
      permanentAddress:'',
      highSchool:'',
      secondary:'',
      graduation:''
    };
  }
  

  nextPage = () => {
    this.setState({
      stepNumber: this.state.stepNumber + 1
    })

  }

  prevPage = () => {
    this.setState({
      stepNumber: this.state.stepNumber - 1
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };


  saveHandler = (e) => {
    const {firstName,lastName,email,contactNumber,age,gender,fatherName,motherName,presentAddress,permanentAddress,highSchool,secondary,graduation} = this.state
    let data = {
      firstName,
      lastName,
      email,
      contactNo: contactNumber,
      age:Number(age),
      gender,
      fatherName,
      motherName,
      presentAddress,
      permanentAddress,
      percentage10: Number(highSchool),
      percentage12: Number(secondary),
      percentageGraduation: Number(graduation),
      graduationPassed: true,  
    };
    this.props.action(data).then(e =>{
      if(e._id!==""){
        toast.success("Data Saved Successfully");
        this.resetForm()
      }
    })
    .catch(err =>{
      toast.error("Some went wrong from server side")
    })
    ;
  }

  resetForm = () => {
    this.setState({
      stepNumber: 1,
      firstName:'',
      lastName:'',
      email:'',
      contactNumber:'',
      age:'',
      gender:'',
      fatherName:'',
      motherName:'',
      presentAddress:'',
      permanentAddress:'',
      highSchool:'',
      secondary:'',
      graduation:''
    })
  }
  render() {
    const { stepNumber } = this.state
    const {firstName,lastName,email,contactNumber,age,gender,fatherName,motherName,presentAddress,permanentAddress,highSchool,secondary,graduation} = this.state
    const values = {firstName,lastName,email,contactNumber,age,gender,fatherName,motherName,presentAddress,permanentAddress,highSchool,secondary,graduation}

    // eslint-disable-next-line default-case
    switch (stepNumber) {
      case 1:
        return (
          <PersonalInfo 
          nextPage={this.nextPage} 
          onChangeHandler={this.onChangeHandler}
          details ={values}/>
        )
      case 2:
        return (
          <FamilyInfo 
          nextPage={this.nextPage} 
          prevPage={this.prevPage} 
          onChangeHandler={this.onChangeHandler} 
          details ={values} />
        )
      case 3:
        return (
          <EduInfo 
          prevPage={this.prevPage}
          nextPage={this.nextPage} 
          onChangeHandler={this.onChangeHandler} 
          saveHandler={this.saveHandler}
          details ={values}/>
        )
      case 4:
        return (
          <Preview
          prevPage={this.prevPage} 
          onChangeHandler={this.onChangeHandler} 
          saveHandler={this.saveHandler}
          details ={values}/>
        )
    }

  }
}

const mapStateToProps = state => ({
  counter:state,
  })

  const mapDispatchToProps = {
    action
  }
  
  export default connect(mapStateToProps,mapDispatchToProps) (App);;