import axios from "axios";
import { APIServiceURL } from './APIService';

class CatStatusService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/ctCatStatuses/');
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/ctCatStatuses/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/ctCatStatuses/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/ctCatStatuses/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/ctCatStatuses/', data);
    }
}

export default new CatStatusService();