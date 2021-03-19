import { Formik } from 'formik';
import React, { useState } from 'react'

export default function ViewSubjects() {

    const [count, setCount] = useState(0);
    let data = [{
        name: "English",
        desc: "wertyuisdfghwerty wertyudfgh ertyudfgh rthj",
        video: "http://google.com"

    }, {
        name: "English",
        desc: "wertyuisdfghwerty wertyudfgh ertyudfgh rthj",
        video: "http://try.com"

    }, {
        name: "English",
        desc: "we kkk kk rtyuisdfghwerty wertyudfgh ertyudfgh rthj",
        video: "http://youtube.com"

    },]
    return (
        <div>
            {data?.map((item, index) => {
                const {
                    name = "",

                    desc = "",

                    video = "",
                } = item || {};
                return (
                    <div
                        className="row"
                        key={index}
                        style={{
                            backgroundColor: "white",
                            margin: 5,
                            padding: 10,
                            width: "50em",
                        }}
                    >
                        <p className="col-6" style={{ fontSize: 14, color: "#000" }}>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>Subject Name: </span>
                            {name}
                        </p>
                        {/* <p className="col-6" style={{ fontSize: 14, color: "#000" }}>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>Subject Video: </span>
                            {video}
                        </p> */}
                        <iframe height="447" src="https://www.youtube.com/embed/LDZX4ooRsWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        {/* <video height="240" controls >
                            <source src="https://www.youtube.com/watch?v=LDZX4ooRsWs" type="video/mp4"></source>
                        </video> */}
                        <p style={{ fontSize: 14, color: "#000" }}>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>
                                Description:{" "}
                            </span>
                            {desc}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: 20,
                            }}
                        >
                            <button className="btn btn-dark">Add video</button>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}
