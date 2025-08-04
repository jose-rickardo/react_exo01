import React ,{ useState,useEffect } from 'react'
import './App.css'
import plus from './assets/plus.png'
import edit from './assets/editer.png'
import delet from './assets/supprimer.png'
function App() {
     return <>
     <div className="bg-sky-300 h-screen w-screen flex justify-center items-start">
      <nav className='w-3xl h-15 bg-amber-50 m-auto rounded-3xl mt-4 fixed'></nav>
      <table className='mt-20 bg-amber-400 w-2xl'>
        <thead>
          <tr className='font-bold border-2 text-xl'>
            <td>id</td>
            <td>name</td>
            <td>realName</td>
            <td>universe</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>jose</td>
            <td>rickardo</td>
            <td>17</td>
            <td>
              <button className=""></button>
              <button className=""></button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className='fixed bottom-0 right-0 m-4 p-2 bg-blue-500 text-white rounded-full transition-all hover:bg-blue-600'>
        <img src={plus} alt="" className='h-15' />
      </button>
     </div>
     </>
}

export default App
