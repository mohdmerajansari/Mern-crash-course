import { IoLogoSass, IoMdAddCircle } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul
                className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
                style={{ textAlign: "center" }}
              >
                <li>
                  <Link to="/">
                    <IoLogoSass style={{ width: "40px", height: "50px" }} />
                  </Link>
                </li>
                <li>
                  <Link to={"/add"} style={{ textDecoration: "none" }}>
                    <IoMdAddCircle /> Add product
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
