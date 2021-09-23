import sendRequest from './send-request';

const BASE_URL = '/api/ingredients';

export async function getAll() {
    return sendRequest(`${BASE_URL}/allIngredients`, 'POST')
}

export async function getOne(id){
    return sendRequest(`${BASE_URL}/${id}`, 'POST')
}