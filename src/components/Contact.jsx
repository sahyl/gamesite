import React, { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Tilt } from "react-tilt";
import Button from "./Button";

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const ImageClipBox = ({ src, clipClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt options={defaultTiltOptions} style={{ transformStyle: "preserve-3d" }}>
      <div
        className={`${clipClass} ${isHovered ? "z-10" : "z-0"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt="" style={{ transform: "translateZ(20px)" }} />
      </div>
    </Tilt>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-visible sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-1 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 overflow-visible sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Zentry</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-0.9 md:text-[6rem] mix-blend-difference">
            <b>
              Let's build the
              <br /> new era of
              <br /> gaming together
            </b>
          </p>
          <Button
            title="Contact us"
            containerClass="mt-10 cursor-pointer flex items-center gap-2"
            rightIcon={<TiLocationArrow className="text-base" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

