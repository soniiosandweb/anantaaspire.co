import { useFormContext } from "../../Layout/FormContext";
import "./UnveilingSoon.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const UnveilingSoon = () => {

    const { openPriceForm } = useFormContext();

    return(
        <div className="unveiling_soon_section padding-top padding-bottom">
            <Container>
                <Row>
                    <Col>
                        <div className="unveiling_soon_flex">
                            <div className="unveiling_soon_cols">
                                <h2 className="main_heading">Teaser with Mystery</h2>
                                <h3 className="unveiling_sub_heading">Something Extraordinary Is Taking Shape in Zirakpur.</h3>
                                <p className="unveiling_text">A masterpiece of luxury living — soon to be unveiled.</p>
                            </div>
                            <div className="unveiling_soon_cols">
                                <div className="unveiling_btns_block">
                                    <Button className="request_access_btn" onClick={() => openPriceForm("Request Exclusive Access to Project Details", "Our Team Will Share Accurate Details on Pricing, Plans & Possession", "Send Request", "request")}>
                                        Register for Early Access
                                    </Button>
                                    <Button className="get_brochure_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                        Get Brochure / Price Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UnveilingSoon