import axios from "axios";
import config from '../Assets/config.json';

function GetUsersModel() {
    return axios.get(config.apiUrl + config.locations.getUsers);
}

function AddUserModel(record) {
    return axios.post(config.apiUrl + config.locations.addUser, record);
}

export { GetUsersModel, AddUserModel };