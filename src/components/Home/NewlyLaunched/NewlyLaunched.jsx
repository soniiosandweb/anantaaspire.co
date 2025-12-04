import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./NewlyLaunched.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const launchedImg = `${process.env.REACT_APP_API_URL}/assests/images/launched_group_blank.webp`;
const phoneIcon = `${process.env.REACT_APP_API_URL}/assests/images/phone-call.png`;
const eyes = `${process.env.REACT_APP_API_URL}/assests/images/eyes.png`;
const sendIcon = `${process.env.REACT_APP_API_URL}/assests/images/send_icon.png`;
const anataLogo = `${process.env.REACT_APP_API_URL}/assests/images/ananta_logo_launched.png`;

const NewlyLaunched = () => {

    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const validateInput = (value) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const phoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6-9]\d{9}$/;

        if (!value) {
            setError("Please enter Email ID / Contact Number");
        } else if (emailRegex.test(value)) {
            setError("");
        } else if (phoneRegex.test(value)) {
            setError("");
        } else {
            setError("Please enter valid Email ID / Contact Number");
        }
    };

    // handle change
    const handleChange = (e) => {
        const value = e.target.value.trim();
        setEmailAddress(value);
        validateInput(value);
    };


    // Handle Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        validateInput(emailAddress);

        if (!error && emailAddress) {

            setError("");

            axios({
                method: "post",
                url: "https://anantaaspire.co/api/email-phone-api.php",
                data: JSON.stringify({
                    email: emailAddress
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    resetForm();
                    setSuccess("Submitted Successfully! we’ll Contact you Shortly ");
                    setTimeout(() => {
                        setSuccess("");
                    }, 10000);
                } else {
                    setError('Some error occured!');
                    resetForm();
                    setTimeout(() => {
                        setSuccess("");
                    }, 10000);
                }
            })
            .catch(function (response) {
                console.log(response);
                setError(response?.message ? response.message : "Some error occured");
                resetForm();
                setTimeout(() => {
                    setSuccess("");
                }, 10000);
            });
        }
    }

    // Handle Reset Form
    const resetForm = () => {
        setEmailAddress("");
    }

    return (
        <div className="newly_launched_section">
            <div className="newly_launched_text_img">
                <img src={launchedImg} alt="Ananta Aspire team celebrating the project launch of luxury flats in Zirakpur with joy and unity" className="newly_launched_image" />
                <div className="newly_launched_content_block">
                    <div className="rera_phone_flex">
                        <p className="rera_content">PBRERA- Yet to be announced</p>
                        <p className="phone_content">
                            <Link to="tel:+919609600074"><img src={phoneIcon} alt="Phone" /> +91 9609600074</Link>
                        </p>
                    </div>
                    <div className="launched_image_content">
                        <img src={anataLogo} alt="Ananta" className="anata_logo_content" />
                        <p className="lauching_soon_heading">Launching Soon</p>
                        <p className="launching_soon_subheading">The Epitome of Luxury Is About to Rise</p>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="newly_launched_flex">
                            <div className="newly_launched_left_col"></div>

                            <div className="newly_launched_right_col">
                                <h2 className="main_heading">Discover Our Newly Launched Property</h2>
                                <h3 className="unveiling_sub_heading">Experience the pinnacle of luxury living with <span style={{ color: "#FF8C27"}}>Ananta Aspire</span> Zirakpur, located in the heart of Zirakpur</h3>

                                <div className="newly_launched_right_bottom">
                                    <div className="newly_launched_bottom_left">
                                        <p className="bottom_right_launched_text bold">A Rare Investment Opportunity Awaits</p>
                                        <p className="bottom_right_launched_text">Register now to stay informed and invest in elegance before it's unveiled.</p>
                                    </div>
                                    <div className="newly_launched_bottom_right">
                                        <div className="newly_launched_form">
                                            <Form onSubmit={handleSubmit} method="post">
                                                <InputGroup className="newly_launched_input">
                                                    <Form.Control
                                                        placeholder="Email ID / Contact Number"
                                                        aria-label="Email ID / Contact Number"
                                                        aria-describedby="email_contact"
                                                        name="email_phone"
                                                        value={emailAddress}
                                                        onChange={handleChange}
                                                    />
                                                    <Button id="email_contact_btn" className="email_contact_btn" type="submit">
                                                        <img src={sendIcon} alt="Send" className="send_button_icon" />
                                                    </Button>
                                                </InputGroup>
                                                <p className={`form_validtaion ${success ? 'success' : error ? 'error' : 'hide'}`}>
                                                    {success ? success : error ? error : "Please Fill Out this Field"}
                                                </p>
                                            </Form>
                                        </div>
                                    </div>
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