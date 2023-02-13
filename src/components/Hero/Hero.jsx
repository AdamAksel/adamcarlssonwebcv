import React, { useState } from 'react'
import { HeroArea, HeroImg } from './Hero.elements'
import Avatar from '../images/avataaars.png'
import RealImg from '../images/photome.jpg'

const Hero = () => {
  const [changeImage, setChangeImage] = useState(true)

  return (
    <>
      <HeroArea>
        <h2>Adam Carlsson</h2>
        {changeImage ? (
          <>
            <HeroImg
              onClick={() => {
                setChangeImage(false)
              }}
              src={Avatar}
              title="Don't Click!"
              alt='cartoon avatar of Adam Carlsson'
            />
          </>
        ) : (
          <>
            <HeroImg
              onClick={() => {
                setChangeImage(true)
              }}
              src={RealImg}
              title='Do Click!'
              alt='Photo of Adam Carlsson'
            />
          </>
        )}

        <h2>Amateur Full-Stack Developer</h2>
        <h2>Looking to go pro</h2>
      </HeroArea>
    </>
  )
}

export default Hero
