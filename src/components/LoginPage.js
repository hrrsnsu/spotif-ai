import styled from 'styled-components';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';
import logo from '../images/spotify_logo.svg';
import About from './About'
import ArtPage from './ArtPage'
const LoginPage = () => {

    
    const [token, setToken] = useState("")
    //use effect when token is gotten to make an api call that and send information to art page

    return ( 
        <div>
            <NavbarContainer>
                <Logo>
                    <Image src={logo}/>
                    <Text> - ai</Text>
                </Logo>
                <Information>
                    <Info> Created by Harrison Su </Info>
                {!token && <SpotifyAuth 
                    clientID='d88050dfc12a4cf98299d19f165ddb92'
                    scopes={['user-read-email', 'playlist-read-private', 'user-top-read']}
                    onAccessToken={(token) =>setToken(token)}/>}
                </Information>
            </NavbarContainer>
            
            {token ? 
            <ArtPage token={token}/>: <div>
                <About/>
                </div>}
        </div>
        
     );
}
/*
<div>
            
            {!token ? <h1> Welcome to spotif-ai</h1> : <div>Art Page</div>}
            
        </div>
*/
export default LoginPage;

const NavbarContainer = styled.div`
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`

const Logo = styled.div`
    display:flex;
    align-items: center;
`

const Image = styled.img`
    height: 10vh;
    width: 15vw;
`;

const Text = styled.h1`
    color: #1DB954;
    font-size: 5vh;
    font-size: 3vw;
`;


const Information = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Info = styled.h1`
    color: white;
    font-size: 3vh;
    font-size: 1vw;
    margin-right: 20px;
`;


