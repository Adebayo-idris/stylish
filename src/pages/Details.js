import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import product from "./Homeproduct";

function Details() {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const findProduct = () => {
        setLoading(true);
        const search = product.find((p) => p.product_name === params.name);
        if (search) {
            setDetail(search);
            setLoading(false);
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        findProduct();
    }, [params]);

    useEffect(() => {
        if (detail.id) {
            checkStorage();
        }
    }, [detail]);

    const addToCart = () => {
        let getCart = JSON.parse(localStorage.getItem("cart"));
        if (getCart) {
            let find = getCart.find(
                (cart) =>
                    cart.product_name === detail.product_name &&
                    cart.id === detail.id
            );
            if (!find) {
                let arr = getCart;
                arr.push(detail);
                localStorage.setItem("cart", JSON.stringify(arr));
                setAdded(true);
            }
        } else {
            localStorage.setItem("cart", JSON.stringify([detail]));
        }
    };

    const checkStorage = () => {
        let getCart = JSON.parse(localStorage.getItem("cart"));
        if (getCart) {
            let find = getCart.find(
                (cart) =>
                    cart.product_name === detail.product_name &&
                    cart.id === detail.id
            );
            if (!find) {
                setAdded(false);
            } else {
                setAdded(true);
            }
        } else {
            setAdded(false);
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                detail.id && (
                    <div class="container ">
                        <div class="row ">
                            <div class="col-sm">
                                <img
                                    src={detail.thumb}
                                    alt="Product"
                                    className="img-fluid"
                                />
                            </div>
                            <div class="col-sm align-self-center">
                                <h1>{detail.product_name}</h1>
                                <h4 className="text-danger mt-4">
                                    {detail.currency}
                                    {detail.price}
                                </h4>
                                <h4>
                                    {" "}
                                    <label for="Size">Choose size:</label>{" "}
                                </h4>
                                <select name="size" id="size">
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                </select>{" "}
                                <br /> <br />
                                <button disabled={added} onClick={addToCart}>
                                    {added ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Details;
