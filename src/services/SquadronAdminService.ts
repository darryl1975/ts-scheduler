import axios from "axios";
import { APIServiceURL } from './APIService';

class SquadronAdminService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/squadronAdmins/');
    }

    getById(email: any) {
        return axios.get(APIServiceURL + `/api/squadronAdmins/${email}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/squadronAdmins/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/squadronAdmins/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/squadronAdmins/', data);
    }
}

export default new SquadronAdminService();