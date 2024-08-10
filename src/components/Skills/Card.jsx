export default function Card({icon, title, description, bars}){
	return (
					<div class="card">
						<div class="card-icon">
							{icon}
						</div>
						<div class="card-content">
							<h2>{title}</h2>
							<p>{description}</p>
							{bars.map((bar)=>(
								<div className='skill-bar'>
									<div class="info">
										<p>{bar.name}</p>
										<p className="percent">{bar.percent}%</p>
									</div>
									<div class="bar">
										<span style={{'width':`${bar.percent}%`}}></span>
									</div>
								</div>
							))}
							
						</div>
					</div>
		)
}