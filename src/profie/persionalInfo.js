import React from 'react'
import '../app.css'
import App from '../App'

class PersionalInfo extends React.Component{
  
  render(){
    const {stepForms , stepHandler} = this.props
    return(
      <>
      <div className="form-student">
        <div className="center">
          <h1>Step 1</h1>
          <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                <input type="number" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Age</label>
                <input type="number" className="form-control" />
              </div>
              <div className="">
                
              <fieldset className="row">
                <label className="col lg-4">Gender</label>
                <div className="col lg-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                    <label className="form-check-label" for="gridRadios1">
                      Male
                    </label>
                  </div>
                  </div>
                  <div className="col lg-4">
                  <div className="form-check ">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                    <label className="form-check-label" for="gridRadios2">
                      Female
                    </label>
                  </div>
                  </div>
              </fieldset>
              </div>
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
export default PersionalInfo;
