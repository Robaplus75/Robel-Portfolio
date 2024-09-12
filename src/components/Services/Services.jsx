import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Services.css"
import Slider from 'react-slick'



export default function Services(){
	const services = [
			{
				id: 1,
				title: "Custom Web Development",
				paragraph1: "From concept to development, I design and develop custom web applications tailored to your business needs, using cutting-edge technologies like React, Django, and more.",
				paragraph2: "Whether you need a simple website or a complex enterprise application, I've got you covered.",
			},
			{
				id: 2,
				title: "API Development",
				paragraph1: "I design and develop scalable, secure, and efficient APIs that integrate seamlessly with your existing infrastructure, using Django Rest Framework and other technologies.",
				paragraph2: "From data modeling to API development, I ensure your API is robust, reliable, and easy to maintain.",
			},
			{
				id: 3,
				title: "Code Review and Optimization",
				paragraph1: "I review your existing codebase, identify areas for improvement, and optimize it for better performance, security, and maintainability.",
				paragraph2: "I provide actionable recommendations and implement changes to ensure your codebase is efficient and scalable.",
			},
			{
				id: 4,
				title: "Database Modeling with Django ORM",
				paragraph1: "I design and implement efficient, scalable, and secure database models using Django's Object-Relational Mapping (ORM) system, ensuring seamless integration with your Django applications.",
				paragraph2: "From schema design to data migration, I ensure your database is optimized for performance and reliability.",
			},
			{
				id: 5,
				title: "Development and Handover",
				paragraph1: "I develop your web application and provide you with a fully functional codebase, ready for deployment by your team or a third-party service.",
				paragraph2: "I ensure a smooth handover process, providing documentation and support to help you get started with your new application.",
			}

		]
	const settings = {
		dots: true,
		infinite:false,
		speed: 500,
		slidesToShow:1,
		slidesToScroll:1,
		
	};
	return (
		<div id="service-container">
			<h2 class="intro-title">Services</h2>
			<p class="intro-paragraph">As a full-stack web developer, I offer a range of services to help you build scalable, efficient, and secure web applications.</p>
			
			<div class="service-cards">
				<Slider {...settings}>
					{services.map((service) => (
						<div class="service-card" key={service.id}>
							<i class='bx bx-code'></i>
							<div class="service-content">
								<h3>{service.title}</h3>
								<p>{service.paragraph1}</p>
								<p>{service.paragraph2}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}