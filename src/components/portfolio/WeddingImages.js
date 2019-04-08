import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "./CustomDotGroup";

import img from '../../images/header2.jpg'
import sample_header from '../../images/header1.jpg'

const WeddingImages = () => (
  <CarouselProvider
    naturalSlideWidth={2}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src={img}/>
      </Slide>
      <Slide tag="a" index={1}>
        <Image src={sample_header} />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src={img} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default WeddingImages;
