import { ANIME } from '@consumet/extensions';
export const FetchAnimeInfo = async(animeId)=>{
    try {
        const gogoanime = new ANIME.Gogoanime();
        const response = await gogoanime.fetchAnimeInfo(animeId);
        return response; 
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; 
    }
}
