import React from 'react'
import '../Auth/Login.css'
//Below we import useAuth from our AuthContext in order to access the login() function
//useAuth() is the function we want to import any time we need currentUser, login(), or logout()
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

    async function handleAuth() {
        //Await keyword will pause any more code from executing until we get a response back from Firebase
        await login()

        //return the user to a specific location using useNavigate from react-router-dom
        return navigate('/')

    }

  return (
    <div className='login row'>
        <div className='col m-3'>
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
        <div className='col'>
        <Container>
            <Card className='loginCard mx-auto mt-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h3>Login</h3>
                </Card.Header>
                <Card.Body>
                    <p>To gain access to our wedding planner app, please login below.</p>
                    <button className="btn btn-success m-1" onClick={() => handleAuth() }>
                        Login with Github
                    </button>
                    <br />
                    <button className="btn btn-success m-1" onClick={() => handleAuth() }>
                        Login with Email
                    </button>
                </Card.Body>
            </Card>
            <Card className='counter mx-auto mt-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h3>Counter</h3>
                </Card.Header>
                <Card.Body>
                <div>
                    Insert Countdown to Wedding HERE!!
                    Here's some text to fill the space for now
                    Here's some text to fill the space for now
                    Here's some text to fill the space for now
                    Here's some text to fill the space for now
                    Here's some text to fill the space for now
                    Here's some text to fill the space for now
                    Here's some text to fill the space for now
                </div>

                </Card.Body>
            </Card>
        </Container>
        </div>
    </div>
  )
}