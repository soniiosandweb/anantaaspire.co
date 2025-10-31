import { useLocation } from "react-router-dom";
import MetaData from '../Layout/MetaData.jsx'
import Connectivity from "../Home/Connectivity/Connectivity.jsx";
const ConnectivityPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Strategic Location & Connectivity - Ananta Aspire"}
                description={"Benefit from Ananta Aspire's strategic location, offering excellent connectivity to the city’s top landmarks, commercial zones, and recreational facilities. A perfect address for balanced living."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <div className="pt-2">
                <Connectivity />
            </div>
        </>
        
    )
}

export default ConnectivityPage