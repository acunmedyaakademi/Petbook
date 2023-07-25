import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children, data}) => {
  return (
    <div className='shadow-xl rounded-xl p-4 w-72 flex flex-col items-center'>
      <div className='w-64 h-64 rounded-xl overflow-hidden mb-4'>
        <img src={data.thumbnail} alt={data.title} className='object-fill w-full h-full' />
      </div>
      <div className='container mx-auto'>
        <h3 className='text-neutral-10 font-bold'>{data.title}</h3>
        <div className='flex gap-4 text-sm mb-1'>
          <p className='text-neutral-4'>
            Cinsiyet: <strong>{data.gender}</strong>
          </p>

          <p className='text-neutral-4'>
            Yaşı:{' '}
            <strong>
              {data.age} {data.date}
            </strong>
          </p>
        </div>
        <p className='text-neutral-4 text-sm'>
          Kategori: <strong>{data.categories}</strong>
        </p>
        <p className='text-neutral-3 font-semibold text-sm'>{data.description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
  data: PropTypes.object,
}

export default Card
