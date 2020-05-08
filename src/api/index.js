import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        // Data destructuring
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
        console.log({ data: { confirmed, recovered, deaths, lastUpdate } });
        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.error(error);
    }
}

export const fetchDailDate = async ()=>{
    try {
        const response = await axios.get(`${url}/daily`);

        console.log(response);
        
        return response;
    } catch (error) {
        console.log(error);
    }
} 