import "../styles/style.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
	const currentPage = useLocation().pathname;

	return (
		<header>
			<h1>Julian Lacey</h1>
			<button class="button-1" href="./assets" download="JulianLaceyResume.pdf">
				Download Resume
			</button>
			<div>
				<ul>
					<li>
						<Link to="/Portfolio" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
							Portfolio
						</Link>
					</li>
					<li>
						<Link to="/AboutMe" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
							About Me
						</Link>
					</li>
					<li>
						<Link to="/Resume" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
							Resume
						</Link>
					</li>
					<li>
						<Link to="/Contact" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
							Contact
						</Link>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/julacey">LinkedIn</a>
					</li>
					<li>
						<a href="https://github.com/JulianmLacey">GitHub</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
