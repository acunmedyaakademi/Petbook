import React, {useEffect, useState} from 'react'
import headerImage from '@/assets/images/header-photo.jpg'
import Button from '@/components/button'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Card from '@/components/card'
import {animals} from '@/fake-aapi/animals'

const Home = () => {
  const [animal, setAnimal] = useState([])

  useEffect(() => {
    setAnimal(animals)
  }, [animals])

  return (
    <>
      <div className='h-[695px] w-full relative -z-10'>
        <div className='absolute h-full w-full bg-black/50' />
        <img src={headerImage} alt='' className='w-full h-full object-cover select-none' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10'>
          <h1 className='text-5xl font-bold'>Petbook</h1>
          <p className='text-xl font-semibold'>
            Petbook, petlerinizi sevebileceğiniz bir platformdur.
          </p>
        </div>
      </div>
      <div className='container mx-auto sm:px-32 px-16 py-16'>
        <div className='flex justify-between items-center border-b-2 pb-3 mb-3 border-zinc-200/70 '>
          <div className='flex gap-2 flex-col'>
            <p>What's New?</p>
            <h2 className='text-2xl'>Latest News</h2>
          </div>
          <div>
            <Button variant='secondary'>
              <span>View More </span>
              <MdOutlineKeyboardArrowRight className='text-xl' />
            </Button>
          </div>
        </div>
        <div className='grid gap-4 grid-cols-auto-fit-250 items-center place-content-center justify-items-center'>
          {animal.map((animal, key) => (
            <Card key={key} data={animal}>
              {animal.title}
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
