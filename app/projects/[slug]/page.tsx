import projects from '../../../data/projects.json';

export default function ProjectDetail({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);

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