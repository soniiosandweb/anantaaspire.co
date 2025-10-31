import "./Amenities.css";
import { Col, Container, Row } from 'react-bootstrap';
import club from "../../../assests/images/amenities/night-club.png";
import pool from "../../../assests/images/amenities/pool.png";
import bowling from "../../../assests/images/amenities/bowling.png";
import playground from "../../../assests/images/amenities/playground.png";
import treadmill from "../../../assests/images/amenities/treadmill.png";
import yoga from "../../../assests/images/amenities/yoga.png";
import homeSecurity from "../../../assests/images/amenities/home-security.png";
import wifiRouter from "../../../assests/images/amenities/wifi-router.png";
import electricGenerator from "../../../assests/images/amenities/electric-generator.png";
import cctv from "../../../assests/images/amenities/cctv.png";
import gate from "../../../assests/images/amenities/gate.png";
import carParking from "../../../assests/images/amenities/car-parking.png";
import measuring from "../../../assests/images/amenities/measuring.png";
import notes from "../../../assests/images/amenities/notes.png";
import pitch from "../../../assests/images/amenities/pitch.png";
import chargingBuilding from "../../../assests/images/amenities/charging-building.png";
import cyberSecurity from "../../../assests/images/amenities/cyber-security.png";
import tableTennis from "../../../assests/images/amenities/table-tennis.png";
import iceSkating from "../../../assests/images/amenities/ice-skating.png";
import massage from "../../../assests/images/amenities/massage.png";
import security from "../../../assests/images/amenities/security.png";
import cup from "../../../assests/images/amenities/cup.png";
import earthquake from "../../../assests/images/amenities/earthquake.png";

const Amenities = () => {

    const amenitiesItems = [
        {
            title: "Grand Clubhouse",
            image: club,
        },
        {
            title: "Swimming Pool & Sun Deck",
            image: pool,
        },
        {
            title: "Indoor Games & Entertainment Zone",
            image: bowling,
        },
        {
            title: "Kids’ Play Area",
            image: playground,
        },
        {
            title: "Fully Equipped Gymnasium",
            image: treadmill,
        },
        {
            title: "Yoga & Meditation Studio",
            image: yoga,
        },
        {
            title: "Smart Home Automation",
            image: homeSecurity,
        },
        {
            title: "High-Speed Wi-Fi Connectivity",
            image: wifiRouter,
        },
        {
            title: "24x7 Power Backup & Water Supply",
            image: electricGenerator,
        },
        {
            title: "24x7 CCTV Surveillance",
            image: cctv,
        },
        {
            title: "Gated Community with Access Control",
            image: gate,
        },
        {
            title: "Dedicated Parking for Residents & Visitors",
            image: carParking,
        },
        {
            title: "MIVAN Construction",
            image: measuring,
        },
        {
            title: "Swimming Pool & Sun Deck",
            image: pool,
        },
        {
            title: "Dual Core Project",
            image: notes,
        },
        {
            title: "Cricket Pitch",
            image: pitch,
        },
        {
            title: "EV Charging Point",
            image: chargingBuilding,
        },
        {
            title: "3 Tier Security System",
            image: cyberSecurity,
        },
        {
            title: "Table tennis room",
            image: tableTennis,
        },
        {
            title: "Skating rink",
            image: iceSkating,
        },
        {
            title: "Spa/ Salon",
            image: massage,
        },
        {
            title: "Fire Fighting System",
            image: security,
        },
        {
            title: "Coffee Shop",
            image: cup,
        },
        {
            title: "Earthquake Resistant Structure",
            image: earthquake,
        }
    ]

    return(
        <section className="amenities_section padding-top padding-bottom" id="amenities">
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Amenities</h2>
                        <div className='amenities_grid padding-top'>
                            {amenitiesItems.map((item,i) => (
                                <div className='amenities_item aminities-group' key={i}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='amenities_icon animate-wobble'
                                    />
                                    <p className='capitalize amenities_title mb-0'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default Amenities