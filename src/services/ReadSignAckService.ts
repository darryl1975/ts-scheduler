import axios from "axios";
import { APIServiceURL } from './APIService';

class ReadSignAckService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/readAndSignAcknowledgements/');
    }

    getByReadSignId(id: any) {
        return axios.get(APIServiceURL + `/api/readAndSigns/${id}/readAndSignAcknowledgements/`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/readAndSignAcknowledgements/${id}`);
    }

    create(data: any) {
        return axios.post(APIServiceURL + '/api/readAndSignAcknowledgements/', data);
    }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/readAndSignAcknowledgements/', data);
    }

    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/readAndSignAcknowledgements/', data);
    }
}

export default new ReadSignAckService();