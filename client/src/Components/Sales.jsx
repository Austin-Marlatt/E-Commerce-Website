import React from "react";
import SalesAccordianTemplate from "./Accordian/Accordion.Sales";
import DropdownProductReview from "./Accord.Modal";

function Sales() {
    return (
        <div>
            <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="row">
        <div className="col-md-6"> {/** CSS should start here. Can't get row */}
        <h2 className="display-7 text-dark text-uppercase">See our sales!</h2>
          <div> </div> 
          <div className="display-header d-flex justify-content-between pb-3">
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder col-md-6">
                    <img src="/src/public/images/insta-item1.jpg" alt="product-item" className="img-fluid"/>
                    <SalesAccordianTemplate header={"iPhone 7"} oldPrice={"$1000"} discount={"50% off!!"} />
                    <p>Now only $500!</p>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    <p></p>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder col-md-6">
                    <img src="/src/public/images/insta-item2.jpg" alt="product-item" className="img-fluid"/>
                    <SalesAccordianTemplate header={"Smart Watch"} oldPrice={"$6,000"} discount={"90% off!"} />
                    <p className="item-price text-primary">Now only $600!</p>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    <p></p>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder col-md-6">
                    <img src="/src/public/images/product-item8.jpg" alt="product-item" className="img-fluid"/>
                    <SalesAccordianTemplate header={"Sweat-proof Watch"} oldPrice={"Originally $7500"} discount={"Now 95% off!"} />
                    <p className="item-price text-primary">Now $375!</p>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    <p></p>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item9.jpg" alt="product-item" className="img-fluid"/>
                    <p></p>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <SalesAccordianTemplate header={"Pretty Watch"} oldPrice={"Used to be $100,000!"} discount={"99% off the original price!!!"} />
                      <p className="item-price text-primary">$1000</p>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src="/src/public/images/product-item10.jpg" alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                    <button>Add to Cart</button>
                    </div>
                  </div>
                  <p></p>
                  <div className="card-detail d-flex justify-content-between pt-3">
                    <h3 className="card-title text-uppercase">
                      <SalesAccordianTemplate header={"Digital Watch-basic but sufficient"} oldPrice={"Originally selling for $200"} discount={"60% discounted"} />
                      <p className="item-price text-primary">Currently $80</p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
        </div>
    )
};
export default Sales;
//exported to checkout and shop