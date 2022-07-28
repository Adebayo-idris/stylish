import React, { useState } from "react";
import mersh1 from "./img/mersha.svg";
import mersh2 from "./img/mershb.svg";
import mersh3 from "./img/mershc.svg";
import "./Mersh.css"


function Mersh() {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <div className="mersh align-self-center">
            <section class=" text-light py-4">
                <div class="container">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="row">
                            <div class="col-6 align-self-center">
                                <img
                                    src={
                                        activeImage === 1
                                            ? mersh1
                                            : activeImage === 2
                                            ? mersh2
                                            : mersh3
                                    }
                                    className="img-fluid w-90 pro-img"
                                    alt="product"
                                />
                            </div>
                            <div class="col-6 align-self-center text-white ">2
                                <h2>
                                    <b>Stylish Mersh</b>
                                </h2>
                                <b>color</b>
                                <div>
                                    <i
                                        class="box active"
                                        onClick={() => setActiveImage(1)}
                                    >
                                        <img
                                            src={mersh1}
                                            alt="thumb"
                                            className="img-edit img-edit rounded-circle img-fluid img-w"
                                        />
                                    </i>
                                    <i
                                        class="box"
                                        onClick={() => setActiveImage(2)}
                                    >
                                        <img
                                            src={mersh2}
                                            alt="thumb"
                                            className="img-edit rounded-circle img-fluid img-thumbnail"
                                        />
                                    </i>
                                    <i
                                        class="box"
                                        onClick={() => setActiveImage(3)}
                                    >
                                        <img
                                            src={mersh3}
                                            alt="thumb"
                                            className="img-edit img-edit rounded-circle img-fluid img-thumbnail"
                                        />
                                    </i>
                                </div>
                                <span class="pro-text">
                                    The difference between style and fashion is
                                    quality..
                                </span>
                                <p class="">50$</p>
                                <button
                                    type="btn"
                                    class="btn btn-light text-danger"
                                >
                                    COMING SOON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mersh;
