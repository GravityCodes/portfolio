import { useState } from "react";
import styles from "./app.module.css";
import Card from "./components/project/Card";

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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
