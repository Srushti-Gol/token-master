import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'


// ABIs
import TokenMaster from './abis/TokenMaster.json'
import StudentRegistration from './components/StudentRegistration';



function App() {

  return (
    <div>
    

        <h2 className="header__title"><strong>Welcome to Tokenmaster</strong></h2>
        <Navigation/>
    
        <StudentRegistration/>

    </div>
  );
}

export default App;