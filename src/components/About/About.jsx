import '../../styles/About.css'
import AboutImg from '../../assets/kakashi.jpg';

export default function(){
	return (
		<div className="about_contents">
			<section className="imageSection">
				<img src={AboutImg} />
			</section>

			<section class="infoSection">
				<h1>About Me</h1>
				<h2>FullStack Web Developer</h2>
				<p>
					I’m an <span>Electrical Engineering</span> student with a knack for full-stack development, focusing on <span>Django</span> and <span>React</span>. I enjoy tackling challenges and creating impactful web applications.	
				</p>
				<div>
				<h3 className="education">Education</h3>
				<p>12 Month ALX Software Engineering</p>
				<p>AASTU Electrical Engineering</p>
				
				</div>
				<div className="personalInfo">
						<div><span>Name:</span><span>Robel Wondimu</span></div>
						<div><span>Age:</span><span>23 Years</span></div>
						<div><span>Email:</span><span>robelwon75@gmail.com</span></div>	
						<div><span>Address:</span><span>Addis Ababa, Gerji</span></div>
				</div>
				<div className="button">
					<button>Download CV</button>
				</div>
					
			</section>
		</div>
		)
}