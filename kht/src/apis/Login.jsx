import axios from 'axios';

const onLogin = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;

    try {
        const response = await axios.post(`${API_BASE_URL}/user/login`, {
            userId: data.userId,
            password: data.password
        });

        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        
        if(response.status == 201) {
            sessionStorage.setItem("token", JSON.stringify(accessToken));
            sessionStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            //console.log("로그인에 성공하였습니다.");
            alert('환영합니다.');
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              //console.log('login : 비밀번호가 일치하지 않습니다');
              alert('비밀번호가 일치하지 않습니다.');
            } else if (error.response.status === 404) {
              //console.log('login : 아이디를 찾을 수 없습니다');
              //console.log(error.response);
              alert('아이디를 찾을 수 없습니다.');
            } else {
              //console.log('login : 로그인 오류');
              alert('로그인 오류입니다.');
            }
        } else {
            //console.log('login : 네크워크 오류');
            alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onLogin;