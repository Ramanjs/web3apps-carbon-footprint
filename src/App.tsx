import { useEffect, useState } from 'react'
import { connectToMetamask } from './metamaskService'
import logo from './assets/icon.jpg'

function App() {
  const [connect, setConnect] = useState(false)
  const [account, setAccount] = useState<string>('')
  const [numtx, setNumtx] = useState<number>(0)

  const handleClick = async () => {
    const accs = await connectToMetamask()
    setConnect(true)
    fetch(`https://testnet.mirrornode.hedera.com/api/v1/accounts/${accs[0]}`)
    .then(res => res.json())
    .then(data => {
      setAccount(data['account'])
    })
  }

  useEffect(() => {
    fetch(`https://testnet.mirrornode.hedera.com/api/v1/transactions/?account.id=${account}`)
    .then(res => res.json())
    .then(data => {
      setNumtx(data['transactions'].length)
    })
  }, [account])

  return (
    <>
      <div className='bgimage w-screen h-screen z-[-10]'></div>
      <div className='w-full min-h-screen flex flex-col justify-center items-center p-8'>
        <div className='flex flex-col items-center w-[90%] max-w-[800px] bg-black p-4 rounded-xl shadow-md shadow-blue-400 bg-opacity-75 text-white'>
          <h1 className='font-bold text-4xl mb-8'>Hedera Carbon Footprint</h1>
          <div className='w-full flex justify-between'>
            <img src={logo} className='w-[30%]'/>
            <div className='flex flex-col justify-between w-[65%]'>
              <p>Our platform provides a transparent look at the carbon footprint of your blockchain activities, driving forward the mission of sustainable development. Here, you can visualize the environmental impact of your blockchain transactions and take steps towards offsetting your carbon footprint.</p>
              <p>Make a tangible difference by considering the <a href='https://terrapass.com/' className='underline'>purchase of carbon offsets</a>. By investing in verified environmental projects, you can neutralize your blockchain transactions' carbon footprint.</p>
              {!connect && <button className='bg-blue-600 p-4 text-white font-semibold rounded-md' onClick={handleClick}>Connect to Metamask</button>}
              {connect && (
                <div className='flex justify-between border-2 border-gray-400'>
                  <p className='p-2'>{numtx * 0.00001} kg CO2</p>
                  <span className='border-l-2 border-gray-400'/>
                  <p className='p-2'>{numtx} Total Transactions</p>
                </div>
              )}
              <p className='text-gray-400'>Made by <a href="https://github.com/ramanjs" className='underline'>ramanjs</a> for <a href='https://web3apps-20170.devpost.com/' className='underline'>Web3Apps</a>. Photos from <a href='https://unsplash.com' className='underline'>Unsplash</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
