import React from 'react'
import '../app.css'
import App from '../App'

class FamilyInfo extends React.Component{
  
  render(){
    const{stepForms} = this.props
    return(
      <>
      <div className="form-student">
        <div className="center">
          <h1>Step 2</h1>
          <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Father Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mother Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Present Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Permanent Addressr</label>
                <input type="text" className="form-control" />
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
export default FamilyInfo;