import styled from 'styled-components';

const About = () => {
    return ( 
        <AboutContainer>
            <Info>Welcome to Spotif-ai</Info>
            <p>Using your top songs, artists, and vibes, we will make you a playlist cover using AI</p>
        </AboutContainer>
     );
}
 
export default About;

const AboutContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Info = styled.h1``;
