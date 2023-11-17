import React from "react";
import "./section.css";
import Typewriter from "typewriter-effect";

const SectionOne = () => {
  return (
    <div>
      <section className="main-bg" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text" style={{color:"#0b0b0b"}}>
                <div className="d-flex justify-content-center align-items-center ">
                   <h3 className="hero_title mb-0 me-2">Hi, it's me </h3>
                   <h1>Asna Nasin. VP</h1>
                </div>
              <div className="hero_desc d-flex justify-content-center"style={{fontWeight:"500"}}>
                <p className=" me-2">I'm a </p>
                <Typewriter
                  options={{
                    strings: ["Frontend Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
