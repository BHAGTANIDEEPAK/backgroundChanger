import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('green');

  return (
    <div className='w-full h-screen duration-200' style={{background:color}}>
      <h1 className='text-white text-center text-3xl py-20'>This is the background Color Changing Using Hooks!</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          onClick={()=>setColor('red')}
          >Red</button>
          <button
          onClick={()=>setColor('green')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Green</button>
          <button
          onClick={()=>setColor('purple')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Purple</button>
          <button
          onClick={()=>setColor('pink')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Pink</button>
        </div>

      </div>

    </div>
  )
}

export default App
