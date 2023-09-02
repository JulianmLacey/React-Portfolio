import "../styles/style.css";
export default function Project() {
	return (
		<div>
			<div class="projects">
				<h4>Coding Projects</h4>
				<ul>
					<li>
						<div id="#C++" class="content">
							<img src="./DSM.png" />
							<h4>C/C++ - 2D Truss Simulation</h4>
							<a>
								This Project was written entirely in c++ and is a 2d truss simulator/calculator. The stand alone application allows the user to add points, then connect them to create beams; add loads, supports, and choose a different material. Running the simulation calulates the reaction forces and displacement in each node, aswell as stress/strain within each beam. Additionally it has an
								interactive GUI with additional other features within it, such as clicking to add nodes or draging and selecting multiple at a time.
							</a>
						</div>
					</li>

					<li>
						<div id="#HTMLCSS" class="content">
							<img src="./Simulation.png" />
							<h4>C/C++ - 2D Truss Simulation</h4>
							<a>- Goal: Design an L Bracket To support a load of 20lb with a FOS of 3</a>
							<br />
							<br />
							<a>- Outcome: Weight - 9g (Lowest in class), Maximum Load - 182lbf (Highest in Class)</a>
						</div>
					</li>

					<li>
						<div id="#JS" class="content">
							<img src="./BestPlaceMockup.png" />
							<h4>Perfect Place Applications</h4>
							<a>- Goal: Create an Application</a>
							<br />
							<br />
							<a>- Best Place allows users to search for jobs, and the application will return a list of jobs and houses within those job locations to allow the user to find the best place to live and work. </a>
						</div>
					</li>
				</ul>
			</div>

			<div class="projects">
				<h4>Mechanical Projects</h4>
				<ul>
					<li>
						<div id="#SW" class="content">
							<img src="./TEMP.png" />
							<h4>SolidWorks - Splatt Gun</h4>
							<a>k</a>
						</div>
					</li>

					<li>
						<div id="#SWS" class="content">
							<img src="./Simulation.png" />
							<h4>SolidWorks Sim - Bracket Design</h4>
							<a>- Goal: Design an L Bracket To support a load of 20lb with a FOS of 3</a>
							<br />
							<br />
							<a>- Outcome: Weight - 9g (Lowest in class), Maximum Load - 182lbf (Highest in Class)</a>
						</div>
					</li>
				</ul>
			</div>

			<div class="form-style">
				<h3>Contact:</h3>
				<form>
					<label for="firstName">First Name:</label>
					<br />
					<input type="text" id="firstName" name="firstName" />
					<br />
					<label for="lastName">Last name:</label>
					<br />
					<input type="text" id="lastName" name="lastName" />
					<br />
					<label for="email">Email:</label>
					<br />
					<input type="text" id="email" name="email" />
					<br />
					<label for="Description">Description:</label>
					<br />
					<input type="text" id="Description" name="Description" />
					<br />
				</form>
			</div>
		</div>
	);
}
