import { IoLogoSass } from "react-icons/io";
import AddProduct from "../pages/AddProduct";

const WelcomeMessage = ({ getOnClick }) => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <IoLogoSass style={{ width: "40px", height: "50px" }} />
        <h1 className="display-5 fw-bold text-body-emphasis">
          No products to display
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with Mohd
            Meraj Ansari and Bootstrap, the world’s most popular front-end open
            source toolkit, featuring Sass variables and mixins, responsive grid
            system, extensive prebuilt components, and powerful JavaScript
            plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              fdprocessedid="gk4xkp"
              onClick={getOnClick}
            >
              Add a product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
