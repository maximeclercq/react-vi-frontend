import {handleResponse} from "../helpers/helper";

const BACKEND_URL = "http://127.0.0.1:5000";

export async function queryGov(country, dataType) {
    console.log(BACKEND_URL)
    const response = await fetch(`${BACKEND_URL}/gov/${country}/${dataType}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {'Content-Type':  'application/json'}
    });
    return handleResponse(response);
}
