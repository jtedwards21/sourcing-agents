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

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class=""></li>
            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="first-slide" src="" alt="First slide"></img>
              <div class="container">
                <div class="carousel-caption text-left">
                  <h1>Example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a class="btn btn-lg btn-primary" href="https://getbootstrap.com/docs/4.0/examples/carousel/#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item active">
              <img class="second-slide" src="" alt="Second slide"></img>
              <div class="container">
                <div class="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a class="btn btn-lg btn-primary" href="https://getbootstrap.com/docs/4.0/examples/carousel/#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="third-slide" src="" alt="Third slide"></img>
              <div class="container">
                <div class="carousel-caption text-right">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a class="btn btn-lg btn-primary" href="https://getbootstrap.com/docs/4.0/examples/carousel/#" role="button">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="https://getbootstrap.com/docs/4.0/examples/carousel/#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="https://getbootstrap.com/docs/4.0/examples/carousel/#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="container marketing">

          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle" src="./package.jpg" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Comprehensive Process</h2>
              <p>Our sourcing process provides a reliable solution for all types of importers.</p>
              <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.0/examples/carousel/#" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="./agent.jpg" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Professional<br /> Agents</h2>
              <p>Our team of agents can help you to get a quotation within 48 hours.</p>
              <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.0/examples/carousel/#" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="./deal.jpg" alt="Generic placeholder image" width="140" height="140"></img>
              <h2>Competitive<br /> Rates</h2>
              <p>We charge fair rates through a transparent sourcing process perfect for small to medium-sized businesses.</p>
              <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.0/examples/carousel/#" role="button">View details »</a></p>
            </div>
          </div>



          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="" data-holder-rendered="true"></img>
            </div>
          </div>

          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="" data-holder-rendered="true" ></img>
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
