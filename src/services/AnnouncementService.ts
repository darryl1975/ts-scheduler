import axios from "axios";
import { APIServiceURL } from './APIService';

class AnnouncementService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/announcements/');
    }

    getBySquadronId(id: any) {
        return axios.get(APIServiceURL + `/api/squadrons/${id}/announcements/`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/announcements/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/announcements/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/announcements/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/announcements/', data);
    }
}

export default new AnnouncementService();