import "./ContactUs.css";
import { Col, Container, Row } from "react-bootstrap"
import EnquireForm from "../../Layout/EnquireForm/EnquireForm"
import contactImg from "../../../assests/images/contact-img.jpg";

const ContactUs = () => {
    return (
        <div className="contact_us_section padding-top padding-bottom" id="contact">
            <img src={contactImg} alt="Well-designed library room inside AnantaAspire flats for sale in Zirakpur" className="contact_bg_image" />
            <Container>
                <Row>
                    <Col>
                        <div className="contact_us_flex">
                            <div className="contact_us_left_col">
                            </div>
                            <div className="contact_us_right_col">
                                <div className="contact_section_form">
                                    <h2 className="main_heading">Get In Touch</h2>
                                    <p className="contact_text">Register Your Interest & Be Among the First to Know!</p>
                                    <EnquireForm title="Connect With Our Team" formId={"contact"} button={"Submit Enquiry"} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs