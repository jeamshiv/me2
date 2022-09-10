import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class About extends Component {
  renderAboutUsCard = () => {
    return (
      <>
        <div className="mt-4 pr-5">
          <h4>Unlimited course &amp; Studetns</h4>
          <p>
            Find what you are interested to learn online and choose what exactly
            best for you that you really passinated to learn and get to
          </p>
        </div>
      </>
    );
  };

  renderAboutEduWebCard = (icon, title, desc) => {
    return (
      <>
        <div className="col-lg-4 px-2 mt-4">
          <div className="bg-fef0ef py-4 px-4">
            <h3 className="mb-3">
              <i className={icon}></i>
            </h3>
            <h4>{title}</h4>
            <p className="minHeight-60">{desc}</p>
            <i class="fas fa-arrow-right txt-777578"></i>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <>
        <div className="container-fluid py-5 bg-fef0ef">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-5 pb-4">
                <p className="font-weight-bold">About us</p>
                <h2>Edu Web powers Course 1,000,00 businesses worldwide.</h2>
                <p>
                  By connecting students all over the world to the best
                  instructor, Edu Web is helping individuals reach their goals
                  and pursue their dreams.
                </p>
                <Button
                  className="py-2 px-4 text-light mt-4"
                  variant="outlined"
                  style={{ backgroundColor: "#f66962" }}
                >
                  Read more
                </Button>
              </div>
              <div className="col-lg-6">
                <div className="px-4">
                  <img
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3769021.jpg&fm=jpg"
                    className="img-fluid rounded"
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mb-3">
              <h2>Know about best online learning platform</h2>
            </div>
            <div className="col-lg-2">
              <Button
                className="py-2 px-4 text-light"
                variant="outlined"
                style={{ backgroundColor: "#f66962" }}
              >
                Start Now
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 pt-4 pl-lg-5">
              {this.renderAboutUsCard()}
              {this.renderAboutUsCard()}
              {this.renderAboutUsCard()}
            </div>
            <div className="col-lg-7">
              <div className="text-center">
                <img
                  src="/assets/about-banner.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-10">
              <h2>Learn more about Edu Web</h2>
            </div>
            <div className="col-lg-2">
              <Button
                className="py-2 px-4 text-light"
                variant="outlined"
                style={{ backgroundColor: "#f66962" }}
              >
                Start Now
              </Button>
            </div>
          </div>
          <div className="row">
            {this.renderAboutEduWebCard(
              "fas fa-award",
              "Award-winning support",
              "all over the world to the best instructor, Edu Web is helping individuals"
            )}
            {this.renderAboutEduWebCard(
              "far fa-heart",
              "Career opportunities",
              "Learn how you can have an impact by exploring opportunities at Edu Web."
            )}
            {this.renderAboutEduWebCard(
              "fas fa-volume-down",
              "Award-winning support",
              "Find press releases, executive team bios and more."
            )}
          </div>
        </div>
      </>
    );
  }
}
