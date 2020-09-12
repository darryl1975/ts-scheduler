import axios from "axios";
import { APIServiceURL } from './APIService';

class PositionService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/positions/');
    }

    getBySquadronId(id: any) {
        return axios.get(APIServiceURL + `/api/squadrons/${id}/positions`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/positions/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/positions/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/positions/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/positions/', data);
    }
}

export default new PositionService();