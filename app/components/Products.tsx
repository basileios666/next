import React from 'react'
import BtnAddToCard from './BtnAddToCard'

interface User {
  id: number;
  name: string;
}

const products = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-cache' });
  const users: User[] = await res.json();
  return (
    <div className='p-5'>
      <p className='text-center text-2xl text-error drop-shadow-2xl my-5'>{new Date().toLocaleTimeString()}</p>

      <div className="dropdown dropdown-right dropdown-hover ms-96">
        <div tabIndex={0} role="button" className="btn btn-outline btn-error m-1">Products</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-red-800 rounded-box w-52">
          {users.map(user => <li key={user.id}><a>{user.name}</a></li>)}
        </ul>
      </div>

      <br />
      <BtnAddToCard />
      <div className="dropdown dropdown-right dropdown-bottom dropdown-hover ms-5">
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
          <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
          <div tabIndex={0} className="card-body">
            <h2 className="card-title">You needed more info?</h2>
            <p>Here is a description!</p>
          </div>
        </div>
      </div>

      <br />



    </div>
  )
}

export default products