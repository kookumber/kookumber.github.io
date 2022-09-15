import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--white-font);
    line-height: 0.9;
  }

  p {
    margin: 19px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .details-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .profile-details {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .profile-pic-container {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-left: 80px;
  }

  .profile-pic {
    display: block;
  
    border-radius: 50%;

  }

`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h2 className="big-heading">
    
    Hello! I'm Quang.
    </h2>;
  const two = <h3 className="big-heading">I enjoy building things with code :)</h3>;
  const three = (
    <div className='profile-details'>
      <div>
      <p>I'm a software engineer focused on building fullstack projects. I enjoy the different natures and required skillsets of both backend and frontend development.</p>
      <p>Prior to programming, I had roles in Business & Sales Operations, Commercial, and Payment Operations. Through those roles, I realized that I truly enjoyed
        building good products that people want to use. Upon that realization, I decided to transition to a programming career.</p>
      <p>Outside of work, I love spending my time outdoors, specifically at the ocean, surfing, or on the tennis
        courts. I also enjoy learning about Web3, blockchains, and cryptocurrency.</p>
      </div>
      <div className='profile-pic-container'>
        <StaticImage 
            className='profile-pic'
            src="../../images/profile_v2.jpg"
            quality={95}
            objectPosition={'top'}
            alt="Headshot"/>
      </div>
    </div>
  );
  

  const items = [one, two, three];

  return (
    <StyledHeroSection id="about">
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
