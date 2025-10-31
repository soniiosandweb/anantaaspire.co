import { useLocation } from "react-router-dom";
import Amenity from "../Home/Amenities/Amenities.jsx"
import MetaData from '../Layout/MetaData.jsx'

const AmenityPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Comprehensive Amenities at Ananta Aspire"}
                description={" Discover comprehensive amenities at Ananta Aspire. Our project offers everything you need for a comfortable and fulfilling lifestyle, including sports, leisure, and relaxation options.  "}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <Amenity />
        </>
       
    )
}

export default AmenityPage