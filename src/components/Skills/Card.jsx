export default function Card({icon, title, description, bars}){
	// <div class="bar">
	// 	<span style={{'width':`${bar.percent}%`}}></span>
	// </div>
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
									<p>{bar.name}</p>
									<p className="skill-status">{bar.status}</p>
								</div>
							))}
							
						</div>
					</div>
		)
}