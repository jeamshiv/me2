<<<<<<< HEAD
import React, { useRef } from "react";
=======
import React, { Component } from "react";
>>>>>>> da6e62ef44f49a259f70fa7c67709dc1707eb96d
import ChoiceCourse from "../ChoiceCourse/ChoiceCourse";
import CourseCategory from "../CourseCategory/CourseCategory";
import ContactForm from "../ContactForm/ContactForm";
import Slider from "react-slick";
import { Button } from "@material-ui/core";

<<<<<<< HEAD
export default function Home() {
  const sliderRef = useRef();

  const renderReviewCard = () => {
=======
export default class Home extends Component {
  renderReviewCard = () => {
>>>>>>> da6e62ef44f49a259f70fa7c67709dc1707eb96d
    return (
      <div className="col-12 mt-3">
        <div className="bg-light p-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="mr-3">
                <img
                  src="https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?cs=srgb&dl=pexels-charlotte-may-5965839.jpg&fm=jpg"
                  style={{ width: 60, height: 60 }}
                  className="img-fluid rounded-circle"
<<<<<<< HEAD
                  alt=""
=======
                  alt="review user"
>>>>>>> da6e62ef44f49a259f70fa7c67709dc1707eb96d
                />
              </div>
              <div>
                <h5 className="mb-0">Shivam Kumar</h5>
                <p className="text-secondary">Student</p>
              </div>
            </div>
            <div className="txt-f68c1f">
<<<<<<< HEAD
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div className="mt-2">
            lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Distinctio alias recusandae asperiores
            in deserunt,
          </div>
        </div>
      </div>
    );
  };

  var slick4reviews = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid bg-fef0ef py-5">
        <div className="container">
          <div className="row  align-items-center justify-content-center">
            <div className="col-lg-6 mb-5">
              <h1 className="font-weight-bold">
                Turn your ambition into a sucess story
              </h1>
              <p className="txt-777578">
                Choose from over 100,000 online videos courses with new
                additions published every months.
              </p>
              <div className="d-flex">
                <button className="btn  button-primary mx-3">
                  Contact Me!
                </button>
                <button className="btn btn-secondary mx-3">About Me</button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/Woman.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-efeff7 py-5">
        <ChoiceCourse />
      </div>

      <div className="container-fluid py-5">
        <CourseCategory />
      </div>

      <div className="container-fluid py-5 bg-fef0ef text-center">
        <div>
          <h3>Online Coaching Lessons For Remote Learning</h3>
          <p className="mt-3">
            100% online learning from the world's best universities and
            companies
          </p>
          <button className="btn button-primary mt-3 px-3">Join Today</button>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5">
            <h3>
              Know about learning <br /> learning platforms
            </h3>
            <p>
              With our growing catalog of over 30 Nanodegree programs from
              beginner to advanced your're sure to find one that fits your
              career goals.
            </p>
            <ul className="list-unstyled">
              <li>
                <i class="fas fa-check-double txt-67c97d mt-2"></i> &nbsp; Free
                E-book , video &amp; Consolations
              </li>
              <li>
                <i class="fas fa-check-double txt-67c97d mt-2"></i> &nbsp; Top
                instructors from around world
              </li>
              <li>
                <i class="fas fa-check-double txt-67c97d mt-2"></i> &nbsp; Top
                coursed fro your team.
              </li>
            </ul>
            <button className="btn button-primary">Start Learning Now</button>
          </div>
          <div className="col-lg-6 px-5">
            <img
              src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-879109.jpg&fm=jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-efeff7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>What our Students have to say</h3>
            </div>

            <div className="col-lg-2 offset-lg-4 text-center">
              <div className="d-flex justify-content-center">
                <div
                  className="bg-light p-2 px-3 mx-2 rounded cursor-pointer hover-text-f68c1f"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <i class="fas fa-arrow-left"></i>
                </div>
                <div
                  className="bg-light p-2 px-3 mx-2 rounded cursor-pointer hover-text-f68c1f"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <Slider {...slick4reviews} ref={sliderRef}>
              {renderReviewCard()}
              {renderReviewCard()}
              {renderReviewCard()}
              {renderReviewCard()}
            </Slider>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
=======
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="mt-2">
            lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Distinctio alias recusandae asperiores
            in deserunt,
          </div>
        </div>
      </div>
    );
  };

  render() {
    var slick4reviews = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <div className="container-fluid bg-fef0ef py-5">
          <div className="container">
            <div className="row  align-items-center justify-content-center">
              <div className="col-lg-6 mb-5">
                <h1>Turn your ambition into a sucess story</h1>
                <p className="txt-777578">
                  Choose from over 100,000 online videos courses with new
                  additions published every months.
                </p>
                <div className="d-flex">
                  <button className="btn  button-primary mx-3">
                    Contact Me!
                  </button>
                  <button className="btn btn-secondary mx-3">About Me</button>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="assets/Woman.png" className="img-fluid" alt="woman" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-efeff7 py-5">
          <ChoiceCourse />
        </div>

        <div className="container-fluid py-5">
          <CourseCategory />
        </div>

        <div className="container-fluid py-5 bg-fef0ef text-center">
          <div>
            <h3>Online Coaching Lessons For Remote Learning</h3>
            <p className="mt-3">
              100% online learning from the world's best universities and
              companies
            </p>
            <button className="btn button-primary mt-3">Join Today</button>
          </div>
        </div>

        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5">
              <h3>
                Know about learning <br /> learning platforms
              </h3>
              <p>
                With our growing catalog of over 30 Nanodegree programs from
                beginner to advanced your're sure to find one that fits your
                career goals.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check-double txt-67c97d mt-2"></i> &nbsp;
                  Free E-book , video &amp; Consolations
                </li>
                <li>
                  <i className="fas fa-check-double txt-67c97d mt-2"></i> &nbsp;
                  Top instructors from around world
                </li>
                <li>
                  <i className="fas fa-check-double txt-67c97d mt-2"></i> &nbsp;
                  Top coursed fro your team.
                </li>
              </ul>
              {/* <button className="btn button-primary">Start Learning Now</button> */}
              <Button
                className="text-light px-4 py-2 mt-3 mb-5"
                variant="contained"
                style={{ backgroundColor: "#f66962" }}
              >
                Start Learning Now
              </Button>
            </div>
            <div className="col-lg-6 px-5">
              <img
                src="assets/girl-study.jpg"
                className="img-fluid"
                alt="start learning"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 bg-efeff7">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>What our Students have to say</h3>
              </div>

              <div className="col-lg-2 offset-lg-4 text-center">
                <div className="d-flex justify-content-center">
                  <div className="bg-light p-2 px-3 mx-2 rounded">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="bg-light p-2 px-3 mx-2 rounded">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <Slider {...slick4reviews}>
                {this.renderReviewCard()}
                {this.renderReviewCard()}
                {this.renderReviewCard()}
                {this.renderReviewCard()}
              </Slider>
            </div>
          </div>
        </div>

        <ContactForm />
      </>
    );
  }
>>>>>>> da6e62ef44f49a259f70fa7c67709dc1707eb96d
}
