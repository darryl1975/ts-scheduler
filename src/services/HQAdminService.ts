import axios from "axios";
import { APIServiceURL } from './APIService';

class HQAdminService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/hqAdmins/');
    }

    getById(email: any) {
        return axios.get(APIServiceURL + `/api/hqAdmins/${email}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/hqAdmins/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/hqAdmins/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/hqAdmins/', data);
    }
}

export default new HQAdminService();