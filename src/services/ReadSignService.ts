import axios from "axios";
import { APIServiceURL } from './APIService';

class ReadSignService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/readAndSigns/');
    }

    getBySquadronId(id: any) {
        return axios.get(APIServiceURL + `/api/squadrons/${id}/readAndSigns/`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL+ `/api/readAndSigns/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/readAndSigns/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/readAndSigns/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/readAndSigns/', data);
    }
}

export default new ReadSignService();