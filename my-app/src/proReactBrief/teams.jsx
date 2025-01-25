import React from "react";
const Teams = () => {
    return (
      <>
        
        <title>teams</title>
      
        <section id="team">
          <h2>Meet Our Team</h2>
          <div className="team-container">
            {/* عضو الفريق 1 */}
            <div className="team-member">
              <img src="img1.jpeg" alt="John Doe" className="member-photo" />
              <h3>saba alhrishat</h3>
              <p className="role">Web Developer</p>
              <p className="bio">
              AI coach specializing in Software Engineering, working with robots and passionate about training children.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank">
                  Twitter
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src="img3.jpeg" alt="John Doe" className="member-photo" />
              <h3>shireen ramadan </h3>
              <p className="role">Web Developer</p>
              <p className="bio">
                John is an experienced developer with a passion for creating beautiful
                websites.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank">
                  Twitter
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src="img4.jpeg" alt="John Doe" className="member-photo" />
              <h3>buthina</h3>
              <p className="role">Web Developer</p>
              <p className="bio">
                John is an experienced developer with a passion for creating beautiful
                websites.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank">
                  Twitter
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src="img2.jpg" alt="John Doe" className="member-photo" />
              <h3>tamara</h3>
              <p className="role">Web Developer</p>
              <p className="bio">
                John is an experienced developer with a passion for creating beautiful
                websites.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank">
                  Twitter
                </a>
              </div>
            </div>

          </div>
        </section>
      </>
    );
  };
  
  export default Teams;
  