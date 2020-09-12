import axios from "axios";
import { APIServiceURL } from './APIService';

class SquadronService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/squadrons/');
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/squadrons/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/squadrons/', data);
    }

    // update(id: any, data: any) {
    //     return axios.put(this.url + `/api/squadron/${id}`, data);
    // }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/squadrons/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/squadrons/', data);
    }
}

export default new SquadronService();