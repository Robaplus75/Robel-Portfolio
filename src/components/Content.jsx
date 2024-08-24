import "../styles/Content.css"
import Home from "./Home/Home"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"

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
			<section id="contact" className="contact-section">
				<Contact />
			</section>
		</div>
		)
}