import axios from "axios";
import { APIServiceURL } from './APIService';

class AnnouncementAckService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/announcementAcknowledgements/');
    }

    getByAnnouncementId(id: any) {
        return axios.get(APIServiceURL + `/api/announcements/${id}/announcementAcknowledgements/`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/announcementAcknowledgements/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/announcementAcknowledgements/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/announcementAcknowledgements/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/announcementAcknowledgements/', data);
    }
}

export default new AnnouncementAckService();