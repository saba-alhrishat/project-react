import React from "react";

const Teams = () => {
    return (
      <>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="teams.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>teams</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          #team {
            text-align: center;
            padding: 50px 20px;
            background-color: #f9f9f9;
          }
          #team h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
          }
          .team-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .team-member {
            background: white;
            border: 1px solid #ddd;
            padding: 20px;
            width: 250px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
          }
          .team-member:hover {
            transform: translateY(-10px);
          }
          .member-photo {
            width: 100%;
            height: auto;
            margin-bottom: 15px;
          }
          .team-member h3 {
            font-size: 1.5em;
            margin: 10px 0;
          }
          .role {
            color: #555;
            font-style: italic;
          }
          .bio {
            font-size: 0.9em;
            color: #666;
          }
          .social-links a {
            text-decoration: none;
            color: #007bff;
            margin: 0 5px;
          }
          .social-links a:hover {
            text-decoration: underline;
          }
          `
          }}
        />
        <section id="team">
          <h2>Meet Our Team</h2>
          <div className="team-container">
            {/* عضو الفريق 1 */}
            <div className="team-member">
              <img src="download.jpeg" alt="John Doe" className="member-photo" />
              <h3>John Doe</h3>
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
              <img src="download.jpeg" alt="John Doe" className="member-photo" />
              <h3>John Doe</h3>
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
              <img src="download.jpeg" alt="John Doe" className="member-photo" />
              <h3>John Doe</h3>
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
              <img src="download.jpeg" alt="John Doe" className="member-photo" />
              <h3>John Doe</h3>
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
  