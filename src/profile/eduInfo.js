import React from 'react'
import '../app.css'
import { action } from '../store/student/action' 
import { connect } from 'react-redux'
import { errorFinder } from "./../services/errorHandling";
import { formDataType } from "./../constants/errorHandling";


class EduInfo extends React.Component{

  render(){
    return(
      <>
      <div className="form-student">
        <div className="center">
          <h1>Step 3</h1>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Educational Qualification:</label>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">10th Percentage</label>
                <input 
                type="number" 
                className="form-control"
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="highSchool"
                value={this.props.details.highSchool || ""}
                min="0"
                max="100"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">12th Percentage</label>
                <input 
                type="number" 
                className="form-control" 
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="secondary"
                value={this.props.details.secondary || ""}
                min="0"
                max="100"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Graduation Percentage</label>
                <input 
                type="number" 
                className="form-control" 
                onChange={(e)=>{this.props.onChangeHandler(e)}}
                name="graduation"
                value={this.props.details.graduation || ""}
                min="0"
                max="100"
                />
              </div>
              <button  className="btn btn-primary btn1" 
              onClick={this.props.prevPage}
              >Back</button>
              <button  className="btn btn-primary btn2" 
               onClick={()=>{
                let data = {
                  highSchool: this.props.details.highSchool,
                  secondary: this.props.details.secondary,
                  graduation: this.props.details.graduation,
                }
                let hasError = errorFinder(data, formDataType.ADD_STUDENT_NEW_STEP3);
                if (hasError) return null;
                this.props.nextPage()
              }}
              >Preview
                </button>
          </div>
      </div>
      </>
    )
  }
}


const mapStateToProps = state => ({
counter:state,
})
const mapDispatchToProps = {
  action
}

export default connect(mapStateToProps,mapDispatchToProps) (EduInfo);