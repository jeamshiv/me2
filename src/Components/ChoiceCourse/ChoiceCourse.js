import React, { Component } from 'react'
import Slider from "react-slick";

export default class ChoiceCourse extends Component {

    renderCourseCard=(img, stars, views, lesions, title, description)=>{
        return(
            <>
                <div class="card">
                <img class="card-img-top p-3" src="https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?cs=srgb&dl=pexels-charlotte-may-5965839.jpg&fm=jpg" alt="Card cap" />
                <div class="card-body">
                    <div className="d-flex justify-content-between mx-2">
                        <div>
                            <i class="far fa-star"></i> {stars}
                        </div>
                        <div>
                            <i class="far fa-eye"></i> {views}
                        </div>
                        <div>
                            <i class="far fa-play-circle"></i> {lesions} Lesions
                        </div>
                    </div>
                    <h5 className="mt-3">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                </div>
            </>
        )
    }

    render() {


        var slick4course = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
	        autoplaySpeed: 3000,
        }

        return (
            <>
               <div className="container">
                   <h3 className="mb-4">Get choice for your course</h3>
                   <div className="col-12">
                   <Slider {...slick4course}>
                       <div className="col-lg-12 mb-3">
                            {this.renderCourseCard('', '8', '8,000', '26', 'Title of th ecourse 1', "Some quick example text to build on the card title and make up the bulk of the card's content.")}
                       </div>
                       <div className="col-lg-12">
                            {this.renderCourseCard('', '8', '8,000', '26', 'Title of th ecourse 1', "Some quick example text to build on the card title and make up the bulk of the card's content.")}
                       </div>
                       <div className="col-lg-12">
                            {this.renderCourseCard('', '8', '8,000', '26', 'Title of th ecourse 1', "Some quick example text to build on the card title and make up the bulk of the card's content.")}
                       </div>
                       <div className="col-lg-12">
                            {this.renderCourseCard('', '8', '8,000', '26', 'Title of th ecourse 1', "Some quick example text to build on the card title and make up the bulk of the card's content.")}
                       </div>
                       <div className="col-lg-12">
                            {this.renderCourseCard('', '8', '8,000', '26', 'Title of th ecourse 1', "Some quick example text to build on the card title and make up the bulk of the card's content.")}
                       </div>
                       <div className="col-lg-12">
                            {this.renderCourseCard('', '8', '8,000', '26', 'Title of th ecourse 1', "Some quick example text to build on the card title and make up the bulk of the card's content.")}
                       </div>
                    </Slider>
                   </div>
               </div> 
            </>
        )
    }
}
