import React from 'react'
import '../app.css'
import { errorFinder } from "./../services/errorHandling";
import { formDataType } from "./../constants/errorHandling";
class FamilyInfo extends React.Component {

  render() {
    return (
      <>
        <div className="form-student">
          <div className="center">
            <h1>Step 2</h1>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Father Name</label>
                <input type="text" 
                className="form-control" 
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="fatherName"
                value={this.props.details.fatherName || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mother Name</label>
                <input type="text" 
                className="form-control" 
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="motherName"
                value={this.props.details.motherName || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Present Address</label>
                <textarea type="text" 
                className="form-control" 
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="presentAddress"
                value={this.props.details.presentAddress || ""}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Permanent Address</label>
                <textarea type="text" 
                className="form-control"
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="permanentAddress"
                value={this.props.details.permanentAddress || ""}
                />
              </div>
              <button className="btn btn-primary btn1"
                onClick={this.props.prevPage}
              >Back</button>
              <button className="btn btn-primary btn2"
               onClick={()=>{
                let data = {
                  fatherName: this.props.details.fatherName,
                  motherName: this.props.details.motherName,
                  permanentAddress: this.props.details.permanentAddress,
                  presentAddress: this.props.details.presentAddress,
                }
                let hasError = errorFinder(data, formDataType.ADD_STUDENT_NEW_STEP2);
                if (hasError) return null;
                this.props.nextPage()
              }}
              >Next</button>
          </div>
        </div>
      </>
    )
  }
}
export default FamilyInfo;