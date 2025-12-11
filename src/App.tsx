import { useState, useEffect, useRef } from "react";
import styles from "./app.module.css";
import Card from "./components/project/Card";
import Tool from "./components/Tool";
import Form from "./components/Form";
import { motion, useScroll } from "motion/react";

function App() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outerDotRef = useRef<HTMLDivElement>(null);
  const viewportPos = useRef({ x: 0, y: 0 });

  // Motion
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function updateDot(pageX: number, pageY: number) {
      if (!dotRef.current || !outerDotRef.current) return;
      dotRef.current.style.transform = `translate(${pageX}px, ${pageY}px)`;
      outerDotRef.current.style.transform = `translate(${pageX}px, ${pageY}px)`;
    }

    function handlePointerMove(e: PointerEvent) {
      viewportPos.current.x = e.clientX;
      viewportPos.current.y = e.clientY;

      updateDot(e.pageX, e.pageY);
    }

    function handleScroll() {
      const { x, y } = viewportPos.current;

      const pageX = x + window.scrollX;
      const pageY = y + window.scrollY;

      updateDot(pageX, pageY);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hoverEnter = () => {
    if (!dotRef.current) return;

    dotRef.current.classList.add(styles.cursorHover);
  };

  const hoverLeave = () => {
    if (!dotRef.current) return;

    dotRef.current.classList.remove(styles.cursorHover);
  };

  return (
    <div>
      <motion.div
        id="scroll-indicator"
        className={styles.scrollIndicator}
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          zIndex: 4,
        }}
      />
      <div className={styles.cursor} ref={dotRef}></div>
      <div className={styles.outerCursor} ref={outerDotRef}></div>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <motion.a
            whileHover={{
              scale: 1.5,
              color: "#e84343",
            }}
            href="#"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}
          >
            Johan M. Mesa
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.5,
              rotate: -2,
            }}
            href="/resume.pdf"
            target="_blank"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}
          >
            Resume
            <img src="/external-link-white.svg" alt="" />
          </motion.a>
        </div>
      </nav>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.imageContainer}>
            <div className={styles.backBox}></div>
            <img
              className={styles.profilePicture}
              src="/profile_Picture.jpg"
              alt="Picture of Johan Mesa"
            />
            <div className={styles.frontBox}></div>
          </div>
          <div className={styles.summary}>
            <div className={styles.externalLinks}>
              <motion.a
                whileHover={{
                  scale: 1.5,
                }}
                href="https://github.com/GravityCodes"
                target="_blank"
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                <img src="/github-logo-white.svg" alt="github" />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.5,
                }}
                href="https://www.linkedin.com/in/johan-mesa/"
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              >
                <img src="/linkedin-logo.svg" alt="Linkedin" />
              </motion.a>
            </div>
            <div className={styles.heroLabel}>ABOUT ME</div>
            <p className={styles.paragraph}>
              Fullstack developer based in Boston, MA with experience building
              complete web applications from UI to database. Strong problem
              solving abilities and a focus on writing clean, maintainable, and
              reliable code. Committed to continuously improving my development
              skills through real world projects.
            </p>
          </div>
        </div>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.recentProjects}>
          <h2 className={styles.sectionTitle}>RECENT PROJECTS</h2>
          <div className={styles.projectCardsContainer}>
            <Card
              title="M&M Construction"
              paragraph="Developed the full-stack application (frontend and backend) and currently maintain it on Vercel and Railway."
              imgUrl="/MMConstruction.png"
              imgAlt="The website's main page"
              tags={["NEXTJS", "REACT", "EXPRESS", "PRISMA"]}
              repo=""
              website="https://www.mmconstructionlm.com/"
              onMouseEnterFunc={hoverEnter}
              onMouseLeaveFunc={hoverLeave}
            />
            <Card
              title="Blog (JohanCodes)"
              paragraph="The focus of this project was to learn about API's basics and security. Prior to this project I was 
              creating the backend and frontend in one directory but I have split the two for this one and made a API only backend."
              imgUrl="/JohanCodes.png"
              imgAlt="The website's main page"
              tags={["ASTRO", "EXPRESS", "JAVASCRIPT", "NODEJS", "PRISMA"]}
              repo="https://github.com/GravityCodes/blog-back-end"
              website="https://blog.johanmesa.com/"
              onMouseEnterFunc={hoverEnter}
              onMouseLeaveFunc={hoverLeave}
            />
            <Card
              title="Photo Tagging App (Where are they?)"
              paragraph="This project was designed to unify all the skills I’ve gained to date. It’s a photo-tagging application where 
              users search for and identify characters in an image, similar to a “Where’s Waldo?” game."
              imgUrl="/WhereAreThey.png"
              imgAlt="The website's main page"
              tags={["REACT", "EXPRESS", "JEST", "SUPERTEST", "PRISMA"]}
              repo="https://github.com/GravityCodes/photo-tagging-app-back-end"
              website="https://wherearethey.johanmesa.com/"
              onMouseEnterFunc={hoverEnter}
              onMouseLeaveFunc={hoverLeave}
            />
          </div>
        </div>
        <div className={styles.workHistory}>
          <h2 className={styles.sectionTitle}>WORK HISTORY</h2>
          <div className={styles.workHistoryContent}>
            <div className={styles.timelineCube}></div>
            <div className={styles.timelineCube}></div>
            <div className={styles.workItem}>
              <div className={styles.workDate}>2021 - CURRENT</div>
              <h6>M&M Construction Landscape and Masonry INC.</h6>
              <p className={`${styles.workDescription} ${styles.paragraph}`}>
                Built a full-stack platform using Next.js, Express, Prisma, and
                PostgreSQL that increased customer inquiries by 50% and
                streamlined operations through automated travel-fee calculations
                and an internal lead management dashboard.
              </p>
            </div>
            <div className={styles.workItem}>
              <div className={styles.workDate}>2018-2019</div>
              <h6>Carbonite</h6>
              <p className={`${styles.workDescription} ${styles.paragraph}`}>
                Worked as a service desk intern. style companies intranet with
                html and css
              </p>
            </div>
          </div>
        </div>
        <div className={styles.technologies}>
          <h2 className={styles.sectionTitle}>TECHNOLOGIES</h2>
          <div className={styles.technologiesContainer}>
            <div className={styles.technology}>
              <div className={styles.titleWithIcon}>
                <img
                  src="/icons/technologies/frontend-white.svg"
                  alt="frontend icon"
                />
                <h3>FRONTEND</h3>
              </div>
              <div className={styles.toolsContainer}>
                <Tool
                  title="Javascript"
                  imgUrl="/icons/javascript.svg"
                  alt="javascript logo"
                  color="#F7DF1E"
                />
                <Tool
                  title="React"
                  imgUrl="/icons/react.svg"
                  alt="react logo"
                  color="#00D8FF"
                />
                <Tool
                  title="Html"
                  imgUrl="/icons/html.svg"
                  alt="html logo"
                  color="#F16529"
                />
                <Tool
                  title="Css"
                  imgUrl="/icons/css.svg"
                  alt="css logo"
                  color="#33AADD"
                />
                <Tool
                  title="NextJs"
                  imgUrl="/icons/nextjs.svg"
                  alt="next js logo"
                  color="#ffffff"
                />
                <Tool
                  title="Vite"
                  imgUrl="/icons/vite.png"
                  alt="vite logo"
                  color="#A94CFE"
                />
                <Tool
                  title="Astro"
                  imgUrl="/icons/astro.png"
                  alt="astro build logo"
                  color="#201779"
                />
              </div>
            </div>
            <div className={styles.technology}>
              <div className={styles.titleWithIcon}>
                <img src="/icons/technologies/test-white.svg" alt="test icon" />
                <h3>TEST</h3>
              </div>
              <div className={styles.toolsContainer}>
                <div className={styles.toolsContainer}>
                  <Tool
                    title="Jest"
                    imgUrl="/icons/jest.svg"
                    alt="Jest logo"
                    color="#C63D14"
                  />
                  <Tool
                    title="React Testing Library"
                    imgUrl="/icons/reactTestingLibrary.png"
                    alt="reat testing library logo"
                    color="#BE2525"
                  />
                </div>
              </div>
            </div>
            <div className={styles.technology}>
              <div className={styles.titleWithIcon}>
                <img
                  src="/icons/technologies/backend-white.svg"
                  alt="backend icon"
                />
                <h3>BACKEND</h3>
              </div>
              <div className={styles.toolsContainer}>
                <Tool
                  title="NodeJs"
                  imgUrl="/icons/nodejs.png"
                  alt="node js logo"
                  color="#539E43"
                />
                <Tool
                  title="Express"
                  imgUrl="/icons/express.png"
                  alt="express logo"
                  color="#ffffff"
                />
              </div>
            </div>
            <div className={styles.technology}>
              <div className={styles.titleWithIcon}>
                <img
                  src="/icons/technologies/cloud-white.svg"
                  alt="devops and cloud icon"
                />
                <h3>DEVOPS & CLOUD</h3>
              </div>
              <div className={styles.toolsContainer}>
                <Tool
                  title="Vercel"
                  imgUrl="/icons/vercel.png"
                  alt="vercel logo"
                  color="#ffffff"
                />
                <Tool
                  title="Docker"
                  imgUrl="/icons/docker.png"
                  alt="docker logo"
                  color="#2597EE"
                />
              </div>
            </div>
            <div className={styles.technology}>
              <div className={styles.titleWithIcon}>
                <img
                  src="/icons/technologies/database-white.svg"
                  alt="databse icon"
                />
                <h3>DATABASE</h3>
              </div>
              <div className={styles.toolsContainer}>
                <Tool
                  title="Prisma"
                  imgUrl="/icons/prisma.png"
                  alt="prisma logo"
                  color="#16A394"
                />
                <Tool
                  title="Postgresql"
                  imgUrl="/icons/postgresql.svg"
                  alt="postgresql logo"
                  color="#336791"
                />
                <Tool
                  title="SQL"
                  imgUrl="/icons/sql.svg"
                  alt="sql logo"
                  color="#1A5BBA"
                />
              </div>
            </div>
            <div className={styles.technology}>
              <div className={styles.titleWithIcon}>
                <img
                  src="/icons/technologies/tools-white.svg"
                  alt="tools icon"
                />
                <h3>TOOLS AND WORKFLOW</h3>
              </div>
              <div className={styles.toolsContainer}>
                <Tool
                  title="Git"
                  imgUrl="/icons/git.png"
                  alt="git logo"
                  color="#F15030"
                />
                <Tool
                  title="Github"
                  imgUrl="github-logo-white.svg"
                  alt="github logo"
                  color="#ffffff"
                />
                <Tool
                  title="Postman"
                  imgUrl="/icons/postman.svg"
                  alt="postman logo"
                  color="#FF6C37"
                />
                <Tool
                  title="NPM"
                  imgUrl="/icons/npm.svg"
                  alt="npm logo"
                  color="#FF6C37"
                />
                <Tool
                  title="VScode"
                  imgUrl="/icons/vscode.png"
                  alt="vscode logo"
                  color="#1DACF2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactMe}>
          <h2 className={styles.sectionTitle}>CONTACT ME</h2>
          <Form onMouseEnterFunc={hoverEnter} onMouseLeaveFunc={hoverLeave} />
        </div>
      </main>
      <footer>
        <div style={{ textAlign: "center", padding: "20px" }}>
          Made With ❤️ by Johan Mesa
        </div>
      </footer>
    </div>
  );
}

export default App;
