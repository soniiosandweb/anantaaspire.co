import { Col, Container, Row } from "react-bootstrap";
import "./NewlyLaunched.css";
import launchedImg from "../../../assests/images/launched_group.png";
// import { Link } from "react-router-dom";
// import phoneIcon from "../../../assests/images/phone-call.png";
import eyes from "../../../assests/images/eyes.png";

const NewlyLaunched = () => {
    return (
        <div className="newly_launched_section">
            <img src={launchedImg} alt="Discover Our Newly Launched Property" className="newly_launched_image" />
            <Container>
                <Row>
                    <Col>
                        <div className="newly_launched_flex">
                            <div className="newly_launched_left_col">
                                {/* <div className="rera_flex">
                                    <p className="rera_text">PBRERA- Yet to be announced</p>
                                    <p className="rera_text">
                                        <Link to={"tel:+919609600074"} className="header_call">
                                            <img src={phoneIcon} alt="Phone" className="phone_icon" />
                                            +91 9609600074
                                        </Link>
                                    </p>
                                </div> */}
                            </div>
                            <div className="newly_launched_right_col padding-top padding-bottom">
                                <h2 className="main_heading">Discover Our Newly Launched Property</h2>
                                <h3 className="unveiling_sub_heading">Experience the pinnacle of luxury living with <span style={{ color: "#FF8C27"}}>Ananta</span>, located in the heart of Zirakpur</h3>

                                <div className="newly_launched_right_bottom">
                                    <p className="bottom_right_launched_text bold">A Rare Investment Opportunity Awaits</p>
                                    <p className="bottom_right_launched_text">Register now to stay informed and invest in elegance before it's unveiled.</p>
                                </div>
                                <img src={eyes} alt="Eyes" className="newly_launched_eyes" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewlyLaunched