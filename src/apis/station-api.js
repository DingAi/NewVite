import axios from "axios";

const stationUrl = 'xu/real_time_data'

const getStation1 = async () =>{
    const slaveNum = 1;
    try {
        const response = await axios.post(stationUrl,{slave_num:slaveNum, ids:[1,2,3,4]});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getStation1,
}