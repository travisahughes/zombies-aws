/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';
import zombie from '../../assets/challenge/info-zombie.png';
import background from '../../assets/challenge/info-background2.jpg';
import comic from '../../assets/challenge/comic.png';

import './Info.css';

const maxes = [];

function Info() {
  const history = useHistory();
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
      delay: 1,
      ease: 'power1.inOut',
    });

    gsap.to('.zombie-image', {
      duration: 0.5,
      left: 0,
      delay: 4,
      ease: 'power1.inOut',
    });
    gsap.to('.welcome-text', {
      duration: 0.5,
      opacity: 0,
      delay: 4,
      ease: 'power1.inOut',
    });
    gsap.to('.your-challenge-text', {
      duration: 0.5,
      opacity: 100,
      delay: 4,
      ease: 'power1.inOut',
    });
    gsap.to('.info-page-background', {
      duration: 0.5,
      opacity: 100,
      delay: 4,
      ease: 'power1.inOut',
    });
    gsap.to('.next-step-button', {
      duration: 0.5,
      opacity: 100,
      delay: 4,
      ease: 'power1.inOut',
    });
  };

  const handleNext = () => {
    gsap.to('.next-step-button', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
    });
    gsap.to('.zombie-image', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
    });
    gsap.to('.info-page-background', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
    });
    gsap.to('.your-challenge-text', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
    });
    gsap.to('.pigeon-image', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 0.5,
    });

    gsap.to('.pigeon-image', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.inOut',
      delay: 6,
    });

    gsap.to('.pigeon-final', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 6,
      onComplete: handleNavigate,
    });
  };
  const handleNavigate = () => {
    setTimeout(() => {
      history.push('/challenge2/game');
    }, 4500);
  };
  return (
    <div className="info-page">
      <div className="zombie-image">
        <img src={zombie} alt="" />
        <div className="welcome-text">Welcome!</div>
      </div>
      <div className="pigeon-image">
        <img src={comic} alt="" />
        <div className="pigeon-image-text">
          Get your exploring team together to find and obtain a Generation 2
          Keycard and a new NFT comic art before time runs out!
        </div>
      </div>
      <div className="info-page-background">
        <img src={background} alt="" />
      </div>
      <div className="your-challenge-text">
        The Nice Fun Zombies have been unleashed into the world, and are
        settling down into locations. Your challenge now is to assemble a team
        of explorers to see what else is out there!
      </div>
      <div className="pigeon-final">
        <img src={zombie} alt="" />
        <div className="pigeon-final-text">
          To pull off this challenge, you wil need three Nice Fun Zombies who
          know the territory so far:
        </div>
      </div>
      <button className="next-step-button" onClick={() => handleNext()}>
        Next
      </button>
    </div>
  );
}

export default Info;
