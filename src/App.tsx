import { useEffect, useState } from 'react'
import { connectToMetamask } from './metamaskService'

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
      <div className='w-full min-h-screen flex flex-col justify-between items-center p-8'>
        <h1 className='font-bold text-4xl text-white'>Hedera Carbon Footprint</h1>
        <div className='flex flex-col items-center w-[90%] max-w-96 bg-white p-4 rounded-xl shadow-md shadow-blue-400'>
          <p></p>
          {!connect && <button className='bg-blue-600 p-4 text-white font-semibold rounded-md' onClick={handleClick}>Connect to Metamask</button>}
          {connect && (
            <div className='flex justify-between border-2 border-gray-400'>
              <p className='p-2'>{numtx * 0.00001} kg CO2</p>
              <span className='border-l-2 border-gray-400'/>
              <p className='p-2'>{numtx} Total Transactions</p>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </>
  )
}

export default App
