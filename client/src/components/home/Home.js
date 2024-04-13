import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Marquee from 'react-fast-marquee'
import {BiSolidMegaphone} from 'react-icons/bi'

function Home() {
  return (
    <div>
      <h1 className='text-danger text-center mt-8 container'>From Cart to Kitchen</h1>
      <p className='text-center mb-4'>With just a Click...</p>
      <Marquee className='mb-3' speed={75} pauseOnClick style={{fontWeight:'bolder',fontSize:'18px'}}>
        <BiSolidMegaphone className='fs-3 me-2 text-success opacity-75 announcement'/>Welcome to Fresh'O Farm Portal...Our Website doesn't include in any mis-communications between Customer and Provider
      </Marquee>
      <Carousel className='container myCarousel mb-5'>
      <Carousel.Item>
        <img
          className='d-block m-auto rounded'
          src='https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg'
          alt="Image Not Found"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block m-auto rounded'
          src="https://mainlymiles.com/wp-content/uploads/2018/08/groceries-background-e1533097069889.jpg"
          alt="Image Not Found"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block m-auto rounded'
          src="http://bigbasketclone.yolasite.com/resources/grocery%20online%20shopping.jpg"
          alt="Image Not Found"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='d-block m-auto rounded'
          src="https://media.healthyfood.com/wp-content/uploads/2021/08/50-easy-ways-to-eat-more-fruit-and-veg-iStock-1225383160-1024x838.jpg"
          alt="Image Not Found"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block m-auto rounded'
          src="https://s1.1zoom.me/b3137/840/Meat_products_Cheese_Milk_Vegetables_Wood_planks_513139_3840x2160.jpg"
          alt="Image Not Found"
        />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Home