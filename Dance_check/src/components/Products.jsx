import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css"; // Custom CSS file for additional styling

const Products = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const danceClasses = [
    {
      id: 1,
      title: "Bharatanatyam",
      description: "Tuesday and Wednesday 5:00 pm to 6:00 pm",
      image: "/assets/bharatanaya.jpg",
      category: "Classical",
      price: 800,
    },
    {
      id: 2,
      title: "Folk Dance",
      description: "Thursday, Friday 5:00 pm to 6:00 pm, Saturday 5:30 pm to 6:30 pm.",
      image: "/assets/folk.jpg",
      category: "dance",
      price: 800,
    },
    {
      id: 3,
      title: "Hiphop",
      description: "Thursday, Friday 5:00 pm to 6:00 pm, Saturday 5:30 pm to 6:30 pm",
      image: "/assets/hiphop.jpeg",
      category: "hiphop",
      price: 800,
    },
    {
      id: 4,
      title: "Yoga",
      description: "Yoga and meditation to center life",
      image: "/assets/yoga1.jpg",
      category: "Yoga",
      price: 1000,
    },
    {
      id: 5,
      title: "Zumba/Aerobics",
      description: "Monday to Friday 6:00 Am to 7:00 Am",
      image: "/assets/zumba.png",
      category: "Zumba",
      price: 1000,
    },
    {
      id: 6,
      title: "Art N Craft",
      description: "Monday and Tuesday 4:00 pm to 5:00 pm ",
      image: "/assets/art.jpg",
      category: "Art",
      price: 800,
    },
    {
      id: 7,
      title: "Gymnastics",
      description: "Monday 5:30 pm to 6:30 pm, Friday and Saturday 6:30 pm to 7:30 pm",
      image: "/assets/gymna.jpeg",
      category: "Gym",
      price: 1000,
    },
    {
      id: 8,
      title: "Sugama Sangeetha",
      description: "Saturday and Sunday 4:30 pm to 5:30 pm ",
      image: "/assets/music2.jpg",
      category: "music",
      price: 700,
    },
    {
      id: 9,
      title: "Bollywood Dance",
      description: "Thursday, Friday 5:00 pm to 6:00 pm, Saturday 5:30 pm to 6:30 pm. ",
      image: "/assets/bolly.jpeg",
      category: "music",
      price: 700,
    },
  ];

  const [filter, setFilter] = useState(danceClasses);

  const filterProduct = (cat) => {
    const updatedList = danceClasses.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, i) => (
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={i}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-3">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(danceClasses)}>
            All
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Classical")}>
            Classical
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("hiphop")}>
            Hiphop
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("dance")}>
            Folk Dance
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Art")}>
            Art N Craft
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Yoga")}>
            Yoga
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Gym")}>
            Gymnastics
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Zumba")}>
            Zumba
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("music")}>
            Sugama Sangeetha
          </button>
        </div>

        <div className="row">
          {filter.map((product) => (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={400}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Price: ₹{product.price}</strong></p>
                </div>
                <div className="card-body">
                  <Link to="/contact" className="btn btn-dark m-1">
                    Join Class
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Dance Classes</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
