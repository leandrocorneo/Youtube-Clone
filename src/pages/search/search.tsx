import { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import VideoSearch from "../../components/videoSearch/videoSearch";
import axios from "axios";
import { SearchContext } from "../../contexts/searchContext";
import { Container, MainContainer } from "./styles";
import { MenuContext } from "../../contexts/menuContext";
import moment from "moment";
import CategoryBar from "../../components/categoryBar";


function Search(){
   
    interface Videos{
        id: string;
          snippet: {
            title: string;
            description: string;
            thumbnails: {
              high: {
                url: string
              }
              maxres: {
                url: string;
              }
            }
            channelTitle: string;
            publishedAt: string;
          },
        statistics: {
            viewCount: string;
        }
    }

    const {search} = useContext(SearchContext);
    const {openMenu} = useContext(MenuContext);

    const [videos, setVideos] = useState<Videos[]>([]);

    const API_KEY = 'AIzaSyD-D7tnTYKX-PpFA62nG9LOuXVDEHkiw3E';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`
    

    useEffect(() => {
        if(search !== ''){
            load();
        }
    }, [search]);


    async function load(){
        try {
            const response = await axios.get(url);
            setVideos(response.data.items);   
        }catch(error){
            console.log(error);
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');
    
        if (diffDays <= 0) {
          return 'hoje';
        } else if (diffDays === 1) {
          return 'há 1 dia';
        } else if (diffDays <= 7) {
          return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
          const diffWeeks = Math.floor(diffDays / 7);
          if (diffWeeks === 1) {
            return 'há 1 semana';
          } else {
            return `há ${diffWeeks} semanas`;
          }
        } else if (diffDays <= 365) {
          const diffMonths = Math.floor(diffDays / 30);
          if (diffMonths === 1) {
            return 'há 1 mês';
          } else {
            return `há ${diffMonths} meses`;
          }
        } else {
          const diffYears = Math.floor(diffDays / 365);
          if (diffYears === 1) {
            return 'há 1 ano';
          } else {
            return `há ${diffYears} anos`;
          }
        }
      }

    return(
        <MainContainer>
            <Header />
            <Menu />
              <Container openMenu={openMenu}>
                <CategoryBar />
                  {videos.map((video) => (
                      <VideoSearch title={video.snippet.title}
                      thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                      channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                      channelName={video.snippet.channelTitle}
                      details={`147 mil visualizações - ${getPublishedTime(video.snippet.publishedAt)}`}
                      description={video.snippet.description}
                      key={video.id}/>
                  ))}
              </Container>
        </MainContainer>
    )
}

export default Search;