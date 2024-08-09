import "../styles/Content.css"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"

export default function Content(){
	return (
		<div className="content">
			<section id="home" className="home-section">
				<Home />
			</section>
			<section id="about" className="about-section">
				<About />
			</section>
			<section id="skills" className="skills-section">
				<Skills />
			</section>
		</div>
		)
}