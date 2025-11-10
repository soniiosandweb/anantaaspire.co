import "./AboutUs.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../../assests/images/about/about-us.jpg";
import aboutBg from "../../../assests/images/about/about-bg.jpg";
import { useFormContext } from "../../Layout/FormContext";
import road from "../../../assests/images/about/road.png";
import poker from "../../../assests/images/about/poker.png";
import gate from "../../../assests/images/about/gate.png";
import light from "../../../assests/images/about/smart-light.png";
import pool from "../../../assests/images/about/swimming-pool.png";
import park from "../../../assests/images/about/park.png";

const aboutLists = [
    {
        img: road,
        title: "Prime Location with Excellent Connectivity"
    },
    {
        img: poker,
        title: "Ultra-Modern Clubhouse & Wellness Center"
    },
    {
        img: gate,
        title: "Gated Community with 24x7 Security"
    },
    {
        img: light,
        title: "Smart Home-Enabled Apartments"
    },
    {
        img: pool,
        title: "Infinity Pool & Rooftop Lounge"
    },
    {
        img: park,
        title: "Landscaped Gardens & Jogging Tracks"
    }
]

const AboutUs = () => {

    const { openPriceForm } = useFormContext();

    return (
        <div className="about_us_section padding-top padding-bottom" id="aboutus">
            <img src={aboutBg} alt="Smart living at Ananta Aspire with modern amenities and intelligent home features for a comfortable lifestyle." className="about_us_section_bg" />
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">About the Project</h2>
                        <p className="about_sub_text">A Vision of Luxury, Meticulously Crafted for the Modern Elite Who Desire Nothing Less Than Perfection.</p>
                        
                        <div className="about_us_flex_div">
                            <div className="about_us_left">
                                <p className="paragraph pb-5">Experience a lifestyle that blends sophistication with serenity. This upcoming residential marvel on the Patiala-Chandigarh Highway is designed to elevate everyday living — from grand entrances to lush green landscapes, from smart interiors to exclusive leisure zones.</p>
                                <p className="paragraph">It's not just a home.</p>
                                <p className="paragraph">It's your statement of success.</p>
                                <Button className="request_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>Enquire Now</Button>
                            </div>
                            <div className="about_us_right_content">
                                <img src={aboutImg} alt="Relaxing pool area at AnantaAspire Zirakpur luxury flats" className="about_img" />
                            </div>
                        </div>
                        <div className="key_heightlight padding-top" id="keyhighlight">
                            <h2 className="main_heading">Key Highlights</h2>
                            <div className="about_lists_top">
                                {aboutLists.map((item, i) => (
                                    <div className="about_lists_item" key={i}>
                                        <img src={item.img} alt={item.title} className="about_lists_item_img" />
                                        <p className="about_lists_item_title">{item.title}</p>
                                    </div>
                                    
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs