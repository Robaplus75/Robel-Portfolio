import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import "../../styles/Skills.css"
import Card from "./Card"

export default function Skills(){

	const frontend_skills = [
		  {
		    icon: <i className='bx bxl-react' />,
		    title: "REACT",
		    description: "",
		    bars: [
		      { status: "Proficient", name: "State Management" },
		      { status: "Good", name: "Handling Contexts" },
		      { status: "Excellent", name: "Axios and ReactQuery" },
		    ],
		  },
		  {
		    icon: <i className='bx bxl-javascript' />,
		    title: "JavaScript",
		    description: "",
		    bars: [
		      { status: "Good", name: "DOM Manipulation" },
		      { status: "Fair", name: "Async Programming" },
		      { status: "Good", name: "WebStorage and Cookies" },
		    ],
		  },
		  {
		    icon: <i className='bx bxl-css3' />,
		    title: "CSS and Other Frameworks",
		    description: "",
		    bars: [
		      { status: "Excellent", name: "CSS" },
		      { status: "Fair", name: "Tailwind" },
		      { status: "Good", name: "Bootstrap" },
		    ],
		  },
		];

	const backend_skills = [
		  {
		    icon: <i class='bx bxl-django'></i>,
		    title: "DJANGO",
		    description: "",
		    bars: [
		      { status: "Excellent", name: "Rest APIs" },
		      { status: "Good", name: "JWT Auths" },
		      { status: "Excellent", name: "Django's ORM" },
		    ]
		  },
		  {
		    icon: <i className='bx bxl-flask' />,
		    title: "Flask",
		    description: "",
		    bars: [
		      { status: "Excellent", name: "CRUD" },
		      { status: "Fair", name: "Session Auths" },
		      { status: "Good", name: "SQLAlchemy ORM" },
		    ],
		  },
		]

	const settings = {
		dots: false,
		infinite:false,
		speed: 300,
		slidesToShow:1,
		slidesToScroll:1,
		
	};


	return (
		<div className="skills">
			<h2 className="intro-title">Skills</h2>
			<p className="intro-paragraph">Below are some of my key skills, categorized into frontend and backend.</p>
			<div className="skills-list">
				<div className="frontend-skills">
					<div className="skills-title">My Frontend Skills</div>

					<div className="skills-container">
					<Slider {...settings}>
					  {frontend_skills.map((skill, index) => (
					    <Card
					      key={index}
					      icon={skill.icon}
					      title={skill.title}
					      description={skill.description}
					      bars={skill.bars}
					    />
					  ))}
					</Slider>
					</div>

				</div>

	{/*----------------Backend Skills -------------*/}
				<div className="backend-skills">
					<div className="skills-title">My Backend Skills</div>

					<div className="skills-container">
					<Slider {...settings}>
					  {backend_skills.map((skill, index) => (
					    <Card
					      key={index}
					      icon={skill.icon}
					      title={skill.title}
					      description={skill.description}
					      bars={skill.bars}
					    />
					  ))}
					</Slider>
					</div>
				</div>
	{/*----------------Backend Skills -------------*/}
				<div className="devops-skills">
					<center><div className="skills-title">My Backend Skills</div></center>

					<div className="skills-container">
					<Slider {...settings}>
					  {backend_skills.map((skill, index) => (
					    <Card
					      key={index}
					      icon={skill.icon}
					      title={skill.title}
					      description={skill.description}
					      bars={skill.bars}
					    />
					  ))}
					</Slider>
					</div>
				</div>
			</div>


		</div>
	)
}