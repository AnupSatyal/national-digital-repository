import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// SAMPLE UPLOAD THESIS COMPONENT, YOU CAN UPDATE OR CREATE YOUR OWN
class UploadThesis extends Component {
  render() {
    return (
      <div className="upload-thesis">
        <div className="container">


        <h2>UPLOAD YOUR THESIS</h2>

        <form>
          <table id="UploadTable"
              class="table table-bordered
                     table-condensed table-striped">
        <thead>
          <tr>
            <th><button type="button" class="btn btn-success btn-lg btn-block">SELECT  YOUR  THESIS</button></th>
            <th><input type="file" name="datafile"></input></th>
           <th><button type="button" class="btn btn-danger">REMOVE</button></th>
          </tr>
          <br>
          <tr>
        <th><button type="button" class="btn btn-success btn-lg btn-block">SUPPLEMENTARY DOCUMENTS</button></th>
        <th><input type="file" name="datafile"></input></th>
        <th><button type="button" class="btn btn-danger">REMOVE</button></th>
       </tr>
            <br>
            <tr>
            <th><button type="button" class="btn btn-success btn-lg btn-block">FIELD  VISIT  PHOTOGRAPHS</button></th>
           <th><input type="file" name="datafile"></input> size="40"></th>
          <th><button type="button" class="btn btn-danger">REMOVE</button></th>

         </tr>
            </br>
            </br>
            

        </thead>
      </table>

    

  <div class="checkbox">
      <input type="checkbox" name="thesis" value=""></input>I conform the given information is correct<br>
      <input type="checkbox" name="thesis" value=""></input>I agree the terms and conditions<br>
  </br>
  </br>
   </div>
</form>
  <div class="button">
      <a href="#" class="previous"> BACK</a>
      <a href="#" class="next">SAVE AND CONTINUE LATER &raquo;</a>
      <a href="#" class="next">NEXT &raquo;</a>
  </div>

</div>
</div>
       
    );
  }
}
export default UploadThesis;
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

UploadThesis.propTypes = {};

//export default connect(
 //mapStateToProps,
//mapDispatchToProps
//  )
//(UploadThesis);
