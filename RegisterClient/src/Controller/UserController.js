import { GetUsersModel, AddUserModel } from '../Model/UserModel';

async function GetUsers() {
    try {
        const result = await GetUsersModel();
        return result;
    } catch (error) {
       return error.response; 
    }
}

async function AddUser(record) {
    try {
        const result = await AddUserModel(record);
        return result;
    } catch (error) {
        throw error.request;
    }
}

export { GetUsers, AddUser as AddUserToDb };