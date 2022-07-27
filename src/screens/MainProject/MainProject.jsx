import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Custom Imports
import "./MainProject.css";
import Project from "./components/Project/Project";
import projectData from "../../assets/data/Projects.json";
import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";

const MainProject = () => {
  const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.8);

  useEffect(() => {
    document.body.classList.toggle("on-project", isVisible);
  }, [isVisible]);

  return (
    <section
      className={`MainProject ${isVisible ? "active" : ""}`}
      name="Projects"
      id="MainProject"
      ref={sectionRef}
    >
      <h1 className="section-header" style={{ "--x": "5%", "--y": "1rem" }}>
        Projects
      </h1>

      <Swiper
        className="main-project-swiper"
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Keyboard, Autoplay, Pagination]}
      >
        {projectData.projects &&
          projectData.projects.map((project) => {
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

export { MainProject };
