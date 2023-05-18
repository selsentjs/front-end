
import Products from "./Products";

const Home = () => {
    return (
      <div className="hero">
        <div className="card text-bg-dark border-0">
          <img
            src="https://img.freepik.com/free-photo/young-pretty-woman-holding-shopping-bags-smiling-excited-camera-buying-with-discounts-standing-ov_1258-118812.jpg?w=1060&t=st=1684391807~exp=1684392407~hmac=90393404eb5c6647d0530e4777e5be40e210b6a52c0c03b10e0cc569ffc57031"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">New Product</h5>
              <p className="card-text ">
                CHECK OUT ALL THE PRODUCTS
              </p>
             
            </div>
          </div>
        </div>
       <Products />
      </div>
    );
  };
  
  export default Home;