import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <>
      <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteClientConfirm"
            className="btn btn-danger btn-sm"
          >
            <FaTrash />
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id="deleteClientConfirm"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="deleteClientConfirmLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content border-none">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteClientConfirmLabel">
                Delete Confirmation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete {client.name}? <br />
              <strong>
                <i>All projects related to this client will also be deleted</i>
              </strong>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={deleteClient}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
