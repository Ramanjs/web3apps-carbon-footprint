import { useEffect, useState } from 'react'
import { connectToMetamask } from './metamaskService'

function App() {

  //useEffect(() => {
    //connectToMetamask()
    //.then(res => {
      //console.log(res)
    //})
  //}, [])

  return (
    <>
      <div className='w-full min-h-screen flex flex-col justify-between items-center p-8'>
        <h1 className='font-bold text-4xl'>Hedera Carbon Footprint</h1>
        <div className='w-[90%] max-w-96 bg-white p-4 rounded-xl shadow-md shadow-blue-400'>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default App
