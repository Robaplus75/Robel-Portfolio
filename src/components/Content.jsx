import "../styles/Content.css"
import Home from "./Home"

export default function Content(){
	return (
		<div className="content">
			<section className="home-section">
				<Home />
			</section>
			<section className="about-section">
				<h1>Stuff Here</h1>
			</section>
		</div>
		)
}