import React from "react";
// import Header from "../components/Header";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      {/* <ApolloProvider client={client}> */}

      <div className="container">
        <div className="d-flex gap-3">
          <AddProjectModal />
          <AddClientModal />
        </div>
        <Projects />
        <hr />
        <Clients />
      </div>
      {/* </ApolloProvider> */}
    </>
  );
}
