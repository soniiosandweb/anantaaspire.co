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
            title: "Gallery showcasing modern exteriors and elegant design at Ananta Aspire, highlighting luxury flats in Zirakpur.",
            rows: 1,
            cols: 1,
        },
        {
            src: gallery2,
            title: "Spacious parking facility at Ananta Aspire with organized layout and modern design, highlighting flats for sale in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery3,
            title: "Residents walking along the poolside at Ananta Aspire, enjoying landscaped surroundings and serene outdoor amenities.",
            rows: 3,
            cols: 2,
        },
        {
            src: gallery4,
            title: "Children’s swing and play area at Ananta Aspire, highlighting safe and fun amenities in Zirakpur 3BHK flats.",
        },
        {
            src: gallery5,
            title: "People sitting near trees and relaxing at Ananta Aspire, enjoying the landscaped outdoor spaces and serene surroundings.",
            rows: 3,
            cols: 2,
        },
        {
            src: gallery6,
            title: "Modern office space at Ananta Aspire with contemporary design and professional ambiance, part of new residential projects in Zirakpur.",
            cols: 1,
        },
        {
            src: gallery7,
            title: "Shaded seating area in landscaped park at Ananta Aspire, providing relaxing spots for residents, highlighting Ananta Aspire flats in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery8,
            title: "Swimming pool area at Ananta Aspire with modern design and relaxing ambiance, part of 3 BHK luxury flats in Zirakpur.",  
        },
        {
            src: gallery9,
            title: "Night view of Ananta Aspire flats in Zirakpur with a girl standing near a flowing fountain, showcasing elegant lighting and ambiance, highlighting Ananta Aspire flats for sale.",
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