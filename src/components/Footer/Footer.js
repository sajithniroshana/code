import React from "react";
import "./footer.css";
import "remixicon/fonts/remixicon.css";
import Image from "../../assets/images/footer_logo.jpg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content-1">
                <div className="footer-content-1-content-1">
                    <img
                        src={Image}
                        alt=""
                        style={{height: "50px", marginLeft: "30px"}}
                    ></img>
                    <h1>GoviSewana</h1>
                </div>
                <div className="footer-content-1-content-2">
                    <div className="location text-xs">
                        <i class="ri-map-pin-fill"></i>
                        <p style={{marginLeft: "10px"}}>
                            345 Faulconer Drive, Suite 4 • Bambalapitiya,<br/> Sri Lanka
                        </p>
                    </div>
                    <div className="contact text-xs">
                        <i class="ri-phone-fill"></i>
                        <p style={{marginLeft: "10px"}}>+94 766 760 760</p>
                    </div>
                </div>
                <div className="footer-content-1-content-3 text-xs">
                    <div className="social-media">
                        <p>Social media:</p>
                        <i class="ri-facebook-box-fill"></i>
                        <i class="ri-linkedin-fill"></i>
                        <i class="ri-youtube-fill"></i>
                    </div>
                    <div className="email ">
                        <p>Email Us:</p>
                        <p style={{marginLeft: "45px"}}>support.govisewana@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-content-2">
                <div className="line-1"></div>
                <div className="footer-content-2-content text-xs tex">
                    <div className="list w-10/12">
                        <ul>
                            <li>
                                <a href="">ABOUT US</a>
                            </li>
                            <li>
                                <a href="">CONTACT US</a>
                            </li>
                            <li>
                                <a href="">HEALTH</a>
                            </li>
                            <li>
                                <a href="">PRIMARY POLICIE</a>
                            </li>
                            <li>
                                <a href="">DISCLAIMER</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex justify-center items-center w-1/4">
                        <p>Copyright © 2023 . GoviSewana.ltd</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
