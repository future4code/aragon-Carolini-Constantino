import axios from "axios";
import { useEffect, useState} from "react";
import { keyAluno, url_base } from "../constants/url";
import App from "../App";


export default function ProfilesPage(){

    const [profile, setProfile] = useState({}) 

    const getProfile = () => {
        axios
        .get(`${url_base}${keyAluno}/person`)
        .then((res) => {
        setProfile(res.data.profile);
        console.log(res.data.profile) 
    })
    .catch((err) => {
        console.error(err.response)
    });
    }

    useEffect(() =>{
       getProfile();
    }, []);
    
  

   const profileCard = profile ? (
        <div>
            <img src={profile.photo}
            alt={profile["photo_alt"]}
            height={"3%"}></img>
            <h4>{profile.name}, {profile.age}</h4>
            <p>{profile.bio}</p>
            
        </div>
    
    ): (
        <div>
            <h2>Acabaram seus matches! Clique para reiniciar e tente novamente.</h2>
            <button>reiniciar</button>
        </div>
    ) 

    /*const ChooseProfile = () => {
        axios.post
    }*/

    /*const resetProfiles = () => {
        axios.put
    }*/



    return(
        <div>
            <h2>Perfis</h2>
            {profileCard}
        </div>
    )
}