import React from 'react'
import '../app.css'
import { errorFinder } from "./../services/errorHandling";
import { formDataType } from "./../constants/errorHandling";

class PersonalInfo extends React.Component {
  
  render() {
    return (
      <>
        <div className="form-student">
          <div className="center">
            <h1>Step 1</h1>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                <input 
                type="text" 
                className="form-control"
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="firstName"
                value={this.props.details.firstName || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                <input type="text" 
                className="form-control"
                onChange={(e)=>this.props.onChangeHandler(e)}
                name="lastName"
                value={this.props.details.lastName || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input 
                type="text" 
                name="email"
                className="form-control" 
                onChange={(e)=>this.props.onChangeHandler(e)}
                value={this.props.details.email || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                <input 
                type="number" 
                className="form-control" 
                onChange={(e)=>this.props.onChangeHandler(e)}
                name="contactNumber"
                value={this.props.details.contactNumber || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Age</label>
                <input type="number" 
                className="form-control"
                onChange={(e)=>this.props.onChangeHandler(e)}
                name="age"
                value={Number(this.props.details.age) || ""}
                />
              </div>
              <div className="">
                <fieldset className="row">
                  <label className="col lg-4">Gender</label>
                  <div className="col lg-4">
                    <div className="form-check">
                      <input className="form-check-input" 
                      type="radio" 
                      name="gender"  
                      value="male" 
                      checked = {this.props.details.gender === "male"}
                      onChange={(e)=>this.props.onChangeHandler(e)}
                      
                      />
                      <label className="form-check-label" for="gridRadios1">
                        Male
                      </label>
                    </div>
                  </div>
                  <div className="col lg-4">
                    <div className="form-check ">
                      <input className="form-check-input"
                      type="radio" 
                      name="gender"  
                      value="female" 
                      checked = {this.props.details.gender === "female"}
                      onChange={(e)=>this.props.onChangeHandler(e)}/>
                      <label className="form-check-label" for="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <button className="btn btn-primary btn2"
                onClick={()=>{
                  let data = {
                    firstName: this.props.details.firstName,
                    lastName: this.props.details.lastName,
                    email: this.props.details.email,
                    contactNumber: this.props.details.contactNumber,
                    age: Number(this.props.details.age),
                    gender: this.props.details.gender,
                  }
                  let hasError = errorFinder(data, formDataType.ADD_STUDENT_NEW_STEP1);
                  if (hasError) return null;
                  this.props.nextPage()
                }}
              >
                Next
              </button>
          </div>
        </div>
      </>
    )
  }
}
export default PersonalInfo;
