import React, { Component } from "react";

export default class CourseCategory extends Component {
  renderCourseCard = (cardbg, iconbg, iconColor, icon, title, description) => {
    return (
      <>
        <div className="col-lg-3 col-md-6 mt-4">
          <div
            className="rounded py-4 px-3"
            style={{ backgroundColor: cardbg }}
          >
            <div
              className="rounded text-center pt-2 mb-2"
              style={{ width: 50, height: 50, backgroundColor: iconbg }}
            >
              <h4>
                <i className={icon} style={{ color: iconColor }}></i>
              </h4>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-9">
              <h3>Choice favorite course from top category</h3>
            </div>
            <div className="col-lg-3">
              <button className="btn button-primary">See All Categories</button>
            </div>
          </div>

          <div className="row">
            {this.renderCourseCard(
              "#efeff7",
              "#e2ddfe",
              "#5c53ae",
              "fas fa-swatchbook",
              "Design",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
            {this.renderCourseCard(
              "#fdf3e9",
              "#fae1cf",
              "#f5bb9a",
              "fas fa-code",
              "Development",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
            {this.renderCourseCard(
              "#dcf7fe",
              "#bcf0fe",
              "#79d2f8",
              "fab fa-digital-ocean",
              "IT-Software",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
            {this.renderCourseCard(
              "#e5fae9",
              "#cef5d6",
              "#67c97d",
              "fas fa-briefcase",
              "Business",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}

            {this.renderCourseCard(
              "#e5fae9",
              "#cef5d6",
              "#67c97d",
              "fas fa-bullhorn",
              "Marketing",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
            {this.renderCourseCard(
              "#dcf7fe",
              "#bcf0fe",
              "#79d2f8",
              "fas fa-camera",
              "Photography",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
            {this.renderCourseCard(
              "#fdf3e9",
              "#fae1cf",
              "#f5bb9a",
              "far fa-heart",
              "Health & Care",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
            {this.renderCourseCard(
              "#efeff7",
              "#e2ddfe",
              "#5c53ae",
              "fab fa-chromecast",
              "Technology",
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            )}
          </div>
        </div>
      </>
    );
  }
}
