import axios from "axios";
import { APIServiceURL } from './APIService';

class CatColorService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/ctColours/');
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/ctColours/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/ctColours/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL+ '/api/ctColours/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/ctColours/', data);
    }
}

export default new CatColorService();