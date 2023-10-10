import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Failed to fetch project</p>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto container w-75 card p-5 my-3">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-5">Project status</h5>
          <p
            className={` ${
              data.project.status.toLowerCase() === "completed"
                ? "text-success"
                : data.project.status.toLowerCase() === "not started"
                ? "text-danger"
                : data.project.status.toLowerCase() === "in progress" &&
                  "text-warning"
            }`}
          >
            {data.project.status}
          </p>
          <ClientInfo client={data.project.client} />

          <EditProjectForm project={data.project} />

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
}
