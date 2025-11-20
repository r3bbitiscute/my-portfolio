"use client";

export default function Home() {
  const age = CalculateAge(new Date(2003, 11, 8));
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: 15,
        }}>
        <div className="content about-me-texts">
          <h1 style={{ fontSize: 50 }}>Hi there, I&apos;m Khai Xuen. </h1>
          <p style={{ marginTop: 5, fontSize: 20 }}>
            I am a {age} year old programmer that&apos;s currently pursuing my
            Diploma in Immersive Media &amp; Game Development at Temasek
            Polytechnic in Singapore. I describe myself as a problem solver that
            seeks opportunities to learn new things, at the same time,
            constantly improving my skills. I enjoy creating games that feel
            great to play, with clean code that is easy to read. Want to know
            more, you can reach me on any of my social media.
          </p>
        </div>
        <img src="me.png" alt="A Photo of Khai Xuen" className="profile-img" />
      </div>

      <div>
        <h2>Projects</h2>
        <div className="project-row-container">
          <div className="project-content">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/eXmXvmWlX1w"
                title="Music Land"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="project-title">
              Music Land — A Platformer Rhythm Game
            </h3>
            <p>
              Developed a PC game for a school assignment by using Unity and C#.
            </p>
          </div>

          <div className="project-content">
            <div className="video-wrapper">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRFS7yLvKLTHdAHhkdk0yi6vAenKho0-bkmGPWyvZSbzYuYqaKDZeBgjj_LAK13hpl0iOl3v1wfec0W/pubembed?start=true&loop=false&delayms=3000"
                title="Sci-Fi room"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="project-title">Sci-Fi Room</h3>
            <p>
              Created a 3D-modeled room for school assignments by using Maya and
              Photoshop.
            </p>
          </div>
        </div>

        <div className="project-row-container">
          <div className="project-content">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/MzA7FuUnwq8?si=8hS19Gsy_NkJ18FA"
                title="ABC"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="project-title">ABC — A Simple E-Commerce Website</h3>
            <p>
              Developed a Simple E-Commerce Website for school assignments using
              HTML, CSS, JavaScript, and mySQL.
            </p>
          </div>

          <div className="project-content">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/W00sCDYpg-o?si=O67l6wAIAJiN0v9b"
                title="MAPP"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="project-title">
              <a
                href="https://xd.adobe.com/view/613e7653-efa6-4715-90f4-ef5140a2245c-346d/?fullscreen"
                target="_blank"
                rel="noopener noreferrer">
                MAPP — A HIFI for a Music player
              </a>
            </h3>
            <p>
              Developed a HIFI prototype for a school assignment by using Adobe
              XD
            </p>
          </div>
        </div>

        <div className="project-row-container">
          <div className="project-content">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Wu_mSpXqPug?si=eJs14qNyeraeSAuO"
                title="PMA"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="project-title">PMA</h3>
            <p>
              Developed a mobile application for school assignments using React
              Native and MongoDB.
            </p>
          </div>

          <div className="project-content" />
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <div className="education-box">
          <h3 style={{ marginTop: 0 }}>Temasek Polytechnic (2022 - 2025)</h3>
          <h4>Diploma in Immersive Media & Game Development</h4>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <div className="content">
          <h3 style={{ marginTop: 5 }}>Coding Language</h3>
          <ul className="skills-card">
            <li>C#</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vue.js</li>
            <li>React Native</li>
            <li>TypeScript/JavaScript</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>Python</li>
          </ul>

          <h3>Engines/Tools</h3>
          <ul className="skills-card">
            <li>Unity</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Blender</li>
            <li>Maya</li>
            <li>Git</li>
            <li>Aseprite</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .content {
          margin-left: 5px;
        }

        .profile-img {
          flex: 1;
          width: 100%;
          border-radius: 5%; /* make it round */
          object-fit: cover; /* crop nicely */
          border: 2px solid var(--border);
        }

        .about-me-texts {
          flex: 3;
          margin-right: 5px;
        }

        .project-row-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .project-content {
          flex: 1;
          margin: 10px;
        }

        .project-title {
          margin: 0;
        }
        .video-wrapper {
          width: 100%;
          aspect-ratio: 16/9;
          position: relative;
        }

        .video-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .education-box {
          background: var(--accent);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 25px;
          margin-top: 5px;

          max-width: 500px;
        }

        .skills-card {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 10px;
        }

        .skills-card li {
          background: var(--accent);
          font-weight: bold;
          padding: 6px 10px;
          margin: 5px 0px 0px 0px;
          border-radius: 25px;
          border: 2px solid var(--border);
        }
      `}</style>
    </div>
  );
}

// Helper function to calculate age
function CalculateAge(dob: Date) {
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  // if birthday hasn't happened yet this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}
