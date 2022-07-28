import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import product from "./Homeproduct";
import "./Homeproduct.css";
import Mersh from "./Mersh";

const MainContent = () => {
    let productArr = [];

    for (let index = 0; index < 8; index++) {
        productArr.push(product[index]);
    }

    const listItems = productArr.map((item) => (
        <div className="col container col-lg-3 my-4 md-4 " key={item.id}>
            <div className="snip1268 shadow-lg">
                <div className="image">
                    <img src={item.thumb} alt="" className=" p-1 p-2" />

                    <div className="add-to-cart mb-3">
                        <img src={item.view} className="pt-2" alt="" />
                        <Link
                            style={{ color: " ", textDecoration: "none" }}
                            to={`/product/${item.category}/${item.product_name}`}
                        >
                            {" "}
                            <img src={item.text} alt="" /> {item.text}
                        </Link>
                    </div>
                </div>

                <figcaption>
                    <h5 className="">{item.product_name}</h5>
                    <p className="price mx-4 pt-3">
                        <span className=" mx-2"></span>
                        {item.price}
                        <span>{item.currency}</span>
                    </p>
                </figcaption>
            </div>
        </div>
    ));
    return (
        <div className="">
            <Carousel />
            <div class=" container mt-3 mb-4">
                <h2>New Waves</h2>

                <div className="row container">{listItems}</div>
            </div>

            <div className="container-fluid">
                <Mersh />
            </div>
        </div>
    );
};
export default MainContent;
