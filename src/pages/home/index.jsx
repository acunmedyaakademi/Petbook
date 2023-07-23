import React from 'react'
import headerImage from '@/assets/images/header-photo.jpg'
import Button from '@/components/button'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Card from '@/components/card'

const Home = () => {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json.products))
  }, [])

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
      <div>
        <div className='container mx-auto px-32 py-16'>
          <div className='flex justify-between'>
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
          <div className='grid gap-4 grid-cols-auto-fit-250'>
            {products.map((product, key) => (
              <Card key={key} data={product}>
                {product.title}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
