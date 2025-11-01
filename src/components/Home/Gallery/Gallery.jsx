import { Col, Container, Row } from "react-bootstrap";
import "./Gallery.css";
import { useState } from "react";
import gallery1 from "../../../assests/images/gallery/gallery1.jpg";
import gallery2 from "../../../assests/images/gallery/gallery2.jpg";
import gallery3 from "../../../assests/images/gallery/gallery3.png";
import gallery4 from "../../../assests/images/gallery/gallery4.jpg";
import gallery5 from "../../../assests/images/gallery/gallery5.jpg";
import gallery6 from "../../../assests/images/gallery/gallery6.jpg";
import gallery7 from "../../../assests/images/gallery/gallery7.jpg";
import gallery8 from "../../../assests/images/gallery/gallery8.jpg";
import gallery9 from "../../../assests/images/gallery/gallery9.jpg";
import { ImageList, ImageListItem } from "@mui/material";
import Lightbox from 'yet-another-react-lightbox';
import { Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import galleryBg from "../../../assests/images/gallery/gallery_bg.jpg";

const Gallery = () => {

    const [index, setIndex] = useState(-1);
    
    const images = [
        {
            src: gallery1,
            title: "Luxury kitchen at AnantaAspire flats in Zirakpur",
            rows: 1,
            cols: 1,
        },
        {
            src: gallery2,
            title: "Modern sofa set with chandelier in AnantaAspire flats for sale in Zirakpur",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery3,
            title: "Modern bedroom interior at AnantaAspire, one of the new residential projects in Zirakpur",
            rows: 3,
            cols: 2,
        },
        {
            src: gallery4,
            title: "Modern living room with sofa set in AnantaAspire 3BHK flats Zirakpur",
        },
        {
            src: gallery5,
            title: "High-rise building view of AnantaAspire 4BHK luxury apartments in Zirakpur",
            rows: 3,
            cols: 2,
        },
        {
            src: gallery6,
            title: "Modern dining room at AnantaAspire Zirakpur flats 3BHK with elegant interiors and premium design",
            cols: 1,
        },
        {
            src: gallery7,
            title: "Safe and modern children’s play area at AnantaAspire 3BHK luxury flats in Zirakpur",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery8,
            title: "High-speed WiFi connectivity facility at AnantaAspire flats in Zirakpur",  
        },
        {
            src: gallery9,
            title: "Elegant interior view of AnantaAspire luxury flats in Zirakpur with premium furnishings",
        }
    ]

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return(
        <section className="gallery_section padding-top" id="gallery">
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Gallery</h2>
                    </Col>
                </Row>
            </Container>
            <div className="gallery_images_block padding-top">
                <img src={galleryBg} alt="Gallery" className="gallery_bg_image" />
                <Container>
                    <Row>
                        <Col>
                                <ImageList
                                    variant="quilted"
                                    cols={5}
                                    gap={8}
                                    rowHeight={160}
                                    className='gallery-images-list'
                                >
                                    {images.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={index}
                                        slides={images}
                                        open={index >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Gallery