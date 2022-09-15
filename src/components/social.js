import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  .link-wrap {
    display: flex;
    flex-direction: row;
  }

  .link-type {
    display: none;
    margin-left: 50px;
    margin-top: 5px;
    position: absolute;
    background-color: var(--main-bg-lightest);
    padding: 10px 15px 5px 15px;
    border-radius: 12px;
    min-width: 140px;
    text-align: center;
    font-weight: 500;
  }

  li {
    display: flex;
    flex-direction: row;

    &:last-of-type {
      margin-bottom: 20px;
    }

    &:hover + .link-type {
      display: block;
      }

    a {
      padding: 8px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <div key={i} className='link-wrap'>
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
            <div className='link-type'>My {name}</div>
          </div>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
