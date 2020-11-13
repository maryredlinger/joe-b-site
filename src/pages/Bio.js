import React, { useState } from "react";
import "../styles/About.css";
import { NavLink as Link } from 'reactstrap';


const Bio = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <h5 className="extra-content">
        I spent 30 years teaching high school and middle school, directing the
        Theatre Program at St. Augustine High School for 18 years. In the past
        three years I have turned to the homeschooling community where, as a
        private contractor, I am a vendor for charter schools, and serve the
        community as a teacher and private tutor.
        <br />
        <br />
        For 40 years, I have devoted my life to youth, serving in the Youth
        Groups of Mission San Diego, Our Lady of Light, and St. Therese. I am a
        member of the Catholic Committee on Scouting and an adult leader for Boy
        Scout Troop 53 in San Diego, where my son became Eagle in 2018.
        <br />
        <br />
        At St. Therese, I am a member of the Knight of Columbus, I have sung in
        the 9:00 Choir, and am member of the Italian Catholic Federation.
        <br />
        <br />I live in San Diego with my wife of 23 years, Patricia. My son,
        Christopher lives in in St. Louis.
      </h5>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <div className="">
      <br />
      <div>
        <div className="row">
          <div className="col-md-4 col-sm-12 mt-3">
            <img alt="headShot" className="profileImg" src="./headshot.JPG" />
            <br />
            <br />
            <h1 className="blue2">
              <b>Joseph Bernens</b>
            </h1>
            <h4 className="blue2"> - San Diego CA -</h4>
          </div>
          <br />
          <div className=" col-md-7 col-sm-12 mt-3 mb-3">
            <div className="more">
              <h5 className="show-read-more itemExp">
                I am a parishioner at St. Therese Catholic Church. I am a
                Husband, Father, and family member. I am a loyal friend. And I
                am a proud American. I am Joseph Bernens. Born in Riverside, CA,
                May 24, 1962, we moved to San Diego in 1968 after my father
                retired from the Air Force. There, I attended St. Therese
                Academy, St. Augustine High School, and the University of San
                Diego, where I earned a B.A. in Philosophy in 1984.
                <br />
                <br />I worked in the family restaurant business before going
                back to school to earn a teaching credential in English with an
                emphasis in Drama in 1990, from San Diego State University. In
                1999, I completed an M. A. in Special Education at San Diego
                State, earning a special education credential in Learning
                Handicaps. Currently, I am at Franciscan School of Theology
                working towards an MTS degree.
              </h5>

              <div className="itemExp">
                {readMore && extraContent}
                <Link
                  id="read-more-link"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {linkName}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://player.vimeo.com/video/478248192"
          width="340"
          height="600"
          title="Vimeo Intro"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/user126908690">Joe Bernens</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
    </div>
  );
};

export default Bio;
