import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
    min-height: 60vh;
    max-width: 850px

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }

    .list-container {
        max-width: 900px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .skill {
        list-style: none;
        margin-left: 12px;
        margin-right: 12px;
        margin-bottom: 15px;
        background-color: var(--main-bg-light);
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 15px;
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        border-radius: 10px;
    }

`

const Skills = () => {

    const languages = ['Javascript', 'Ruby', 'Python', 'PostgreSQL']
    const frameworks = ['React', 'Redux', 'Ruby on Rails', 'Postgres', 'MongoDB', 'Express', 'NoSQL', 'Node.js', 'AJAX', 'Mongoose', 'Chart.js', 'jQuery', 'Selenium', 'Beautiful Soup']
    const other = ['Git', 'Github', 'AWS S3', 'Tableau', 'Excel', 'JIRA', 'Confluence']
    const prefersReducedMotion = usePrefersReducedMotion();
    const revealTitle = useRef(null)
    const revealSkills = useRef([])

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealTitle.current, srConfig());
        revealSkills.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    return (
        <>
            <StyledSkillsSection id="skills">

                <h2 className="numbered-heading" ref={revealTitle}>
                    My Technical Skills
                </h2>

                <div className='skills-list'>
                    <div className='skill-type' key={0} ref={el => (revealSkills.current[0] = el)}>
                        <h3>Languages</h3>
                        <ul className='list-container'>
                            {languages.map((language, idx) => {
                                return (
                                    <li key={idx} className='skill'>{language}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='skill-type' key={1} ref={el => (revealSkills.current[1] = el)}>
                        <h3>Frameworks, Libraries, & Databases</h3>
                        <ul className='list-container'>
                            {frameworks.map((ele, idx) => {
                                return (
                                    <li key={idx} className='skill'>{ele}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='skill-type' key={2} ref={el => (revealSkills.current[2] = el)}>
                        <h3>Other Technologies & Tools</h3>
                        <ul className='list-container'>
                            {other.map((ele, idx) => {
                                return (
                                    <li key={idx} className='skill'>{ele}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </StyledSkillsSection>
        </>
    )
}

export default Skills