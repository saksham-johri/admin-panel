import React, { useState } from "react";
import "./style.scss";

const AddCource = ({  addCourse  }) => {
  const [courseName, setCourseName] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [prerequisite, setPrerequisite] = useState("");
  const [learning, setLearning] = useState("");

  const handleSubmit = (e) => {
    let obj = {
      name: courseName,
      category: category,
      createdBy: createdBy,
      price: price,
      desc: desc,
      prerequisite: prerequisite,
      learning: learning,
    };
    addCourse(obj);
    console.log("courses", obj);
  };
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
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="courseName">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter Course Name"
          />
        </div>
        <div class="form-group">
          <label for="courseCategory">Course Category</label>
          <input
            type="text"
            class="form-control"
            id="courseCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </div>
        <div class="form-group">
          <label for="courseCreatedBy">Course CreatedBy</label>
          <input
            type="text"
            class="form-control"
            id="courseCreatedBy"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            placeholder="Enter Created By"
          />
        </div>
        <div class="form-group">
          <label for="coursePrice">Course Price</label>
          <input
            type="text"
            class="form-control"
            id="coursePrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Price"
          />
        </div>
        <div class="form-group">
          <label for="courseDescription">Course Description</label>
          <textarea
            type="text"
            class="form-control"
            id="courseDescription"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <div class="form-group">
          <label for="coursePrerequisite">Course Prerequisite</label>
          <input
            type="text"
            class="form-control"
            id="coursePrerequisite"
            value={prerequisite}
            onChange={(e) => setPrerequisite(e.target.value)}
            placeholder="Enter Prerequisite"
          />
        </div>
        <div class="form-group">
          <label for="courseLearning">Course Learning</label>
          <input
            type="text"
            class="form-control"
            id="courseLearning"
            value={learning}
            onChange={(e) => setLearning(e.target.value)}
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
