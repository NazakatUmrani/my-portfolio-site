import React from "react";

import image from "../images/education-wall.jpg";

const imageAltText = "education image";


const Education = () => {
    return(
        <section className="light" id="education">
            <h2>Education</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div style={{ maxWidth: "40%", alignSelf: "center" }}>
                <img
                    src={image}
                    style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
                    alt={imageAltText}
                />
            </div>
            <div className="container">
                <div className="box">
                    <h3>Matriculation</h3>
                    <p>2009 - 2019</p>
                    <p>Gul Grammar High School, Sindh, Pakistan.</p>
                </div>
                <div className="box">
                    <h3>Intermediate</h3>
                    <p>2019 - 2021</p>
                    <p>Makhdoom Zaman Talib ul Moula Degree College, Sindh, Pakistan.</p>
                </div>
                <div className="box">
                    <h3>Bachelor of Engineering in Software Engineering</h3>
                    <p>2021 - 2025</p>
                    <p>Quaid-e-Awam University of Enginneering Science and Technology, Nawabshah, Sindh, Pakistan.</p>
                </div>
                <div className="box">
                    <h3>Master of Engineering in Software Engineering</h3>
                    <p>2025 - 2027</p>
                    <p>Quaid-e-Awam University of Enginneering Science and Technology, Nawabshah, Sindh, Pakistan.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Education;