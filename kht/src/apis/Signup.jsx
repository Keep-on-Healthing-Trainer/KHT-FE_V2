import axios from 'axios';

const onSignup = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;

    try {
        //console.log(data);

        const response = await axios.post(`${API_BASE_URL}/user/signup`, {
            userId : data.userId,
            name : data.name,
            phoneNumber : data.phoneNumber,
            password : data.password,
            uncomfortableParts : []
        });
        
        if(response.status == 201) {
            //console.log("회원가입에 성공하였습니다.");
            alert('회원가입에 성공했습니다.');
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              //console.log('signup : 잘못된 요청입니다');
              alert('비밀번호가 일치하지 않습니다.');
            } else if (error.response.status === 404) {
              //console.log('signup : 페이지를 찾을 수 없습니다');
              //console.log(error.response);
              alert('페이지를 찾을 수 없습니다.');
            } else {
              //console.log('signup : 회원가입 오류');
              alert('회원가입 오류입니다.');
            }
        } else {
            //console.log('signup : 네크워크 오류');
            //console.log(error);
            alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onSignup;