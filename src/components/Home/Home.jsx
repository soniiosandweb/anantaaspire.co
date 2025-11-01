import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import Amenities from "./Amenities/Amenities"
import Banner from "./banner/Banner"
import Connectivity from "./Connectivity/Connectivity"
import ContactUs from "./ContactUs/ContactUs"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import NewlyLaunched from "./NewlyLaunched/NewlyLaunched"
import PriceList from "./PriceList/PriceList"
// import UnveilingSoon from "./UnveilingSoon/UnveilingSoon"

const Home = () => {

    const localSchema = {
    }

    return(
        <>
            <MetaData 
                title={"Ananta Aspire | Buy 3BHK & 4BHK Luxury Apartments in Zirakpur"} 
                description={"Discover premium flats for sale in Zirakpur at AnantaAspire. Explore luxury flats in Zirakpur with modern amenities. Visit AnantaAspire today!"} 
                keywords={"The Ananta Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Ananta Aspire, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
            />

            <Banner />
            {/* <UnveilingSoon /> */}
            <NewlyLaunched />
            <AboutUs />
            <FloorPlan />
            <PriceList />
            <Amenities />
            <Connectivity />
            <Gallery />
            <ContactUs />
        </>
    )
}

export default Home