import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "./CustomDotGroup";

import img1 from '../../images/birthday/bday1.jpg'
import img2 from '../../images/birthday/bday4.jpg'
import img3 from '../../images/birthday/bday5.jpg'
import img4 from '../../images/birthday/bday3.jpg'
import img5 from '../../images/birthday/bday2.jpg'

const BirthdayImages = () => (
  <CarouselProvider
    naturalSlideWidth={2}
    naturalSlideHeight={1}
    totalSlides={5}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src={img1}/>
      </Slide>
      <Slide tag="a" index={1}>
        <Image src={img2} />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src={img3} />
      </Slide>
      <Slide tag="a" index={3}>
        <Image src={img4} />
      </Slide>
      <Slide tag="a" index={4}>
        <Image src={img5} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={5} />
  </CarouselProvider>
);

export default BirthdayImages;
