import React, { Component } from 'react';
import "../../styles/upload.css";
import InputFormField from "../../common/InputFormField";

export default class UploadInfo extends Component {
  render() {
    return (
      <div className="upload">
      <form>
      <label>Documents Upload</label>
    
      <div className="form-actions side-by-side">
              <button className="btn btn-accept">Select your thesis <i class="fas fa-angle-right"></i></button>
              <InputFormField label=""  value="NEPGOProject.doc" />
              <button className="btn btn-warning">  Remove</button>
              </div>

              <div className="form-actions side-by-side">
              <button className="btn btn-accept">Supplementary Documents <i class="fas fa-angle-right"></i></button>
              <InputFormField label=""  value="FieldSurvey.xis" />
              <button className="btn btn-warning">  Remove</button>
              </div>

              <div className="form-actions side-by-side">
              <button className="btn btn-accept">Field Photogrphs <i class="fas fa-angle-right"></i></button>
              <InputFormField label=""  value="FieldVisit.jpg" />
              <button className="btn btn-warning">  Remove </button>
              </div>

              <div>
              <input type="checkbox" name="agreement" />
              <label>I hearby confirm all the given information is correct.</label>
              </div>

              <div>
              <input type="checkbox" name="agreement" />
              <label>I agree thesis portal's terms and condition.</label>
              </div>

              <div className="form-actions side-by-side">
              <button className="btn btn-warning">  Cancel</button>
              <button className="btn btn-accept">Save and Continue later <i class="fas fa-angle-right"></i></button>
              <button className="btn btn-accept"> Next <i class="fas fa-angle-right"></i></button>
              </div>

              </form>

      </div>
    );
  }
}
