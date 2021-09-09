import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
            <footer className="container-fluid bg-282834 pb-4">
              <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6 mt-4">
                        <h3 className="text-light">Companay</h3>
                        <ul className="list-unstyled txt-777578">
                            <li>About</li>
                            <li>Career</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6 mt-4">
                        <h3 className="text-light">Community</h3>
                        <ul className="list-unstyled txt-777578">
                            <li>Go Premium</li>
                            <li>Refer Friends</li>
                            <li>Gift Card</li>
                            <li>Scholarships</li>
                            <li>Free Classes</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6 mt-4">
                        <h3 className="text-light">Teaching</h3>
                        <ul className="list-unstyled txt-777578">
                            <li>Become a Teacher</li>
                            <li>Teaching Academy</li>
                            <li>Teacher Handbook</li>
                            <li>Partnerships</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6 mt-4">
                        <h3 className="text-light">Support</h3>
                        <ul className="list-unstyled txt-777578">
                            <li>Support</li>
                            <li>Contact Us</li>
                            <li>System Requirements</li>
                            <li>Register Activation Key</li>
                            <li>Site Feedback</li>
                        </ul>
                    </div>
                </div>
                <hr color="#777578"/>
                <div className="row">
                    <div className="col-lg-6 col-md-8 txt-777578 mb-3">
                        &copy; {(new Date().getFullYear())} Edu Website - Jeamshiv. All rights reserved.
                    </div>
                    <div className="col-lg-3 col-md-4 offset-lg-3 text-center txt-777578">
                        <i class="fab fa-facebook-f mx-3"></i>
                        <i class="fab fa-twitter mx-3"></i>
                        <i class="fab fa-google mx-3"></i>
                        <i class="fab fa-linkedin-in mx-3"></i>
                    </div>
                </div>
              </div>
            </footer>  
            </>
        )
    }
}
