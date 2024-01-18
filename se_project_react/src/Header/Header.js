import "./Header.css";
import DateTime from "./DateTime.js";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            src={require("../images/dashboard/logo.svg").default}
            alt="logo"
          ></img>
        </div>
        <div>
          <DateTime />
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            add new clothes
          </button>
        </div>
        <div>name</div>
        <div>
          <img
            src={require("../images/dashboard/avatar.svg").default}
            alt="avatar"
          ></img>
        </div>
      </div>
    </header>
  );
};
export default Header;
