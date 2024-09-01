import React from 'react';
import { Navbar, Footer } from '../components'; // Adjust the import based on your file structure
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Create and import a custom CSS file for styling

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="studio-intro text-center mb-5">
          <h1 className="nyd-title">NYD</h1>
        
          <p>
            Welcome to N.Y.D Studio, located in the heart of Bengaluru. Our studio offers a variety of classes including dance, Zumba, aerobics, yoga, gymnastics, and art & craft. With state-of-the-art facilities and expert instructors, we aim to provide the best training experience.
          </p>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="../assets/1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="../assets/2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="../assets/3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="../assets/4.jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="instructors-container">
          <div className="instructor-card animate__animated animate__fadeInLeft">
            <img
              src="../assets/yuga3.jpg"
              alt="Yugandhar M"
              className="img-fluid rounded-circle mb-2 instructor-image"
            />
            <h3>Yugandhar M</h3>
            <p>
              Yugandhar M, a professionally trained <b>hip hop dancer</b>, has represented India at the <b>Dance World Cup</b> conducted in both Portugal and Spain in the years 2019 and 2022 respectively. He has also participated in <b>state-level competitions</b> and various intercollegiate fests, winning in many institutions. Yugandhar has also worked as a choreographer in a few movies and has extensive knowledge and skill to train students effectively.
            </p>
          </div>
          <div className="instructor-card animate__animated animate__fadeInRight">
            <img
              src="../assets/nithin2.jpg"
              alt="Nithin Kumar M"
              className="img-fluid rounded-circle mb-5 instructor-image"
            />
            <h3>Nithin Kumar M</h3>
            <p>
              Nithin Kumar M, a professional trainer with a <b>TTC certificate</b>, has worked in various high-profile schools as a dance instructor. He is <b>trained in Zumba and Aerobics</b>, certified by Gold's Gym, and possesses significant knowledge and skill to train students effectively.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
