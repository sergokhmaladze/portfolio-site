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

      <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </main>
  );
}



          
