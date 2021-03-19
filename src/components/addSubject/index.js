import React, { useState } from "react";
import { Formik } from "formik";
export default function AddSubject() {
  const [count, setCount] = useState(1);

  return (
    <Formik
      initialValues={{ name:  "",  desc:  "",  video: "" }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.video) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <section className="form-group">
            <label>Subject Name:</label>
            <input
              key="name"
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </section>
          <section className="form-group mb-2">
            <label>Subject Description:</label>
            <textarea
              key="desc"
              type="text"
              id="desc"
              className="form-control"
              name="desc"
              value={values.desc}
              onChange={handleChange}
            />
          </section>
          {Array.from(Array(count), (e, i) => {
            return (
              <section className="form-group">
                <label>Select Video: {i + 1}</label>
                <input
                  key={`video${i + 1}`}
                  type="file"
                  id={`video${i + 1}`}
                  className="form-control"
                  name={`video${i + 1}`}
                  accept="video/*"
                  value={values.video[i + 1]}
                  onChange={handleChange}
                />
              </section>
            );
          })}
          <div className="row p-2" style={{ textAlign: "center" }}>
            <button
              className="btn btn-dark mb-2"
              onClick={(e) => {
                e.preventDefault();
                setCount(count + 1);
              }}
            >
              Add Video File
            </button>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
