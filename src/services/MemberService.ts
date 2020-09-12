import axios from "axios";
import { APIServiceURL } from './APIService';

class SquadronMemberService {

    // to refactor to global
    url: string = 'http://costa-backend.azurewebsites.net';

    getAll() {
        return axios.get(APIServiceURL + '/api/squadronMembers/');
    }

    getBySquadronId(id: any) {
        return axios.get(APIServiceURL + `/api/squadrons/${id}/squadronMembers/`);
    }

    getById(id: any) {
        return axios.get(APIServiceURL + `/api/squadronMembers/${id}`);
    }


    create(data: any) {
        return axios.post(APIServiceURL + '/api/squadronMembers/', data);
    }

    // update(id: any, data: any) {
    //     return axios.put(this.url + `/api/squadronMember/${id}`, data);
    // }

    update(data: any) {
        return axios.put(APIServiceURL + '/api/squadronMembers/', data);
    }


    delete(data: any) {
        return axios.delete(APIServiceURL + '/api/squadronMembers/', data);
    }
}

export default new SquadronMemberService();