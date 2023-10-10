// import logo from "../assets/minidocs-logo.png";
export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            {/* <img src={logo} alt="logo" className="mr-2" /> */}
            <h5>my active clients</h5>
          </div>
        </a>
      </div>
    </nav>
  );
}
