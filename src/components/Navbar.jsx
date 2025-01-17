import "./Navbar.css";
export default function Navbar({setCategory}) {
  return (
    <div>
     
     <nav className="navbar navbar-expand-lg bg-primary"data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-brand btn btn-outline-danger" onClick={() => setCategory("general")}>News World</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory("technology")}><span>Technology</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("health")}><span>Health</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("business")}><span>Business</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}><span>Sports</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("politics")}><span>Politics</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}><span>Science</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}><span>Entertainment</span></div>
        </li>
        </ul>
       </div>
       </div>
</nav>


    </div>
  );
}
