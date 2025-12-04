import "./FloorPlan.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useState } from "react";
import { useFormContext } from "../../Layout/FormContext";

const floor1 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/4bhk+1.webp`;
const floor2 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/3bhk+1.webp`;
const floor3 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/3bhk.webp`;
const floor4 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/pent-house.webp`;

const FloorPlan = () => {

    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    const { openPriceForm } = useFormContext();

    return (
        <>
            <div className="floor_plans_section padding-top padding-bottom" id="floorplan">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="main_heading">Floor Plan</h2>

                            <div className="floor_plan_grid">
                                <div className="floor_plan_grid_item">
                                    <div className="floor_blans_image">
                                        <img src={floor3} alt="Detailed 3 BHK floor plan of Ananta Aspire luxury flats in Zirakpur" className="floor_plan_img" onClick={() => setOpenPlan3(true)} />
                                            <Lightbox
                                                open={openPlan3}
                                                close={() => setOpenPlan3(false)}
                                                slides={[
                                                    { src: floor3 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                    </div>
                                
                                    <div className="floor_plan_btn_block">
                                        <p className="floor_plan_btn_heading">3 BHK</p>
                                        <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                            Enquire Now
                                        </Button>
                                    </div>
                                </div>
                                
                                {/* 3+1 */}
                                <div className="floor_plan_grid_item">
                                    <div className="floor_blans_image">
                                        <img src={floor2} alt="Spacious 3+1 BHK layout design at Ananta Aspire flats in Zirakpur" className="floor_plan_img" onClick={() => setOpenPlan2(true)} />
                                        <Lightbox
                                            open={openPlan2}
                                            close={() => setOpenPlan2(false)}
                                            slides={[
                                                    { src: floor2 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                        />
                                    </div>
                                
                                    <div className="floor_plan_btn_block">
                                        <p className="floor_plan_btn_heading">3+1 BHK</p>
                                        <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                            Enquire Now
                                        </Button>
                                    </div>
                                </div>

                                {/* 4+1 */}
                                <div className="floor_plan_grid_item">
                                    <div className="floor_blans_image">
                                        <img src={floor1} alt="4+1 BHK floor plan of Ananta Aspire luxury flats in Zirakpur with study and attendant room layout" className="floor_plan_img" onClick={() => setOpenPlan1(true)} />
                                        <Lightbox
                                            open={openPlan1}
                                            close={() => setOpenPlan1(false)}
                                            slides={[
                                                { src: floor1 }
                                            ]}
                                            plugins={[Fullscreen, Zoom]}
                                            carousel={{ finite: 1 }}
                                            render={{
                                                buttonPrev: undefined,
                                                buttonNext: undefined,
                                            }}
                                            className="single-lightbox"
                                        />
                                    </div>
                                
                                    <div className="floor_plan_btn_block">
                                        <p className="floor_plan_btn_heading">4+1 BHK</p>
                                        <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                            Enquire Now
                                        </Button>
                                    </div>
                                </div>

                                {/* Penthouse */}
                                <div className="floor_plan_grid_item">
                                    <div className="floor_blans_image">
                                        <img src={floor4} alt="High-end penthouse duplex with premium design at Ananta Aspire luxury flats in Zirakpur" className="floor_plan_img" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")} />
                                    </div>
                                
                                    <div className="floor_plan_btn_block">
                                        <p className="floor_plan_btn_heading">Penthouse/ Duplex</p>
                                        <Button className="floor_plans_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Enquire Now", "explore")}>
                                            Enquire Now
                                        </Button>
                                    </div>
                                </div>

                            </div>  
                                       
                        </Col>
                    </Row>
                </Container>
            </div>

            
        </>
    )
}

export default FloorPlan