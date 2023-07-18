import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>nottadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search icon" className="icon" />
        <img src="/app.svg" alt="app icon" className="icon" />
        <img src="/expand.svg" alt="expand icon" className="icon" />
        <div className="notifications">
          <img
            src="/notifications.svg"
            alt="notification icon"
            className="icon"
          />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            alt="user icon"
            className="icon"
          />
          <span>Gabriele</span>
        </div>
        <img src="/settings.svg" alt="setings icon" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
