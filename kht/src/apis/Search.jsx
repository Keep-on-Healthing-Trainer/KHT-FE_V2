import axios from 'axios';

const onSearch = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;

    const result = await sessionStorage.getItem('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.get(`${API_BASE_URL}/user/search?name=${data}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 200) {
            //console.log('유저 정보 가져오기에 성공했습니다');
            //console.log(response.data);
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              //console.log('search : 유저를 찾을 수 없습니다');
              alert('유저를 찾을 수 없습니다.');
            } else {
              //console.log('search : 유저 정보 가져오기 오류');
              //console.log(error.response);
              alert('유저 정보 가져오기 오류입니다.');
            }
        } else {
            //console.log('search : 네트워크 오류');
            alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onSearch;