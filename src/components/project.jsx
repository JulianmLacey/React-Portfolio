import "../styles/style.css";

export default function Project({ projects }) {
	return (
		<div class="projects">
			<h4>Coding Projects</h4>
			<ul>
				{projects.map((project) => (
					<li>
						<div class="content">
							<img src={project.img} />
							<h4>{project.title}</h4>
							<a>{project.goal}</a>
							<br />
							<br />
							<a>{project.outcome}</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
