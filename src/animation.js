import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerTimeline = (container) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: container,
      markers: true,
      start: "top 70%",
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
    duration: 0.1,
    y: "-50",
    opacity: 0,
    ease: "easeIn",
    stagger: {
      each: 0.2,
    },
  });
};

const FadeUpEnter = (timeline, element) => {
  timeline.from(element, {
    duration: 0.3,
    y: "30",
    opacity: 0.01,
    ease: "easeIn",
    stagger: {
      each: 1,
      from: "edges",
    },
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
  FadeUpEnter,
  SwipeInFromLeft,
  SwipeInFromRight,
};
