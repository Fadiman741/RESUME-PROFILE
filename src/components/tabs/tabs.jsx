import React from 'react';
import './tabs.css';

function Tabs() {
	return(
		<div>
			<div class="tab">
				<button class="tablinks" onclick="openCity(event, 'London')">Home</button>
				<button class="tablinks" onclick="openCity(event, 'Paris')">Profile</button>
				<button class="tablinks" onclick="openCity(event, 'Tokyo')">Resume</button>
				<button class="tablinks" onclick="openCity(event, 'Tokyo')">Portfolio</button>
				<button class="tablinks" onclick="openCity(event, 'Tokyo')">Contact</button>
			</div>				
			<div id="London" class="tabcontent">											
				<h3>London</h3>
				<p>London is the capital city of England.</p>
			</div>
				<div id="Paris" class="tabcontent">
				<h3>Paris</h3>
				<p>Paris is the capital of France.</p>
			</div>
			<div id="Tokyo" class="tabcontent">
				<h3>Tokyo</h3>
				<p>Tokyo is the capital of Japan.</p>
			</div>
		</div>

	);
}
export default Tabs;