import React from 'react'
import '../app.css'

class EduInfo extends React.Component{

  render(){
    return(
      <>
      <div className="form-student">
        <div className="center">
          <h1>Step 3</h1>
          <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Educational Qualification:</label>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">10th Percentage</label>
                <input type="number" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">12th Percentage</label>
                <input type="number" className="form-control" />
              </div>
              <fieldset className="row">
                <label className="col lg-4">Graduation:</label>
                <div className="col lg-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                    <label className="form-check-label" for="gridRadios1">
                      Appearing
                    </label>
                  </div>
                  </div>
                  <div className="col lg-4">
                  <div className="form-check ">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                    <label className="form-check-label" for="gridRadios2">
                      Appeared
                    </label>
                  </div>
                  </div>
              </fieldset>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Graduation Percentage</label>
                <input type="number" className="form-control" />
              </div>
              <button  className="btn btn-primary btn1" 
              onClick={this.props.prevPage}
              >Back</button>
              <button  className="btn btn-primary btn2" 
              onClick={this.props.nextPage}
              >
                Next
                </button>
            </form>
          </div>
      </div>
      </>
    )
  }
}
export default EduInfo;