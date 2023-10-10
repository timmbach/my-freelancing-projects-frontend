import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group mt-1">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <a
            className="text-decoration-none text-black"
            href={`mailto:${client.email}`}
          >
            <FaEnvelope className="icon" /> {client.email}
          </a>
        </li>
        <li className="list-group-item">
          <a
            className="text-decoration-none text-black"
            href={`tel:${client.phone}`}
          >
            <FaPhone className="icon" /> {client.phone}
          </a>
        </li>
      </ul>
    </>
  );
}
