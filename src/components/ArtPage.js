import axios from 'axios';
import {useState, useEffect} from 'react';
import styled from 'styled-components';


const ArtPage = ({token}) => {
    
    const [image, setImage] = useState("")
    const [prompt, setPrompt] = useState("")

    /*
    Make spotify api calls to set our prompt. Do this when our user says go
    during this, we have a use effect that reads when prompt changes, when ti does, it makes an api call to our backend to run the model
    */

    const [artists, setArtists] = useState([])
    const [tracks, setTracks] = useState([])

    const getArtists = () => {
        axios.get("	https://api.spotify.com/v1/me/top/artists", {
        params: {limit: 3, offset: 0, time_range:"short_term"},  
        headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            setArtists(response.data.items)
        })
    }

    const getTracks = () => {
        axios.get("	https://api.spotify.com/v1/me/top/tracks", {
        params: {limit: 3, offset: 0, time_range:"short_term"},  
        headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            setTracks(response.data.items)
        })
    }

    const getImage = () =>{
        axios.get("http://127.0.0.1:5000/" + prompt).then(res =>{
            setImage(res.config.url)
        });
    }

    const getPrompt = () =>{
        let currPrompt = ""
        for (let i = 0; i < tracks.length; i++){
            currPrompt += (tracks[i].name + " ") 
        }
        for (let i = 0; i < artists.length; i++){
            currPrompt += (artists[i].name + " ")
        }

        currPrompt = currPrompt.replaceAll('/', ' ')
        console.log(currPrompt)
        setPrompt(currPrompt)
        
    }

    useEffect(() =>{
        getArtists()
        getTracks()
        console.log("Use effect!")
    },[getArtists, getTracks])

    return ( 
    
    <ArtPageContainer>
            {image ? 
            <ImageContainer>
                <Image src={image}/>
                <Info>This image was created using the prompt: {prompt}</Info>
            </ImageContainer> : 
            
            <NoImageContainer>
                <BlankImage></BlankImage>
                <ButtonContainer>
                    {!prompt ? 
                    <Button onClick={getPrompt}>Get the prompt</Button> : 
                    <Button onClick={getImage}>Create the image!</Button>}
                </ButtonContainer>
            </NoImageContainer>}
            
            
    </ArtPageContainer> 
    
    );
}
 
export default ArtPage;

const ArtPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const NoImageContainer = styled.div``;

const ImageContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
`

const Button = styled.button`
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    color: white;
    background: #1DB954;

    transition: all .2s ease-in-out;
        &:hover{
            background: #004a99;
            transform: scale(1.1);
        }
`;

const BlankImage = styled.div`
    margin: 20px;
    width: 256px;
    height: 256px;
    background: gray;
    border-radius: 20px;
`;


const Image = styled.img`
    margin: 20px;
    width: 256px;
    height: 256px;
`;

const Info = styled.p`
    width: 256px;
`;
