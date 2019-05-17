import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Nav from "../components/nav"





class Home extends React.Component {
  render() {
    return (
      <main role="main">
        <Nav />

        <div class="jumbotron bg-cover main-cover">
          <div class="container">
            <h1 class="display-3">Hello, world!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          </div>
        </div>

        <div class="container marketing">

          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle" src="./package.jpg" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Comprehensive Process</h2>
              <p>Our sourcing process provides a reliable solution for all types of importers.</p>
              <p><a class="btn btn-secondary" href="./process" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="./agent.jpg" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Professional<br /> Agents</h2>
              <p>Our team of professional agents can help you to get a quotation within 48 hours.</p>
              <p><a class="btn btn-secondary" href="./agents" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="./deal.jpg" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
              <p><a class="btn btn-secondary" href="./pricing" role="button">View details »</a></p>
            </div>
          </div>



          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Get your first quote today. <span class="text-muted">It's free.</span></h2>
              <p class="lead">We'll help you get a quotation from suppliers of your product for free within 48 hours.</p>
              <p><a class="btn btn-lg btn-primary" href="./contact" role="button">Contact Us</a></p>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" alt="computer" src="./computer.jpg"></img>
            </div>
          </div>

          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Your supply chain.<br /><span class="text-muted">In our hands.</span></h2>
              <p class="lead">Let us take care of your sourcing and management for your entire product today</p>
              <p><a class="btn btn-lg btn-primary" href="./process" role="button">Learn More</a></p>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="featurette-image img-fluid mx-auto" alt="warehouse" src="./warehouse.jpg" ></img>
            </div>
          </div>

          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="" data-holder-rendered="true"></img>
            </div>
          </div>

          <hr class="featurette-divider"></hr>

        </div>
        </main>
    )
  }
}

export default Home
