"use client";
import Image from "next/image";

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
        className="flex min-h-screen flex-col items-center gap-4 lg:flex-row"
      >
        <div className="content mr-[1.25] lg:flex-3">
          <h1 className="text-5xl">Hi there, I&apos;m Khai Xuen. </h1>
          <p className="mt-5 text-xl">
            I am a {age} year old programmer that&apos;s currently pursuing my
            Diploma in Immersive Media &amp; Game Development at Temasek
            Polytechnic in Singapore. I describe myself as a critical thinker
            and a problem solver that seeks opportunities to learn new things,
            at the same time, constantly improving my skills. I enjoy creating
            games that feel great to play, with clean code that is easy to read.
          </p>
        </div>
        <Image
          src="me.png"
          alt="A Photo of Khai Xuen"
          className="h-[75vh] flex-1 rounded-[5%] border-2 border-solid border-(--border) object-cover"
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
              Engineered a fully functional PC game using <b>Unity</b> and{" "}
              <b>C#</b>, overseeing the full development lifecycle from initial
              concept to playable build.
            </p>
          </div>

          <div className="project-content">
            <div className="video-wrapper">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRFS7yLvKLTHdAHhkdk0yi6vAenKho0-bkmGPWyvZSbzYuYqaKDZeBgjj_LAK13hpl0iOl3v1wfec0W/pubembed?start=false"
                title="Sci-Fi room"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <h3 className="project-title">Sci-Fi Room</h3>
            <p>
              Created a 3D-modeled room for school assignments by using{" "}
              <b>Maya</b> and <b>Photoshop</b>.
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
            <h3 className="project-title">ABC — An E-Commerce Website</h3>
            <p>
              Developed an E-Commerce Website for school assignments using{" "}
              <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>mySQL</b>.
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
                MAPP — A HIFI (High-Fidelity Prototype) for a Music player
              </a>
            </h3>
            <p>
              Developed a HIFI (High-Fidelity Prototype) for a school assignment
              by using <b>Adobe XD</b>
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
            <h3 className="project-title">PMA - Project Management App</h3>
            <p>
              Developed a mobile application for school assignments using{" "}
              <b>React Native</b>, <b>Expo</b>, <b>Axios</b>, <b>Node.js</b> and{" "}
              <b>MongoDB</b>.
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
      <div id="education" className="relative mx-0 my-5">
        <h2 className="my-2">Education & Career</h2>
        <div className="relative ml-4 before:absolute before:left-1/2 before:h-full before:w-0.5 before:bg-(--border) before:content-['']">
          <div className="education-box">
            <h3>Temasek Polytechnic | 2023 - 2026</h3>
            <h4>Diploma in Immersive Media & Game Development</h4>
          </div>
          <div className="education-box">
            <h3>SLEEP APNEA PTE LTD (2025 - 2026)</h3>
            <h4>IT Intern</h4>
            <h4 className="mt-4">Achievements</h4>
            <ol>
              {/* 1. Machine Rental System */}
              <li>
                <h5>Machine Rental System (Full-Stack)</h5>
                <div className="summarised-achievement">
                  <p>
                    <b>Achievement:</b> Spearheaded the end-to-end development
                    of a centralized Machine Rental System.
                  </p>
                  <p>
                    <b>Technical Implementation:</b> Used Vue.js and PHP to
                    build features for real-time search and automated rental
                    record management.
                  </p>
                  <p>
                    <b>Impact:</b> Streamlined internal operations by enabling
                    precise machine tracking and reducing manual record-keeping
                    errors.
                  </p>
                </div>
              </li>

              {/* 2. SleepEasy Mobile App */}
              <li>
                <h5>SleepEasy Mobile Application (Cross-Platform)</h5>
                <div className="summarised-achievement">
                  <p>
                    <b>Achievement:</b> Developed the SleepEasy mobile app to
                    help elderly patients monitor health data.
                  </p>
                  <p>
                    <b>Technical Implementation:</b> Used React Native to create
                    a user-friendly interface for visualizing SpO2 and pulse
                    rate data.
                  </p>
                  <p>
                    <b>Impact:</b> Improved patient health monitoring
                    accessibility by simplifying data upload for non-technical
                    users.
                  </p>
                </div>
              </li>

              {/* 3. Native SDK Integration */}
              <li>
                <h5>Native SDK Integration (Mobile Engineering)</h5>
                <div className="summarised-achievement">
                  <p>
                    <b>Achievement:</b> Integrated advanced hardware
                    communication by developing custom native modules for Viatom
                    SDKs.
                  </p>
                  <p>
                    <b>Technical Implementation:</b> Wrote custom bridge modules
                    in Kotlin (Android) and Swift (iOS) to facilitate real-time
                    Bluetooth data streaming.
                  </p>
                  <p>
                    <b>Impact:</b> Enabled high-fidelity PPG signal retrieval,
                    directly supporting the app&apos;s capability for blood
                    pressure estimation.
                  </p>
                </div>
              </li>

              {/* 4. Subscription & Communication */}
              <li>
                <h5>Subscription & Communication Services</h5>
                <div className="summarised-achievement">
                  <p>
                    <b>Achievement:</b> Architected a dynamic Subscription
                    Service and a WhatsApp Report Sharing feature.
                  </p>
                  <p>
                    <b>Technical Implementation:</b> Integrated backend logic
                    with UI to manage billing cycles and engineered a
                    direct-from-portal WhatsApp tool.
                  </p>
                  <p>
                    <b>Impact:</b> Increased staff efficiency by automating
                    patient billing and streamlining the delivery of medical
                    reports.
                  </p>
                </div>
              </li>

              {/* 5. UI/UX Refactoring */}
              <li>
                <h5>UI/UX Refactoring & Optimization</h5>
                <div className="summarised-achievement">
                  <p>
                    <b>Achievement:</b> Led the complete overhaul of the
                    company&apos;s staff portal to improve productivity.
                  </p>
                  <p>
                    <b>Technical Implementation:</b> Replaced cluttered layouts
                    with modal-based filters and transitioned hardcoded inputs
                    into dynamic fields.
                  </p>
                  <p>
                    <b>Impact:</b> Enhanced user experience for staff, making
                    data filtering more intuitive and reducing administrative
                    time.
                  </p>
                </div>
              </li>

              {/* 6. Automation Tool (New from Resume) */}
              <li>
                <h5>Accounting Automation Tool</h5>
                <div className="summarised-achievement">
                  <p>
                    <b>Achievement:</b> Developed a Python automation tool to
                    bridge Plato CSV data with QuickBooks.
                  </p>
                  <p>
                    <b>Technical Implementation:</b> Created a script to parse
                    and convert medical data into standardized accounting
                    formats.
                  </p>
                  <p>
                    <b>Impact:</b> Significantly reduced manual invoice
                    processing time for the accounting department.
                  </p>
                </div>
              </li>
            </ol>
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
          <h3 className="mt-1">Game Development</h3>
          <ul className="skills-card">
            <li>Unity</li>
            <li>C#</li>
            <li>Blender</li>
            <li>Maya</li>
          </ul>

          <h3>Fullstack Development</h3>
          <ul className="skills-card">
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript/JavaScript</li>
            <li>Vue.js</li>
            <li>React Native</li>
            <li>Expo</li>
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
          position: relative;
          aspect-ratio: 16/9;
          width: 100%;
        }

        .video-wrapper iframe {
          border: none;
          width: 100%;
          height: 100%;
        }

        /*  MARK: Education Styling */
        .education-box {
          position: relative;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
          transition: background-color 250ms linear;
          margin-top: 16px;
          margin-bottom: 30px;
          border: 3px solid var(--border);
          border-radius: 10px;
          background-color: var(--bg);
          padding: 20px;
          width: fit-content;
          max-width: 45%;
        }

        .education-box:nth-child(odd) {
          left: 54px;
          margin-left: 50%;
        }

        .education-box:nth-child(even) {
          right: 51px;
          margin-right: 50%;
          margin-left: auto;
        }

        .education-box h3:first-child {
          margin-top: 0px;
        }

        .education-box ol {
          margin-left: 16px;
          list-style-type: decimal;
        }

        .education-box ol li h5 {
          margin-top: 8px;
        }

        .summarised-achievement {
          margin-top: 8px;
          margin-left: 8px;
        }

        .summarised-achievement p {
          margin-top: 8px;
        }

        /* Horizontal Connector Line */
        .education-box::before {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--border);
          width: 30px;
          height: 2px;
          content: "";
        }

        .education-box:nth-child(odd)::before {
          left: -33px;
        }

        .education-box:nth-child(even)::before {
          right: -33px;
        }

        /* The Icon */
        .education-box::after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          transition: background-color 250ms linear;
          border: 3px solid var(--border);
          border-radius: 50%;
          background-size: contain;
          background-color: var(--bg);
          width: 45px;
          height: 45px;
          content: "";
        }

        .education-box:nth-child(1)::after {
          background-image: url("/icons/temasek_polytechnic_icon.png");
        }

        .education-box:nth-child(2)::after {
          background-image: url("/icons/sleepeasy_icon.png");
        }

        .education-box:nth-child(odd)::after {
          left: -78px;
        }

        .education-box:nth-child(even)::after {
          right: -78px;
        }

        /* MARK: Skills styling */
        .skills-card {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .skills-card li {
          margin: 5px 0px 0px 0px;
          border: 2px solid var(--border);
          border-radius: 25px;
          background: var(--bg);
          padding: 6px 10px;
          font-weight: bold;
        }

        @media screen and (max-width: 1010px) {
          .project-row-container {
            flex-direction: column;
          }

          .empty-content {
            margin: 0;
            padding: 0;
          }

          .summarised-achievement {
            margin-left: 0px;
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
