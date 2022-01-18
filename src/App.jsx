import React, {Components} from 'react';
import './App.css';
import topheader from './components/topheader/topheader.jsx';
import tabs from './components/tabs/tabs.jsx';


function App(){
	return(

		<body>			
    	<div className="container">
						
								<topheader/>
								<tabs/>
									
			</div>
		</body>
  );
}

export default App;