import axios from "axios";
import { APIServiceURL } from './APIService';

class SquadronAdminTaskService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/squadronAdminTasks/');
    }

    getBySquadronId(id: any) {
        return axios.get(APIServiceURL + `/api/squadrons/${id}/squadronAdminTasks/`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/squadronAdminTasks/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/squadronAdminTasks/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/squadronAdminTasks/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/squadronAdminTasks/', data);
    }
}

export default new SquadronAdminTaskService();