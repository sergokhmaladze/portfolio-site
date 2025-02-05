'use client';
import React from 'react';
import projects from '../../../data/projects.json';
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";

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
    <div>
      <h1>{project.title}</h1>
      <p>
        <a href={project.link} target='_blank'>
        <img src={project.image} alt={project.title} width={250} height={250}/>
        </a>
        </p>
    </div>
  );
}