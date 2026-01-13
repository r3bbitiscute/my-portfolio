"use client";

export default function Home() {
  const age = CalculateAge(new Date(2003, 11, 8));
  return (
    <div>
      {/*
        --------------------
        MARK: About
        --------------------
        */}
      <div
        id="about"
        className="flex items-center gap-4 min-h-screen flex-col lg:flex-row"
      >
        <div className="content lg:flex-3 mr-[1.25]">
          <h1 className="text-5xl">Hi there, I&apos;m Khai Xuen. </h1>
          <p className="mt-5 text-xl">
            I am a {age} year old programmer that&apos;s currently pursuing my
            Diploma in Immersive Media &amp; Game Development at Temasek
            Polytechnic in Singapore. I describe myself as a problem solver that
            seeks opportunities to learn new things, at the same time,
            constantly improving my skills. I enjoy creating games that feel
            great to play, with clean code that is easy to read.
          </p>
        </div>
        <img
          src="me.png"
          alt="A Photo of Khai Xuen"
          className="flex-1 h-[75vh] rounded-[5%] object-cover border-solid border-2 border---border)"
        />
      </div>

      {/*
        --------------------
        MARK: Projects
        --------------------
        */}
      <div id="projects">
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
                rel="noopener noreferrer"
              >
                MAPP — A HIFI for a Music player
              </a>
            </h3>
            <p>
              Developed a HIFI prototype for a school assignment by using Adobe
              XD
            </p>
          </div>
        </div>

        <div className="project-row-container empty-content-container">
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

          <div className="project-content empty-content" />
        </div>
      </div>

      {/*
        --------------------
        MARK: Education
        --------------------
        */}
      <div id="education" className="relative my-5 mx-0">
        <h2 className="my-2">Education & Career</h2>
        <div className="relative before:content-[''] before:absolute before:left-1/2 before:w-0.5 before:h-full before:bg-(--border)">
          <div className="education-box">
            <h3 style={{ marginTop: 0 }}>Temasek Polytechnic (2022 - 2026)</h3>
            <h4>Diploma in Immersive Media & Game Development</h4>
          </div>
          <div className="education-box">
            <h3 style={{ marginTop: 0 }}>SLEEP APNEA PTE LTD (2025 - 2026)</h3>
            <h4>IT Intern</h4>
          </div>
        </div>
      </div>

      {/*
        --------------------
        MARK: Skills
        --------------------
        */}
      <div id="skills">
        <h2>Skills</h2>
        <div className="content">
          <h3 style={{ marginTop: 5 }}>Game Development</h3>
          <ul className="skills-card">
            <li>Unity</li>
            <li>C#</li>
            <li>Blender</li>
            <li>Maya</li>
          </ul>

          <h3>Web/App Development</h3>
          <ul className="skills-card">
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript/JavaScript</li>
            <li>Vue.js</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
            <li>Axios</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PHP</li>
          </ul>

          <h3>Software/Scripting</h3>
          <ul className="skills-card">
            <li>Python (Data Processing & Tooling)</li>
          </ul>

          <h3>Design & Workflow</h3>
          <ul className="skills-card">
            <li>Git</li>
            <li>Aseprite</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Adobe XD</li>
          </ul>
        </div>
      </div>
      {/*
        --------------------
        MARK: Style
        --------------------
        */}
      <style jsx>{`
        /* MARK: General Styling */
        .content {
          margin-left: 5px;
        }

        /* MARK: Project Styling */
        .project-row-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .empty-content-container {
          gap: 0px;
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

        /*  MARK: Education Styling */
        .education-box {
          width: fit-content;
          max-width: 45%;
          position: relative;
          border-radius: 10px;
          border: 3px solid var(--border);
          padding: 20px;
          margin-top: 16px;
        }

        .education-box:nth-child(odd) {
          margin-left: 50%;
          left: 20px;
        }

        .education-box:nth-child(even) {
          margin-left: auto;
          margin-right: 50%;
          right: 20px;
          text-align: right;
        }

        /* Horizontal Connector Line */
        .education-box::before {
          content: "";
          position: absolute;
          top: 30px; /* Align with the center of your first line of text */
          width: 20px; /* This matches the 'left: 20px' or 'right: 20px' you set earlier */
          height: 2px;
          background: var(--border);
        }

        /* Position for boxes on the right */
        .education-box:nth-child(odd)::before {
          left: -20px;
        }

        /* Position for boxes on the left */
        .education-box:nth-child(even)::before {
          right: -20px;
        }

        /* The Dot on the Vertical Line */
        .education-box::after {
          content: "";
          position: absolute;
          top: 26px; /* (top of connector) - (half of dot height) */
          width: 10px;
          height: 10px;
          background: var(--border); /* Or a different color to make it pop */
          border-radius: 50%;
          z-index: 1;
        }

        .education-box:nth-child(odd)::after {
          left: -27px;
        }

        .education-box:nth-child(even)::after {
          right: -29px;
        }

        /* MARK: Skills styling */
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

        @media screen and (max-width: 1010px) {
          .project-row-container {
            flex-direction: column;
          }

          .empty-content {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}

/*
--------------------
MARK: Helper
--------------------
*/
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
