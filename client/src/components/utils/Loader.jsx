import React from 'react'
import { HashLoader } from 'react-spinners';


  
function Loader() {
  return (
    <>
     <div className=' h-screen w-full flex justify-center items-center'>
     <HashLoader
        color="#000000"
        size={100} 
        aria-label="Loading Spinner"
        data-testid="loader"
      />
     </div>
    </>
  )
}

export default Loader