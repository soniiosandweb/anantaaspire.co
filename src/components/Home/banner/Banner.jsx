import "./Banner.css";
import Slider from "react-slick";
import banner1 from "../../../assests/images/banner/banner1.jpg";
import banner2 from "../../../assests/images/banner/banner2.png";
import banner3 from "../../../assests/images/banner/banner3.png";
import banner4 from "../../../assests/images/banner/banner4.png";
import banner5 from "../../../assests/images/banner/banner5.png";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import EnquireForm from "../../Layout/EnquireForm/EnquireForm";

import telephone from "../../../assests/images/telephone.png";
import appIcon from "../../../assests/images/app-icon.png";
import rupee from "../../../assests/images/rupee.png";
import business from "../../../assests/images/businessman.png";
import operator from "../../../assests/images/operator.png";
import carIcon from "../../../assests/images/car-icon.png";

const weGetOptions = [
    {
        icon: telephone,
        text: "Instant Call Back from Our Expert Team",
    },
    {
        icon: carIcon,
        text: "Book a Hassle-Free Site Tour – Pickup & Drop on Us",
    },
    {
        icon: appIcon,
        text: "Get Brochure, Floor Plans & Latest Prices on WhatsApp",
    },
    {
        icon: rupee,
        text: "Authentic Price Quote – Verified by the Builder",
    },
    {
        icon: business,
        text: "Personalized Guidance by Our Luxury Homes Expert",
    },
    {
        icon: operator,
        text: "End-to-End Support with Home Loans & Documentation",
    }
]

const slides = [
    {
        title: "Discover Luxury Living on the Patiala–Chandigarh Highway at Ananta Aspire",
        text: "Redefining the Essence of Modern Luxury",
        subtext: "Luxury Flats Starting at Just ₹1.7 Cr",
        image: banner1,
        imageAlt: "Relaxing near shed area in AnantaAspire 3 BHK luxury flats in Zirakpur",
        smallAlt: "Families Have Mooved In",
    },
    {
        title: "Redefining Modern Living at The Ananta Aspire",
        text: "Where Smart Design Meets Luxury Comfort",
        subtext: "Luxury Flats Starting at Just ₹1.7 Cr",
        image: banner4,
        imageAlt: "Green garden around the AnantaAspire building, one of the new residential projects in Zirakpur offering modern living amidst nature",
        smallAlt: "Ananta Aspire",
    },
    {
        title: "The Future of Smart Living Starts Here",
        text: "Experience Intelligent Spaces Crafted for Modern Minds",
        subtext: "Luxury Flats Starting at Just ₹1.7 Cr",
        image: banner2,
        imageAlt: "Girl standing near AnantaAspire building night view showcasing luxury flats in Zirakpur",
        smallAlt: "Ananta Aspire",
    },
    {
        title: "Introducing The Ananta Aspire – Smart Living Elevated",
        text: "Step Into the Future of Refined, Intelligent Living",
        subtext: "Luxury Flats Starting at Just ₹1.7 Cr",
        image: banner5,
        imageAlt: "Beautiful illuminated night view of AnantaAspire luxury flats for sale in Zirakpur",
        smallAlt: "Ananta Aspire",
    },
    {
        title: "Luxury Reimagined for the Smart Generation",
        text: "Designed to Inspire Modern Minds & Sophisticated Living",
        subtext: "Luxury Flats Starting at Just ₹1.7 Cr",
        image: banner3,
        imageAlt: "New residential project in Zirakpur – exterior view of Ananta Aspire showcasing modern architecture and premium living",
        smallAlt: "Ananta Aspire",
    }
]

const listsItem = [
    "3 BHK / 3+1 BHK / 4+1 BHK & Penthouse / Duplex",
]

const Banner = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        lazyLoad: "progressive",
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    };

    return(
        <div className="banner_slider_section">
            <Slider {...settings}>
                {slides.map((item,i) => (
                    <div className="banner_slider_item" key={i}>
                        <img src={item.image} alt={item.imageAlt} className="banner_bg_image" />
                        <div className="banner_context_form_flex">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <div className="banner_sliders_flex">
                                            <div className="banner_slider_text_block">
                                                <div className="banner_slider_text_bg">
                                                    {activeSlide === i ? 
                                                        <h1 className="banner_slider_heading">{item.title}</h1>
                                                    :
                                                        <h2 className="banner_slider_heading">{item.title}</h2>
                                                    }
                                                    
                                                    <h2 className="banner_slider_subtext">{item.text}</h2>
                                                    <p className="banner_slider_red_text">{item.subtext}</p>
                                                    <div className="banner_slider_icons_lists">
                                                        {listsItem.map((list,index) => (
                                                            <div className="banner_slider_lists_item" key={index}>
                                                                <p className="banner_slider_lists_text">{list}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="banner_small_image">
                                                <img src={item.smallImg} alt={item.smallAlt} className="banner_small_img" />
                                            </div> */}
                                            
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Container>
                            
                            
                        </div>
                        <div className="banner_text_gradient"></div>
                    </div>
                ))}
            </Slider>
            <div className="right_fixed_sidebar">
                <div className="bottom_fixed_sidebar">
                    <div className="price_list_heading_block">
                    </div>
                    <p className="price_list_heading">Discover Premium Living at Ananta Aspire</p>
                    <p className="price_list_subtext">Enquire Now for Exclusive Prices, Smart-Home Features & Limited-Time Offers.</p>
                    <EnquireForm formId={"sideFixed"} title="Ultra-Luxurious 3, 3+1, and 4+1 BHK Flats & Penthouses/Duplexes | Starting at ₹ 1.5 Cr*" button="Download Price List" />
                    <div className="py-2 form-row we_get_row">
                        <p className='form_label'>What You Get</p>
                        <div className='we_get_div_grid'>
                            {weGetOptions.map((item,i) => (
                                <div className='we_get_div_item' key={i}>
                                    <img src={item.icon} alt={item.text} className='we_get_icon' />
                                    <p className='we_get_text'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner