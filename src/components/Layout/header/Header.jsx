import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { useFormContext } from "../FormContext";
import PriceDetailsForm from "../PriceDetailsForm/PriceDetailsForm";
import RequestDetailsForm from "../RequestDetailsForm/RequestDetailsForm";

const logo = `${process.env.REACT_APP_API_URL}/assests/images/logo-new.png`;
const phoneIcon = `${process.env.REACT_APP_API_URL}/assests/images/phone-call.webp`;
const menuIcon = `${process.env.REACT_APP_API_URL}/assests/images/menus.png`;
const whatsappIcon = `${process.env.REACT_APP_API_URL}/assests/images/whatsapp.webp`;

const Header = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");

  const [scrollClass, setScrollClass] = useState('scroll');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [locationPath, setLocationPath] = useState(false);

  const menuLists = [
    {
      title: "About",
      link: "#aboutus",
      id: "aboutus",
      redirect: "/aboutus",
    },
    {
      title: "Key Highlights",
      link: "#keyhighlight",
      id: "keyhighlight",
      redirect: "/keyhighlight",
    },
    {
      title: "Floor Plan",
      link: "#floorplan",
      id: "floorplan",
      redirect: "/floorplan",
    },
    {
      title: "Amenities",
      redirect: "/amenities",
      link: "#amenities",
      id: "amenities",
    },
    {
      title: "Connectivity",
      link: "#connectivity",
      redirect: "/connectivity",
      id: "connectivity",
    },
    {
      title: "Gallery",
      link: "#gallery",
      redirect: "/gallery",
      id: "gallery",
    },
    {
      title: "Contact",
      link: "#contact",
      redirect: "/contact",
      id: "contact",
    }
  ]
    
  useEffect(() => {
    const listenScrollEvent = () => {
      if (locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1])) {
        const newScrollClass = window.scrollY > 50 ? '' : 'scroll';
        setScrollClass(newScrollClass);
      } else {
        setScrollClass('scroll');
      }
    };

    window.addEventListener("scroll", listenScrollEvent);

    // eslint-disable-next-line
  },[locationValue]);

  const {
    openPriceForm,
    isPriceFormOpen,
    priceFormOpenedManually,
    priceFormAutoOpened,
  } = useFormContext();

  useEffect(() => {
    const checkAndAutoOpen = () => {
      if (
        window.innerWidth < 992 &&
        !isPriceFormOpen &&
        !priceFormOpenedManually &&
        !priceFormAutoOpened
      ) {
        openPriceForm(
          "Ananta Aspire Exclusive Price List!",
          "Complete Overview of Current Prices for All Units to Guide Your Property Investment",
          "Download Price List",
          "sideFixed",
          true // fromAuto
        );
      }
    };

    // Auto open after 5 seconds
    const timer = setTimeout(checkAndAutoOpen, 5000);

    // Auto open on resize below 992px
    window.addEventListener("resize", checkAndAutoOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkAndAutoOpen);
    };
  }, [isPriceFormOpen, priceFormOpenedManually, priceFormAutoOpened, openPriceForm]);

  useEffect(() => {
    const listenScrollEvent = () => {
      if (locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1])) {
        const newScrollClass = window.scrollY > 50 ? 'scrolledHeader' : 'scroll';
        setScrollClass(newScrollClass);
      } else {
        setScrollClass('scroll');
      }
    };
    
    
    window.addEventListener("scroll", listenScrollEvent);
    
    if (location.hash && location.hash.slice(1) !== locationPath) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setLocationPath(location.hash.slice(1))
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // console.log(location.pathname.split("/"))
    
    if(menuLists.some(item => item.id === location.pathname.split("/")[1]) && location.pathname.split("/")[1] !== locationPath){
      const path = location.pathname.split("/")[1];
      const element = document.getElementById(path);
    
      if (element) {
        setLocationPath(path)
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
            
      }
    }
    
    // eslint-disable-next-line
  }, [location, locationValue, locationPath]);

  // handle menu click
  const handleMenuClick = (e) => {
    e.preventDefault();
    setShow(false)

    const { id } = e.target.dataset;
    console.log(id,'click')
    const element = document.getElementById(id);
    if (element) {
      element.style.scrollMarginTop = '50px';
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }

  return(
    <>
      <div className={`main_header ${scrollClass} ${locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1]) ? "home_header" : ""}`}>
        <Navbar key={"lg"} expand={"lg"}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`header_offcanvas`} onClick={handleShow}>
              <img src={menuIcon} alt="menu" className="menu_icon" />
            </Navbar.Toggle>

            <Navbar.Brand href="/">
              <img src={logo} alt="Ananta Aspire Logo" className="logo_header" />
            </Navbar.Brand>
                        
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id={`header_offcanvas`}
              aria-labelledby={`header_label_offcanvas`}
              placement="end"
              className="header_offcanvas"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1">

                  {locationValue[1] === "" ?
                                    
                    menuLists.map((item, i) => (
                                            
                      <Link
                        to={item.redirect}
                        key={i}
                        onClick={(e) => handleMenuClick(e)}
                        smooth="true" 
                        data-id={item.id}
                        className="nav-link"
                      >
                        {item.title}
                      </Link>
                    ))
                  :
                    menuLists.map((item, i) => (
                      <Link
                        to={item.redirect}
                        key={i}
                        onClick={handleClose}
                        smooth="true" 
                        className="nav-link"
                      >
                        {item.title}
                      </Link>
                                            
                    ))
                                    
                  }
                </Nav>
                                
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="header_right">
              <div className="header_right_top">
                <Link to={"tel:+919609600074"} className="header_call blink">
                  <img src={phoneIcon} alt="Phone" className="phone_icon" />
                  +91 9609600074
                </Link>
                <Button className="header_request_btn" onClick={() => openPriceForm("Request Exclusive Access to Project Details", "Our Team Will Share Accurate Details on Pricing, Plans & Possession", "Send Request", "request")}>Request Details</Button>
              </div>
              <p className="header_rera_number">PBRERA-SAS79-PR0777</p>
            </div>

          </Container>
        </Navbar>
      </div>

        
      {/* Download Brochure Button */}
      <div className='sticky h-0 z-20' style={{ top: "50%" }}>
        <button tabIndex='-1' className="w-max absolute -rotate-90 download-broucher-btn" style={{ left: "-100px" }} onClick={() => openPriceForm("Schedule Your Exclusive Free Site Visit", "Experience Premium Living Firsthand at Ananta Aspire", "Schedule Visit", "schedule")}>Schedule a Free Site Visit</button>
      </div>

      <div className='sticky h-0 z-20' style={{ top: "90%" }}>
        <a href="https://wa.me/+919609600074" rel="noreferrer" target="_blank" className="whatsapp_link_text w-max absolute" style={{ right: "25px" }}>
          <img src={whatsappIcon} alt="Whatsapp" className="header_btns_float whatsapp" />
        </a>
      </div>

      {/* <div className="fixed_btns_header z-20">
        <img src={downloadIcon} alt="Download" className="header_btns_float download" onClick={handleOpen} />
        <a href="https://wa.me/+919609600074" rel="noreferrer" target="_blank">
          <img src={whatsappIcon} alt="Whatsapp" className="header_btns_float whatsapp" />
        </a>
      </div> */}

      <PriceDetailsForm />
      <RequestDetailsForm />

    </>
  )
}

export default Header