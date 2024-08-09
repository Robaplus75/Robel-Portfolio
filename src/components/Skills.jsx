import "../styles/Skills.css"

export default function Skills(){
	return (
		<div className="skills">
			<div className="frontend-skills">
				<div className="skills-title">My Frontend Skills</div>

				<div className="skills-container">
					<div class="card">
						<div class="card-icon">
							<i class='bx bxl-django'></i>
						</div>
						<div class="card-content">
							<h2>Card One</h2>
							<p>the aquisfk sdfk sddf sdk </p>
							<div className='skill-bar'>
								<div class="info">
									<p>Rest API</p>
									<p className="percent">80%</p>
								</div>
								<div class="bar">
									<span className="rest-api"></span>
								</div>
							</div>
							<div className='skill-bar'>
								<div class="info">
									<p>JWT Auths</p>
									<p className="percent">75%</p>
								</div>
								<div class="bar">
									<span className="jwt-auths"></span>
								</div>
							</div>
							<div className='skill-bar'>
								<div class="info">
									<p>Django's ORM</p>
									<p className="percent">85%</p>
								</div>
								<div class="bar">
									<span className="djangos-orm"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class='bx bxl-react' ></i>
						</div>
						<div class="card-content">
							<h2>Card Two</h2>
							<p>the aquisfk sdfk sddf sdk flsd f sdfl sdlkf jsdflksdlf sdflksjdfl sjdlf sdlfj sldk fs dlfsd </p>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class='bx bxl-javascript'></i>
						</div>
						<div class="card-content">
							<h2>Card Three</h2>
							<p>the aquisfk sdfk sddf sdk flsd f sdfl sdlkf jsdflksdlf sdflksjdfl sjdlf sdlfj sldk fs dlfsd </p>
						</div>
					</div>
				</div>
			</div>

{/*----------------Backend Skills -------------*/}
			<div className="backend-skills">
				<div className="skills-title">My Backend Skills</div>

				<div className="skills-container">
					<div class="card">
						<div class="card-icon">
							<i class='bx bxl-django'></i>
						</div>
						<div class="card-content">
							<h2>Card One</h2>
							<p>the aquisfk sdfk sddf sdk </p>
							<div className='skill-bar'>
								<div class="info">
									<p>Rest API</p>
									<p className="percent">80%</p>
								</div>
								<div class="bar">
									<span className="rest-api"></span>
								</div>
							</div>
							<div className='skill-bar'>
								<div class="info">
									<p>JWT Auths</p>
									<p className="percent">75%</p>
								</div>
								<div class="bar">
									<span className="jwt-auths"></span>
								</div>
							</div>
							<div className='skill-bar'>
								<div class="info">
									<p>Django's ORM</p>
									<p className="percent">85%</p>
								</div>
								<div class="bar">
									<span className="djangos-orm"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class='bx bxl-react' ></i>
						</div>
						<div class="card-content">
							<h2>Card Two</h2>
							<p>the aquisfk sdfk sddf sdk flsd f sdfl sdlkf jsdflksdlf sdflksjdfl sjdlf sdlfj sldk fs dlfsd </p>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class='bx bxl-javascript'></i>
						</div>
						<div class="card-content">
							<h2>Card Three</h2>
							<p>the aquisfk sdfk sddf sdk flsd f sdfl sdlkf jsdflksdlf sdflksjdfl sjdlf sdlfj sldk fs dlfsd </p>
						</div>
					</div>
				</div>
			</div>


		</div>
	)
}