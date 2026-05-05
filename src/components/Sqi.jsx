import React from "react";
import "./App.css";

export default function App() {
  const third = [
    {
      title: "NATIONAL DIPLOMA COURSES",
      content: [
        { first: "Duration", second: "2 Years" },
        {
          first: "Certificate",
          second: "Both National Diploma and Professional Diploma.",
        },
        {
          first: "Skills",
          second:
            "Academic Institution recognized skills and In-demand professional skills.",
        },
        {
          first: "Entry Requirements",
          second: "120 min in JAMB, 5 Credits in O-Level and Your passion",
        },
        { first: "Required Hardware", second: "(usually Laptop)" },
        { first: "Direct Entry", second: "Yes (Any University)" },
        { first: "Transcript & Internship", second: "Yes" },
        { first: "Access to Alumni Network and Opportunities", second: "Yes." },
      ],
    },
    {
      title: "PROFESSIONAL DIPLOMA COURSES",
      content: [
        { first: "Duration", second: "4-12 Months Courses" },
        { first: "Certificate", second: "Professional Diploma" },
        { first: "Skills", second: "In-demand professional skills" },
        { first: "Entry Requirements", second: "Your passion" },
        { first: "Required Hardware", second: "(usually Laptop)" },
        { first: "Transcript & Internship", second: "Yes." },
        { first: "Access to Alumni Network and Opportunities", second: "Yes." },
      ],
    },
    {
      title: "CERTIFICATE PROGRAM",
      content: [
        { first: "Duration", second: "2 weeks to 10 months" },
        { first: "Certificate", second: "Certificate Program" },
        { first: "Skills", second: "In-demand professional skills" },
        { first: "Entry Requirements", second: "Your passion" },
        { first: "Required Hardware", second: "(usually Laptop)" },
        { first: "Transcript & Internship", second: "No" },
        { first: "Access to Alumni Network and Opportunities", second: "Yes." },
      ],
    },
  ];

  return (
    <main>
      <nav>
        <div className="pic">
          <img
            src="/co-removebg-preview.png"
            alt="logo"
            width="70"
            height="70"
            style={{ marginLeft: "120px" }}
          />
        </div>

        <ul className="co-nav">
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Programmes</p>
          </li>
          <li>
            <p>Admissions</p>
          </li>
          <li>
            <p>E-Portal</p>
          </li>
          <li>
            <p>SQI Scholarship</p>
          </li>
          <li>
            <p>News</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </nav>

      <section className="first">
        <div className="study1">
          <p className="study">
            Study to <br />
            become a <br />
            global talent
          </p>

          <p className="study2">
            Learn new tech skills using a world-class curriculum from top
            <br />
            industry experts in an accredited institution.
          </p>

          <button className="button">
            <a className="start-button" href="#">
              Start Now
            </a>
          </button>
        </div>

        <div className="sqi-image3">
          <img src="/bg-header-sqi-1 (1).png" alt="hero" />
        </div>
      </section>

      <section className="second">
        <h1 className="one">Start here. Change the world.</h1>

        <div className="second-picture">
          <div className="box">
            <img src="/college.jpg" alt="ND" />
            <h3 className="title">National Diploma (ND)</h3>
            <p className="desc">
              The National Diploma (ND) offered at SQI College of ICT is a 2
              year approved academic program of the National Board for Technical
              Education (NBTE) and approved by the Federal Ministry of Education
            </p>
            <a href="#" className="learn">
              Learn More
            </a>
          </div>

          <div className="box">
            <img src="/prof.jpg" alt="PD" />
            <h3 className="title">Professional Diploma Certificate</h3>
            <p className="desc">
              The Professional Certificate Program is 1 year practical training
              with a wide range of IT certification courses offered in SQI
              College of ICT to people who want to advance their career.
            </p>
            <a href="#" className="learn">
              Learn More
            </a>
          </div>

          <div className="box">
            <img src="/certificate (1).jpg" alt="Certificate" />
            <h3 className="title">Certificate Program</h3>
            <p className="desc">
              The Certificate Program is a short-term training, 2 weeks to 6
              months with a wide range of edge-cutting IT certification courses
              offered in SQI College of ICT to people who want to advance their
              careers.
            </p>
            <a href="#" className="learn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="boxes">
          {third.map((third, index) => (
            <div className="hold" key={index}>
              <h2 className="texts">{third.title}</h2>

              <div className="content">
                {third.content.map((item, i) => (
                  <div className="contentrow" key={i}>
                    <b>{item.first}:</b> {item.second}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
