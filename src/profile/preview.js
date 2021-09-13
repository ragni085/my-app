import React from 'react'
import '../app.css'

class Preview extends React.Component {
  
  render() {
    return (
      <>
        <div className="form-student">
          <div className="center">
            <h1>Student Details </h1>
            <form>
              <div className="row mt-3">
                <div className="col-md-6">
                  First Name
                </div>
                <div className="col-md-6">
                  {this.props.details.firstName}
                </div>
                <div className="col-md-6">
                  Last Name
                </div>
                <div className="col-md-6">
                {this.props.details.lastName}
                </div>
                <div className="col-md-6">
                  Email Address
                </div>
                <div className="col-md-6">
                {this.props.details.email}
                </div>
                <div className="col-md-6">
                  Contact Number
                </div>
                <div className="col-md-6">
                {this.props.details.contactNumber}
                </div>
                <div className="col-md-6">
                  Age
                </div>
                <div className="col-md-6">
                {this.props.details.age}
                </div>
                <div className="col-md-6">
                  Gender
                </div>
                <div className="col-md-6">
                {this.props.details.gender}
                </div>
                <div className="col-md-6">
                  Father Name
                </div>
                <div className="col-md-6">
                {this.props.details.fatherName}
                </div>
                <div className="col-md-6">
                  Mother Name
                </div>
                <div className="col-md-6">
                {this.props.details.motherName}
                </div>
                <div className="col-md-6">
                  Present Address
                </div>
                <div className="col-md-6">
                {this.props.details.presentAddress}
                </div>
                <div className="col-md-6">
                  Permanent Address
                </div>
                <div className="col-md-6">
                {this.props.details.permanentAddress}
                </div>
                <div className="col-md-6">
                  High School Percentage
                </div>
                <div className="col-md-6">
                {this.props.details.highSchool}
                </div>
                <div className="col-md-6">
                  Secondary School Percentage
                </div>
                <div className="col-md-6">
                {this.props.details.secondary}
                </div>
                <div className="col-md-6">
                  Graduation Percentage
                </div>
                <div className="col-md-6">
                {this.props.details.graduation}
                </div>
              </div>
              <button className="btn btn-primary btn1"
                onClick={this.props.prevPage}
              >Back</button>
              <button className="btn btn-primary btn2"
                onClick={(e)=>{
                  e.preventDefault();
                  let newConfirmation = window.confirm("Are you sure you want to save new student detail?");
                  if(!newConfirmation) return null;
                  this.props.saveHandler()
                }}
              >save
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default Preview;
