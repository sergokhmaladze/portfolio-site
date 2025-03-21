'use client';
import React from 'react';
import projects from '../../../data/projects.json';
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import styles from '@/app/slugpage.module.css'

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find((p) => p.slug === slug);
      setProject(foundProject);
    }
  }, [slug]); 

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>{project.title}</h1>
      <div className={styles.container__content}>
        <a href={project.link} target='_blank'>
        <img className={styles.container__image} src={project.image} alt={project.title} width={350}/>
        </a>
      </div>
    </div>
  );
}