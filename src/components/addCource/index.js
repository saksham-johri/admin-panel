import React from 'react';
import './style.scss';

const AddCource = () => {
  return (
    <div class='main-block'>
      <form action='javascript:void(0)'>
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
      </form>
    </div>
  );
};

export default AddCource;
