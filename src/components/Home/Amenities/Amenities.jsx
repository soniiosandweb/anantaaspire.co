import "./Amenities.css";
import { Col, Container, Row } from "react-bootstrap";

const club = `${process.env.REACT_APP_API_URL}/assests/images/amenities/night-club.webp`;
const pool = `${process.env.REACT_APP_API_URL}/assests/images/amenities/pool.webp`;
const bowling = `${process.env.REACT_APP_API_URL}/assests/images/amenities/bowling.webp`;
const playground = `${process.env.REACT_APP_API_URL}/assests/images/amenities/playground.webp`;
const treadmill = `${process.env.REACT_APP_API_URL}/assests/images/amenities/treadmill.webp`;
const yoga = `${process.env.REACT_APP_API_URL}/assests/images/amenities/yoga.webp`;
const homeSecurity = `${process.env.REACT_APP_API_URL}/assests/images/amenities/home-security.webp`;
const wifiRouter = `${process.env.REACT_APP_API_URL}/assests/images/amenities/wifi-router.webp`;
const electricGenerator = `${process.env.REACT_APP_API_URL}/assests/images/amenities/electric-generator.webp`;
const cctv = `${process.env.REACT_APP_API_URL}/assests/images/amenities/cctv.webp`;
const gate = `${process.env.REACT_APP_API_URL}/assests/images/amenities/gate.webp`;
const carParking = `${process.env.REACT_APP_API_URL}/assests/images/amenities/car-parking.webp`;
const measuring = `${process.env.REACT_APP_API_URL}/assests/images/amenities/measuring.webp`;
const notes = `${process.env.REACT_APP_API_URL}/assests/images/amenities/notes.webp`;
const pitch = `${process.env.REACT_APP_API_URL}/assests/images/amenities/pitch.webp`;
const chargingBuilding = `${process.env.REACT_APP_API_URL}/assests/images/amenities/charging-building.webp`;
const cyberSecurity = `${process.env.REACT_APP_API_URL}/assests/images/amenities/cyber-security.webp`;
const tableTennis = `${process.env.REACT_APP_API_URL}/assests/images/amenities/table-tennis.webp`;
const iceSkating = `${process.env.REACT_APP_API_URL}/assests/images/amenities/ice-skating.webp`;
const massage = `${process.env.REACT_APP_API_URL}/assests/images/amenities/massage.webp`;
const security = `${process.env.REACT_APP_API_URL}/assests/images/amenities/security.webp`;
const cup = `${process.env.REACT_APP_API_URL}/assests/images/amenities/cup.webp`;
const earthquake = `${process.env.REACT_APP_API_URL}/assests/images/amenities/earthquake.webp`;

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