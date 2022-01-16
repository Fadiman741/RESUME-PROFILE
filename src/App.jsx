import React from 'react';
import './App.css';

function App() {

	
  return (
		
		<body>
    	<div className="container">
						<div className="containerr" >
									<div className="top-profile">
												<div class="column" >
																												
															<h2> LEPHAKA</h2>
   									  				<p>Web Developer</p>													
    												
  											</div>
  											<div class="column" >
    								 					<p>Email: mafadi.lephaka21@gmail.com</p>
															<p>Contacts: 0786394580</p>
  											</div>
  											<div class="column" >
    													<p>Location: Cape Town, South Africa</p>
  											</div>

									</div>

								<div class="tab">
									<button class="tablinks" onclick="openCity(event, 'London')">London</button>
									<button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
									<button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
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
			</div>
		</body>
  );
}

export default App;