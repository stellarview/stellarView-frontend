import styles from './AboutPage.module.scss';

import githublogo from '../../assets/github_logo_black.png';
import linkedinlogo from '../../assets/linkedin.png';

import Aaron from '../../assets/aaron-miro.jpg';
import Kat from '../../assets/kat-miro.png';
import Kashi from '../../assets/kashi-miro.png';
import Jenna from '../../assets/jenna.jpeg';
import Austin from '../../assets/austin-miro.jpeg';
import Brien from '../../assets/brien.jpeg';

export default function AboutPage() {
  return (
    <div className={styles.grid}>
      <div className={styles.AboutPage}>
        <img src={Aaron}/>
        <p className={styles.text}>Aaron Enyetu (he/him)</p>
        <div>
          <a href="https://github.com/aaronEnyetu" 
            target="_blank" rel="noreferrer noopener">
            <img src={githublogo}/>
          </a>
          <a href="https://www.linkedin.com/in/aaron-enyetu/"
            target="_blank" rel="noreferrer noopener">
            <img src={linkedinlogo}/>
          </a>
        </div>
      </div>

      <div className={styles.AboutPage}>
        <img src={Kat}/>
        <p className={styles.text}>Kat Zaro (she/her)</p>
        <div>
          <a href="https://github.com/kathrynzaro"
            target="_blank" rel="noreferrer noopener">
            <img src={githublogo}/>
          </a>
          <a href="https://www.linkedin.com/in/katzaro/"
            target="_blank" rel="noreferrer noopener">
            <img src={linkedinlogo}/>
          </a>
        </div>
      </div>

      <div className={styles.AboutPage}>
        <img src={Kashi}/>
        <p className={styles.text}>Kashi Maya Tamang (they/them)</p>
        <div>
          <a href="https://github.com/kashitamang"
            target="_blank" rel="noreferrer noopener">
            <img src={githublogo}/>
          </a>
          <a href="https://www.linkedin.com/in/kashitamang"
            target="_blank" rel="noreferrer noopener">
            <img src={linkedinlogo}/>
          </a>
        </div>
      </div>

      <div className={styles.AboutPage}>
        <img src={Jenna}/>
        <p className={styles.text}>Jenna Graham (she/her)</p>
        <div>
          <a href="https://github.com/jenna-lee-graham"
            target="_blank" rel="noreferrer noopener">
            <img src={githublogo}/>
          </a>
          <a href="https://www.linkedin.com/in/jenna-lee-graham"
            target="_blank" rel="noreferrer noopener">
            <img src={linkedinlogo}/>
          </a>
        </div>
      </div>

      <div className={styles.AboutPage}>
        <img src={Brien}/>
        <p className={styles.text}>Brien Thomas (he/him)</p>
        <div>
          <a href="https://github.com/briensthomas"
            target="_blank" rel="noreferrer noopener">
            <img src={githublogo}/>
          </a>
          <a href="https://www.linkedin.com/in/brien-thomas"
            target="_blank" rel="noreferrer noopener">
            <img src={linkedinlogo}/>
          </a>
        </div>
      </div>

      <div className={styles.AboutPage}>
        <img src={Austin}/>
        <p className={styles.text}>Austin Han (he/him)</p>
        <div>
          <a href="https://github.com/austinbhan"
            target="_blank" rel="noreferrer noopener">
            <img src={githublogo}/>
          </a>
          <a href="https://www.linkedin.com/in/austin-han-740a69157"
            target="_blank" rel="noreferrer noopener">
            <img src={linkedinlogo}/>
          </a>
        </div>
      </div>
    </div>

  );
}
