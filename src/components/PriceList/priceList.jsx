import { useLocation } from "react-router-dom";
import MetaData from '../Layout/MetaData.jsx'
import PriceList from "../Home/PriceList/PriceList.jsx";

const PriceListPage = () => {

    const location = useLocation();
    
    return(
        <>

            <MetaData 
                title={"Tailored Price List for Premium Living - Ananta Aspire"}
                description={"Discover tailored floor plans at Ananta Aspire, offering the perfect blend of aesthetics and functionality. Find the layout that best fits your vision of a dream home."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <div className="padding-top padding-bottom">
                <PriceList />
            </div>
            
        </>
       
    )
}

export default PriceListPage