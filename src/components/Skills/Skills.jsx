import "../../styles/Skills.css"
import Card from "./Card"

export default function Skills(){
	return (
		<div className="skills">
			<div className="frontend-skills">
				<div className="skills-title">My Frontend Skills</div>

				<div className="skills-container">
					<Card
					icon=<i class='bx bxl-react' ></i>
					title="REACT"
					description=""
					bars={[
						 {percent:80, name:"State Management"},
						 {percent:70, name:"Handling Contexts"},
						 {percent: 85, name:"Axios and ReactQuery"},
						]}
					/>
					<Card
					icon=<i class='bx bxl-javascript'></i>
					title="JavaScript"
					description=""
					bars={[
						 {percent:80, name:"DOM Manipulation"},
						 {percent:75, name:"Async Programming"},
						 {percent:70, name:"WebStorage and Cookies"}
						]}
					/>
					<Card
					icon=<i class='bx bxl-css3'></i>
					title="CSS and Other Frameworks"
					description=""
					bars={[
						 {percent:85, name:"CSS"},
						 {percent:55, name:"Tailwind"},
						 {percent:60, name:"Bootstrap"},
						]}
					/>

				</div>
			</div>

{/*----------------Backend Skills -------------*/}
			<div className="backend-skills">
				<div className="skills-title">My Backend Skills</div>

				<div className="skills-container">
					<Card
					icon=<i class='bx bxl-django'></i>
					title="Django"
					description=""
					bars={[
						 {percent:80, name:"Rest APIs"},
						 {percent:75, name:"JWT Auths"},
						 {percent:85, name:"Django's ORM"},
						]}
					/>
					<Card
					icon=<i class='bx bxl-flask' ></i>
					title="Flask"
					description=""
					bars={[
						 {percent:80, name:"CRUD"},
						 {percent:50, name:"Session Auths"},
						 {percent:65, name:"SQLAlchemy ORM"},
						]}
					/>
				</div>
			</div>


		</div>
	)
}