import { useState } from "react";
import styles from "./app.module.css";
import Card from "./components/project/Card";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <a href="#">Johan M. Mesa</a>
          <a href="#">Resume</a>
        </div>
      </nav>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.imageContainer}>
            <img
              className={styles.profilePicture}
              src="/profile_Picture.jpg"
              alt="Picture of Johan Mesa"
            />
          </div>
          <div className={styles.summary}>
            <div className={styles.externalLinks}>
              <a href="https://github.com/GravityCodes" target="_blank">
                <img src="/github-logo-white.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/johan-mesa/">
                <img src="/linkedin-logo.svg" alt="Linkedin" />
              </a>
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
              title="Blog Website (JohanCodes)" 
              paragraph="The focus of this project was to learn about API's basics and security. Prior to this project I was 
              creating the backend and frontend in one directory but I have split the two for this one and made a API only backend."
              imgUrl="/JohanCodes.png"
              imgAlt="The website's main page"
              tags={["ASTRO", "EXPRESS", "JAVASCRIPT", "NODEJS", "PRISMA", "POSTGRESQL"]} />
            <Card 
              title="Photo Tagging App (Where are they?)"
              paragraph="This project was designed to unify all the skills I’ve gained to date. It’s a photo-tagging application where 
              users search for and identify characters in an image, similar to a “Where’s Waldo?” game."
              imgUrl="/WhereAreThey.png"
              imgAlt="The website's main page"
              tags={["REACT", "EXPRESS", "JEST", "SUPERTEST", "PRISMA"]}
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
                    <p className={`${styles.workDescription} ${styles.paragraph}`}>Built a full-stack platform using Next.js, Express, Prisma, and PostgreSQL that increased customer inquiries by 50% and streamlined operations through automated travel-fee calculations and an internal lead management dashboard.</p>
                </div>
                <div className={styles.workItem}>
                    <div className={styles.workDate}>2018-2019</div>
                    <h6>Carbonite</h6>
                    <p className={`${styles.workDescription} ${styles.paragraph}`}>Worked as a service desk intern. style companies intranet with html and css</p>
                </div>
            </div>
        </div>
        <div className={styles.contactMe}>
            <h2 className={styles.sectionTitle}>CONTACT ME</h2>
            <Form />
        </div>
      </main>
      <footer>
        <div style={{textAlign:"center", padding:"20px"}}>Made With ❤️ by Johan Mesa</div>
      </footer>
    </div>
  );
}

export default App;
