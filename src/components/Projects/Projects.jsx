import "../../styles/Projects.css"
import { useState } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiper } from "swiper/react";
import projects from "./project_data";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ProjectSliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-btn">
      <div className="proj-btn" onClick={() => swiper.slidePrev()}>
        <GrPrevious />
      </div>
      <div className="proj-btn" onClick={() => swiper.slideNext()}>
        <GrNext />
      </div>
    </div>
  );
};

export default function Projects(){
	const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
  	<div className="projects-container">
  		<center><h2 className="intro-title">Projects</h2></center>
		<p className="intro-paragraph">Below are some of my key skills, categorized into frontend and backend.</p>
		<div className="project-img">
			<Swiper className="image-slider" spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange}>
				{projects.map((project, index) => {
					return (
						<SwiperSlide className="image-slider2" key={index} style={{ marginBottom: "100px" }}>
							<img src={project.image} alt="" />
						</SwiperSlide>
						);
				})}
				<ProjectSliderBtns />
			</Swiper>

			<div className="project-info">
				<h2 className="heading">Projects</h2>
				<div className="proj-num">{project.num}</div>
				<h2 className="proj-category">{project.category} project</h2>
				<p className="proj-desc">{project.description}</p>
				<ul className="proj-stack">
				{project.stack.map((item, index) => {
					return (
						<li key={index}>
						{item.name}
						{index !== project.stack.length - 1 && ","}
						</li>
						);
				})}
				</ul>
				<hr />
				<button className="link-btn"><a href={project.live} target="_blank">Link</a></button>
				<button className="link-btn"><a href={project.github} target="_blank">Github</a></button>
			</div>
		</div>	
  	</div>
    // <div className="projects-container">
    //   <h2 className="heading">Projects</h2>
    //   <div className="proj-num">{project.num}</div>
    //   <h2 className="proj-category">{project.category} project</h2>
    //   <p className="proj-desc">{project.description}</p>
    //   <ul className="proj-stack">
    //   	{project.stack.map((item, index) => {
    //   		return (
    //   			<li key={index}>
	//       			{item.name}
	//       			{index !== project.stack.length - 1 && ","}
	//       		</li>
	//       		);
    //   	})}
    //   </ul>
    //   <hr />
    //   <button className="link-btn"><a href={project.live} target="_blank">Link</a></button>
    //   <button className="link-btn"><a href={project.github} target="_blank">Github</a></button>
    //   <div className="proj-img">
	//       <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange}>
	//       	{projects.map((project, index) => {
	//       		return (
	//       			<SwiperSlide key={index} style={{ marginBottom: "100px" }}>
	//       				<img src={project.image} alt="" />
	//       			</SwiperSlide>
	//       			);
	//       	})}

	//       	<ProjectSliderBtns />
	//       </Swiper>
    //   </div>
    // </div>
  );
}