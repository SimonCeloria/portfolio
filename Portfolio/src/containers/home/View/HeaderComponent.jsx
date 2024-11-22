import React from 'react'

const HeaderComponent = () => {
  return (
    <header className='bg-teal-200 flex justify-between w-full max-w-screen-2xl mx-auto'>
      <h1>Simón Celoria</h1>
      <nav>
        <ul className='flex justify-between'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent