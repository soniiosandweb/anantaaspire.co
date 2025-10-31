import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import Amenities from "./Amenities/Amenities"
import Banner from "./banner/Banner"
import Connectivity from "./Connectivity/Connectivity"
import ContactUs from "./ContactUs/ContactUs"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import PriceList from "./PriceList/PriceList"
import UnveilingSoon from "./UnveilingSoon/UnveilingSoon"

const Home = () => {

    const localSchema = {
    }

    return(
        <>
            <MetaData 
                title={"Ananta Aspire | Buy 3BHK & 4BHK Luxury Apartments"} 
                description={"Discover luxury flats in Zirakpur at Ananta Aspire – 3BHK, 3+1 & 4BHK luxury apartments in Zirakpur. New residential projects with world-class amenities, rooftop pool, sports arena & EV charging. Flats for sale in Zirakpur near Chandigarh and Mohali."} 
                keywords={"The Ananta Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Ananta Aspire, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
            />

            <Banner />
            <UnveilingSoon />
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