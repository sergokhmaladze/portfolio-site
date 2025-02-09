'use client';
import styles from './home.module.css';
import Link from 'next/link';
import projects from '../data/projects.json';


export default function Home(): React.JSX.Element {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.whoAmIheader}>გამარჯობა,მე ვარ სერგო ხმალაძე</h1>
        <p>შედეგზე ორიენტირებული ვებ დეველოპერი, 
           რომელიც აკეთებს და მართავს ვებსაიტებს და ვებ აპლიკაციებს, 
           რაც იწვევს მთლიანი პროდუქტის წარმატებას</p>
      </div>
      
      <div className={styles.container__projects}>
        <h1 className={styles.container__title}>My Projects</h1>
        <div className={styles.projects__grid}>
        {projects.map((project) => (
          <div className={styles.project} key={project.id}>
            <div className={styles.project__content}>
              <Link className={styles.project__link} href={`/projects/${project.slug}` } >
                {project.title}
              </Link>
              <img className={styles.project__image} src={project.image} width={250} />
            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}

{/* <div>
  <h1>My Projects</h1>
    <ul>
    {projects.map((project) => (
      <li key={project.id}>
        <Link href={`/projects/${project.slug}`}>
          {project.title}
        </Link>
        <img src={project.image} width={250} height={250}/>
      </li>
    ))}
    </ul>
</div> */}



          
