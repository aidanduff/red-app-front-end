import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

class ItemDataService {

    retrieveAllItems() {
        console.log('in retrieve');
        return axios.get(`${BASE_URL}/items`);
    }

    retrieveItem(id) {
        return axios.get(`${BASE_URL}/item/${id}`);
    }

    updateItem(id, item) {
        return axios.put(`${BASE_URL}/item/${id}`, item);
    }
  
    createItem(item) {
        return axios.post(`${BASE_URL}/items`, item);
    }

    deleteItem(id) {
        console.log('executed service')
        return axios.delete(`${BASE_URL}/item/${id}`);
    }
}

export default new ItemDataService()