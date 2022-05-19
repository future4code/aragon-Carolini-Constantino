import axios from "axios";
import { useEffect, useState } from "react";
import { keyAluno, url_base } from "../../constants/url";
import { CardProfile } from "./styled";
import like from "../../img/like.png";
import dislike from "../../img/dislike.png"

export default function ProfilesPage() {

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

    useEffect(() => {
        getProfile();
    }, []);

    const crushCard = profile ? (
        <div>
             <CardProfile> 
            <img src={profile.photo}
                alt={profile["photo_alt"]}
                height={"300px"}></img>
            <h4>{profile.name}, {profile.age}</h4>
            <p>{profile.bio}</p>   
            <button onClick={() => { profileAnalyzed(profile.id, true) }}><img src={like}/> </button>
            <button onClick={() => { profileAnalyzed(profile.id, false) }}><img src={dislike}/></button>
            </CardProfile>
        </div>
/*/>
<img src={dislike}/> */
    ) : (
        <div>
            <h2>Acabaram seus matches! Clique para reiniciar e tente novamente.</h2>
            <button onClick={() => resetProfiles()}>reiniciar</button>
        </div>
    )

    const profileAnalyzed = (profileId, choice) => {
        const body = {
            id: profileId,
            choice: choice
        }
        axios.post(`${url_base}${keyAluno}/choose-person`, body)
            .then((res) => {
                if (body.choice && res.data.isMatch) {
                    alert("deu MATCH!");
                };
                getProfile(); //ñ entendi essa parte
            })
            .catch((err) => {
                console.err(err.message);
            });
    };

    const resetProfiles = () => {
        axios.put(`${url_base}${keyAluno}/clear`)
            .then(() => {
                alert("Já temos novos crushs para você!");
                getProfile();
            })
            .catch((err) => {
                console.err(err.message)
            })
    }



    return (
        <div>
            <h2>Perfis</h2>
            {crushCard}
        </div>
    )
}