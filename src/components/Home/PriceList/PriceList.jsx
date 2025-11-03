import "./PriceList.css";
import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useFormContext } from "../../Layout/FormContext";

const PriceList = () => {

    const { openPriceForm } = useFormContext();

    return (
        <>
            <div className="floor_plans_section price_list_section" id="pricelist">
                <Container>
                    <Row>
                        <Col>
                            <Tab.Container id="floor_plans_tabs" defaultActiveKey="3BHK">
                                <div className="heading_flex">
                                    <h2 className="main_heading">Price List</h2>
                                
                                    <Nav variant="pills" className="flex-row floor_plans_nav">
                                        <Nav.Item>
                                            <Nav.Link eventKey="3BHK">3 BHK Apartments</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3+1BHK">3+1 BHK Apartments</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="4+1BHK">4+1 BHK Apartments</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="penthouse">Penthouse / Duplex</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>

                                <Tab.Content>
                                    <Tab.Pane eventKey="3BHK">
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <p className="floor_text_content">Super Area - 1843.00 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 1248.00 sq.ft.</p>
                                                <p className="floor_text_content">Carpet Area - 1064.00 sq.ft.</p>
                                                <p className="floor_text_content">No. of Parking-2</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <p className="floor_right_text">Keep for the Latest Price List & Deals!</p>
                                                <p className="floor_right_blur_text">₹ 1.5 Cr*</p>
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                                    Enquire Now
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* 3+1BHK */}
                                    <Tab.Pane eventKey="3+1BHK">
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <p className="floor_text_content">Super Area - 2945.45 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 2175.95 sq.ft.</p>
                                                <p className="floor_text_content">Carpet Area - 1868.30 sq.ft.</p>
                                                <p className="floor_text_content">No. of Parking-2</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <p className="floor_right_text">Keep for the Latest Price List & Deals!</p>
                                                <p className="floor_right_blur_text">₹ 1.5 Cr*</p>
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                                    Enquire Now
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* 4+1BHK */}
                                    <Tab.Pane eventKey="4+1BHK">
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <p className="floor_text_content">Super Area - 2900 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 2120 sq.ft.</p>
                                                <p className="floor_text_content">Carpet Area - 1861 sq.ft.</p>
                                                <p className="floor_text_content">No. of Parking-2</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <p className="floor_right_text">Keep for the Latest Price List & Deals!</p>
                                                <p className="floor_right_blur_text">₹ 1.5 Cr*</p>
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                                    Enquire Now
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* Pent House */}
                                    <Tab.Pane eventKey="penthouse">
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <p className="floor_text_content blur">Super Area - 1843.00 sq.ft.</p>
                                                <p className="floor_text_content blur">Covered Area - 1248.00 sq.ft.</p>
                                                <p className="floor_text_content blur">Carpet Area - 1064.00 sq.ft.</p>
                                                <p className="floor_text_content blur">No. of Parking-2</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <p className="floor_right_text">Keep for the Latest Price List & Deals!</p>
                                                <p className="floor_right_blur_text">₹ 1.5 Cr*</p>
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Request Exclusive Access to Project Details", "Our Team Will Share Accurate Details on Pricing, Plans & Possession", "Send Request", "request")}>
                                                    Send Request
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            
        </>
    )
}

export default PriceList