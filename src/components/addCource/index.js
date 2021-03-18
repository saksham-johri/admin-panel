import React from "react";
import "./style.scss";

const AddCource = () => {
  return (
    <div>
      {/* <form action='javascript:void(0)'>
        <h1>Course Evaluation Survey</h1>
        <h4>COURSE</h4>
        <input type='text' style={{ margin: ' 10px 0 '}} />

        <p class='comments'>Comments</p>
        <textarea rows='5'></textarea>

        <div class='btn-block'>
          <button type='submit' href='/'>
            Send
          </button>
        </div>
      </form> */}
      <form>
        <div class="form-group">
          <label for="courseName">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="courseName"
            placeholder="Enter Course Name"
          />
        </div>
        <div class="form-group">
          <label for="courseCategory">Course Category</label>
          <input
            type="text"
            class="form-control"
            id="courseCategory"
            placeholder="Enter Category"
          />
        </div>
        <div class="form-group">
          <label for="courseCreatedBy">Course CreatedBy</label>
          <input
            type="text"
            class="form-control"
            id="courseCreatedBy"
            placeholder="Enter Created By"
          />
        </div>
        <div class="form-group">
          <label for="coursePrice">Course Price</label>
          <input
            type="text"
            class="form-control"
            id="coursePrice"
            placeholder="Enter Price"
          />
        </div>
        <div class="form-group">
          <label for="courseDescription">Course Description</label>
          <textarea
            type="text"
            class="form-control"
            id="courseDescription"
            placeholder="Enter Description"
          />
        </div>
        <div class="form-group">
          <label for="coursePrerequisite">Course Prerequisite</label>
          <input
            type="text"
            class="form-control"
            id="coursePrerequisite"
            placeholder="Enter Prerequisite"
          />
        </div>
        <div class="form-group">
          <label for="courseLearning">Course Learning</label>
          <input
            type="text"
            class="form-control"
            id="courseLearning"
            placeholder="Enter Learning"
          />
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCource;
