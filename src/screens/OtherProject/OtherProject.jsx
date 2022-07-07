// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Custom Imports
import "./OtherProject.css";
import Project from "./components/Project/Project.jsx";
import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";

import otherProjectData from "../../assets/data/Projects.json";

const OtherProject = () => {
  const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.3);

  return (
    <section
      className={`OtherProject ${isVisible ? "active" : ""}`}
      ref={sectionRef}
    >
      <h1 className="section-header" style={{ "--x": "5%", "--y": "0" }}>
        More Projects
      </h1>

      <Swiper
        className="other-project-swiper"
        loop={true}
        autoplay={{delay: 2000}}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Keyboard, Autoplay, Pagination]}
        spaceBetween={40}

        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {otherProjectData.projects &&
          otherProjectData.projects.map((project) => {
            return (
              <SwiperSlide key={project.title}>
                <Project project={project} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export { OtherProject };
