const axios = require('axios');

axios.interceptors.response.use(async function (response) {
    return response;
}, function(error) {
    return error;
});

const getData = async (url) => {
    return await axios.get(url);
}

const postData = async (url, data) => {
    return await axios.post(url, data);
}

const putData = async (url, data) => {
    return await axios.put(url, data);
}

const patchData = async (url, data) => {
    return await axios.patch(url, data);
}

const deleteData = async (url, data) => {
    return await axios.delete(url);
}

module.exports = {
    getData,
    postData,
    putData,
    patchData,
    deleteData
}
