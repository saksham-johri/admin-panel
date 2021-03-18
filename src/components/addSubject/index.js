import React, { useState } from "react";

export default function AddSubject() {
  const [count, setCount] = useState(1);

  return (
    <form>
      {Array.from(Array(count), (e, i) => {
        return (
          <section className="form-group">
            <label>Select Video: {i}</label>
            <input
              key={i}
              type="file"
              id="video"
              className="form-control"
              name={"video" + { i }}
              accept="video/*"
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
          Add File
        </button>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </div>
    </form>
  );
}
