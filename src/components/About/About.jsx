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
					If you need a small amount of lorem ipsum, you can copy and paste into your file from this passage:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<p>
					If you need a small amount of lorem ipsum, you can copy and paste into your file from this passage:Lorem ipsum dolor sit amet, consectetur adipiscing.
				</p>
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