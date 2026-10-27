import React, { useState, useEffect } from 'react'
import Four04 from '../Four04/Four04'
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    const [product, setProduct] = useState([]);
    const { productID } = useParams();
    console.log(productID);

    useEffect(() => {
        // FIX 1: Use absolute path "/iphone.json" instead of "./iphone.json"
        fetch("/iphone.json")
            .then((res) => res.json())
            .then((data) => {
                const productList = data.products;
                const singleProduct = productList.filter(
                    (item) => item.product_url === productID
                );
                setProduct(singleProduct);
            })
            .catch(() => console.log("Error: unable to fetch!!"));
    }, [productID]);

  return (
    <div>
        <section className="internal-page-wrapper">
            <div className="container">
                <br />
                <br />
                <br />
                {product.length ? (
                    product.map((item) => (
                        <div key={item.product_id}>
                            <div className="row justify-content-center text-center">
                                <div className="col-12 mt-5 pt-5">
                                    <div className="title-wraper font-weight-bold">
                                        {item.product_name}
                                    </div>
                                    <div className="brief-description">
                                        {/* FIX 2: Match lowercase JSON key */}
                                        {item.product_brief_description}
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center product-holder h-100 my-5">
                                <div className="col-sm-12 col-md-6 my-auto">
                                    <div className="starting-price">
                                        {/* FIX 2: Match lowercase JSON key */}
                                        {`Starting at ${item.starting_price}`}
                                    </div>
                                    <div className="monthly-price">
                                        {/* FIX 2: Match lowercase JSON key */}
                                        {item.price_range}
                                    </div>
                                    <div className="product-details">
                                        {/* FIX 2: Match lowercase JSON key */}
                                        {item.product_description}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="product-image">
                                        {/* FIX 2: Match lowercase JSON key */}
                                        <img src={item.product_img} alt="product" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <Four04 />
                )}
                
            </div>
        </section>
    </div>
  )
}