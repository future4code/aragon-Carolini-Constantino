import { useParams } from "react-router-dom";
import { DetailsCard } from "../../components/DetailsCard/DetailsCard";
import { Body } from "./style"
import Header from "../../components/Header/Header";
import { API_DETAIL, API_KEY } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";



export default function MoviePage() {
   
const params = useParams();
console.log({parâmetro: params.movie_id})
 const [data] = useRequestData(API_DETAIL,`${params.movie_id}?${API_KEY}`, []);

 const [video] = useRequestData(API_DETAIL,`${params.movie_id}/watch/providers?${API_KEY}`, []);

 const trailer = video.results

 const [recommendations] = useRequestData(API_DETAIL,`${params.movie_id}/recommendations?${API_KEY}`, []);

     return(
        <main>
        <Header></Header>
        <Body>
        <DetailsCard
        movie={data}
        trailer={trailer}
        recommendentions={recommendations}
        />
        </Body>
        </main>
     )
}