import "./Connectivity.css";
import { Col, Container, Row } from 'react-bootstrap';
const school = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/school.webp`;
const hospital = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/hospital.webp`;
const mall = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/mall.webp`;
const runway = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/runway.webp`;
const train = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/train.webp`;
const road = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/road.webp`;
const bus = `${process.env.REACT_APP_API_URL}/assests/images/connectivity/bus.webp`;

const connectivityItems = [
    {
        title: "Ryan International School, Zirakpur – 10 mins",
        image: school,
    },
    {
        title: "Delhi Public School (DPS), Zirakpur – 12 mins",
        image: school,
    },
    {
        title: "St. Xavier’s High School, Dera Bassi – 8 mins",
        image: school,
    },
    {
        title: "Alchemist Hospital, Panchkula – 20 mins",
        image: hospital,
    },
    {
        title: "Max Super Specialty Hospital, Mohali – 25 mins",
        image: hospital,
    },
    {
        title: "Ayush Hospital, Dera Bassi – 5 mins",
        image: hospital,
    },
    {
        title: "Elante Mall, Chandigarh – 25 mins",
        image: mall,
    },
    {
        title: "Chandigarh International Airport – 20 mins",
        image: runway,
    },
    {
        title: "Patiala Airport – 30 mins",
        image: runway,
    },
    {
        title: "Chandigarh Railway Station – 20 mins",
        image: train,
    },
    {
        title: "Direct Access to NH-7 & NH-152",
        image: road,
    },
    {
        title: "ISBT Chandigarh (Sector 43) – 25 mins",
        image: bus,
    }
]

const Connectivity = () => {
    return(
        <section className="amenities_section connectivity_section padding-bottom" id="connectivity">
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading"> Seamless Connectivity</h2>
                        <h3 className="connectivity_subheading">Strategically located on the Patiala-Chandigarh Highway</h3>
                        <p className="connectivity_content">This project offers exceptional access to everything that defines modern living — business hubs, educational institutions, healthcare facilities, and entertainment zones — all just minutes away.</p>
                        <p className="connectivity_content">Enjoy the perfect blend of urban convenience and peaceful surroundings, making Ananta Aspire Zirakpur one of the most sought-after addresses in the region.</p>

                        <div className='amenities_grid padding-top'>
                            {connectivityItems.map((item,i) => (
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

export default Connectivity