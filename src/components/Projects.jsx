import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Failed to fetch projects</p>;
  }

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-3">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>You don't have any projects to show. Try starting a new project</p>
      )}
    </>
  );
}
