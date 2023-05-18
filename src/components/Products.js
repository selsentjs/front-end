import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";

const Products = () => {
  const [data, setData] = useState([]);
  // search
  const [search, setSearch] = useState("");

  // pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  let api = "https://fakestoreapi.com/products";
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get(api);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOffirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOffirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        {/* search */}
        <div>
          <nav className="d-flex justify-content-center navbar navbar-expand-lg bg-body-tertiary mb-4">
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </nav>
        </div>

        {/* display card */}
        <div className="row justify-content-center">
          {currentPosts?.length > 0
            ? currentPosts
                ?.filter((fil) => fil.title.toLowerCase().includes(search))
                .map((item) => {
                  return (
                    <div className="col-md-3 mb-4">
                      <div className="card h-100 text-center p-4" key={item.id}>
                        <img
                          loading="lazy"
                          src={item.image}
                          className="card-img-top"
                          alt={item.title}
                          height="250px"
                        />
                        <div className="card-body">
                          <h5 className="card-title mb-0">
                            {item.title.substring(0, 12)}
                          </h5>
                          <p className="card-text lead fw-bold">
                            ${item.price}
                          </p>
                          <NavLink
                            to={`/products/${item.id}`}
                            className="btn btn-primary"
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })
            : "No data available"}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Products;
