"use client";
import Carousel from "react-bootstrap/Carousel";
import styles from "./index.module.css";

function UncontrolledCarousel() {
  return (
    <div style={{ maxHeight: "500px" }}>
      <Carousel fade>
        <Carousel.Item className={styles.carouselItem}>
          <div className={styles.containerBanner1}>
            <img src="/banner-1.png" alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <div className={styles.containerBanner2}>
            <img src="/banner-2.png" alt="First slide" />
          </div>
          <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <div className={styles.containerBanner3}>
            <img src="/banner-3.png" alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledCarousel;
