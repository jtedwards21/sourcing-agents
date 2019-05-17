import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'
import Footer from '../components/footer'

import 'bootstrap/dist/css/bootstrap.css'


class Pricing extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-cover process-cover">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">Our Sourcing Process</h1>
            <p class="lead font-weight-normal">Find out more about how we can help you to achieve your business goals.</p>
          </div>
          <div class="product-device box-shadow d-none d-md-block"></div>
          <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>

        <div class="container marketing">

          <div class="row">
            <div class="col-lg-3 process">
              <p className="number">1</p>
              <h2>Quotation</h2>
              <p>After receiving customer requirements we contact potential suppliers and narrow them down to find the ones that we believe will have the best prices. Through this process we also will gain an understanding of what costs might be incurred for customers later on, when ordering samples, for instance.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">2</p>
              <h2>Samples</h2>
              <p>Our next step is to purchase samples from the supplier. These samples and any relevant documents are sent to our facilities where quality control checks are performed by a professional team. It’s also possible for us to consolidate multiple samples and ship them to clients.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">3</p>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">4</p>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">5</p>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">6</p>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">7</p>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
            </div>
            <div class="col-lg-3 process">
              <p className="number">8</p>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Pricing
