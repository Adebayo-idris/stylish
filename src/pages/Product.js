import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menu } from "../data/menu";
import product from "./Homeproduct";
import "./Homeproduct.css";
import { Link } from "react-router-dom";

const Product = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [display, setDisplay] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProduct();
    });

    const getProduct = () => {
        let find = menu.find((m) => m.name === params.type);
        if (find) {
            let findProduct = find.children.find(
                (c) => c.name === params.product
            );
            if (findProduct) {
                setDisplay(true);
                setProductList(
                    product.filter(
                        (p) =>
                            p.category === params.product &&
                            p.for === params.type
                    )
                );
            } else {
                navigate("/not-found");
            }
        } else {
            navigate("/not-found");
        }
    };

    const listitems = productList.map((item) => (
        <div className="col col-lg-3 my-4 " key={item.id}>
            <div className="snip1268 shadow-lg">
                <div className="image">
                    <img src={item.thumb} alt=""  className=" p-3 "  />

                    <div className="add-to-cart mb-3">
                        <img src={item.view} className="pt-2" alt="" />
                        <Link style={{ color: 'inherit', textDecoration: "none"}}
                            to={`/product/${item.category}/${item.product_name}`}
                        >
                            {" "}
                            <img src={item.text} alt="" /> {item.text}
                        </Link>
                    </div>
                </div>

                <figcaption>
                    <h5 >{item.product_name}</h5>
                    <p className="price mx-4 pt-3">
                        <span className=" mx-2">
                            <img src={item.wish} alt="" />
                        </span>
                        {item.price}
                        <span>{item.currency}</span>
                    </p>
                </figcaption>
            </div>
        </div>
    ));

    return (
        <div>
            {display ? (
                <div class="container mt-3 mb-4">
                    <h2 className="gradient">{params.product}</h2>
                    <div className="row container">{listitems}</div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Product;
