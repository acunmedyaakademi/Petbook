import React from 'react'

const Card = ({children, data}) => {
  return (
    <div className='border p-2 w-72 flex flex-col items-center'>
      <div className='w-64 h-64 rounded-xl overflow-hidden'>
        <img
          src={data.thumbnail}
          alt={data.title + ' ' + data.brand}
          className='object-fill w-full h-full'
        />
      </div>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default Card
