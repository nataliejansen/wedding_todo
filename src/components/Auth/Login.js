import React from 'react'
import Countdown from 'react-countdown'

import '../Auth/Login.css'

import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Carousel, Container, Card} from 'react-bootstrap'

import image from '../../images/carousel1.JPG'
import image2 from '../../images/carousel2.JPG'
import image3 from '../../images/carousel3.JPG'
import image4 from '../../images/carousel4.JPG'




export default function Login() {

    const { login } = useAuth()
    const navigate = useNavigate()
    
    const CoundownRenderer = ({ days, hours, minutes, seconds }) => (
        <>
          <h4>{days} days {hours} hours, {minutes} minutes, {seconds} seconds<br />
          Until we say "I do" &hearts;</h4>
        </>
      )

    async function handleAuth() {
        //Await keyword will pause any more code from executing until we get a response back from Firebase
        await login()

        //return the user to a specific location using useNavigate from react-router-dom
        return navigate('/')
    
    }

    

  return (


    <div className='login row mx-5 p-1'>
        <div className='col-sm-5 my-3 mx-4'>
                <Container> 
                    <Card className='counter mx-auto mt-2 border-dark text-center'>
                        <Card.Header className='bg-dark text-white'>
                            <h1>Eddie & Natalie</h1>
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <h3>May 30, 2023 | Blue Springs, MO</h3>
                            <Countdown date={Date.now() + 11577600000} renderer={CoundownRenderer} />
                        </div>
                        </Card.Body>
                    </Card>
                    <Card className='loginCard mx-auto border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h1>Login</h1>
                </Card.Header>
                <Card.Body>
                    <p>To gain access to our wedding planner app, please login below.</p>
                    <button className="btn m-1" onClick={() => handleAuth() }>
                        Login with Github
                    </button>
                    <br />
                </Card.Body>
            </Card>
                </Container>
            </div>
        <div className='col-sm-6 my-3'>
        <Carousel controls={true} fade>
                <Carousel.Item>
                    {/* image and .Caption are placed inside the .Item */}
                    <img src={image} alt='First Slide' className='carouselImg' />
                    <Carousel.Caption>
                    {/* <h1 className="text-center">Natalie and Edward</h1>
                    <h3 className='text-center'>May 30, 2023</h3>
                    <h4 className='text-center'>Blue Springs, MO</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* image and .Caption are placed inside the .Item */}
                    <img src={image2} alt='Second Slide' className='carouselImg' />
                    <Carousel.Caption>
                    {/* <h1 className="text-center">Natalie and Edward</h1>
                    <h3 className='text-center'>May 30, 2023</h3>
                    <h4 className='text-center'>Blue Springs, MO</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* image and .Caption are placed inside the .Item */}
                    <img src={image3} alt='Third Slide' className='carouselImg' />
                    <Carousel.Caption>
                    {/* <h1 className="text-center">Natalie and Edward</h1>
                    <h3 className='text-center'>May 30, 2023</h3>
                    <h4 className='text-center'>Blue Springs, MO</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* image and .Caption are placed inside the .Item */}
                    <img src={image4} alt='Fourth Slide' className='carouselImg' />
                    <Carousel.Caption>
                    {/* <h1 className="text-center">Natalie and Edward</h1>
                    <h3 className='text-center'>May 30, 2023</h3>
                    <h4 className='text-center'>Blue Springs, MO</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>     
    </div>
  )
}