import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerTimeline = (container) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: container,
      markers: false,
      start: "top 50%",
      end: "bottom top",
      toggleActions: "restart complete none reset",
    },
  });
};

const Timeline = () => {
  return gsap.timeline();
};

const DropDown = (timeline, element) => {
  timeline.from(element, {
    duration: 1,
    y: "-50",
    opacity: 0,
    ease: "easeIn",
  });
};

const SwipeInFromLeft = (timeline, element) => {
  timeline.from(element, {
    duration: 1,
    x: "-100",
    opacity: 0,
    ease: "easeIn",
  });
};
const SwipeInFromRight = (timeline, element) => {
  timeline.from(element, {
    duration: 1,
    x: "100",
    opacity: 0,
    ease: "easeIn",
  });
};

export {
  Timeline,
  ScrollTriggerTimeline,
  DropDown,
  SwipeInFromLeft,
  SwipeInFromRight,
};
