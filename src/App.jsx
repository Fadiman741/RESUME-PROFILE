import React, {Components} from 'react';
import './App.css';



function topheader(){
        return

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

}
function tabs(){
        return
        
        <div>
		<div class="tab">
		        <button class="tablinks" onclick="openCity(event, 'London')">Home</button>
			<button class="tablinks" onclick="openCity(event, 'Paris')">Profile</button>
			<button class="tablinks" onclick="openCity(event, 'Tokyo')">Resume</button>
			<button class="tablinks" onclick="openCity(event, 'Tokyo')">Portfolio</button>
			<button class="tablinks" onclick="openCity(event, 'Tokyo')">Contact</button>
		</div>				
		<div id="London" class="tabcontent">								
			
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


}

function App(){
	return(
    	<div className="container">			
		
		<topheader/>
                <tabs/>						
	</div>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));