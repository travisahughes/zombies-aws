/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import zombie from '../../assets/challenge/info-zombie.png';
import background from '../../assets/challenge/info-background.png';
import './Info.css';

const maxes = [];

function Info({ userNfts }) {
  useEffect(() => {
    playAnimation();
    return () => {
      maxes.forEach((max) => {
        max.kill();
      });
    };
  }, []);

  const playAnimation = () => {
    gsap.to('.zombie-image', {
      duration: 3,
      opacity: 100,
      delay: 2,
      ease: 'power1.inOut',
    });

    gsap.to('.zombie-image', {
      duration: 0.5,
      left: 0,
      delay: 5,
      ease: 'power1.inOut',
    });
    gsap.to('.welcome-text', {
      duration: 0.5,
      opacity: 0,
      delay: 5,
      ease: 'power1.inOut',
    });
    gsap.to('.your-challenge-text', {
      duration: 0.5,
      opacity: 100,
      delay: 5,
      ease: 'power1.inOut',
    });
    gsap.to('.info-page-background', {
      duration: 0.5,
      opacity: 100,
      delay: 5,
      ease: 'power1.inOut',
    });
  };
  return (
    <div className="info-page">
      <div className="zombie-image">
        <img src={zombie} alt="" />
        <div className="welcome-text">Welcome!</div>
      </div>
      <div className="info-page-background">
        <img src={background} alt="" />
      </div>
      <div className="your-challenge-text">
        Your challenge (should you choose to accept it) is to assemble a team of
        NFZs with a very particular set of skills.
      </div>
    </div>
  );
}

export default Info;
