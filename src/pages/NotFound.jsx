import React from 'react'

function NotFound() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-60px)] md:h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] w-full flex-col gap-5'>
      <h1 className='font-bold text-4xl'>Error: 404 Oooops!!!</h1>
      <h2 className='text-center'>This page doesn't exists. <br /> Please go back to the home page</h2>
    </div>
  )
}

export default NotFound