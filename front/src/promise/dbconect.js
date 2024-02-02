import axios from 'axios';
export const tableselect = async (tablenm) => {
    // wr_id, w 가변인자가 있는 함수로 처리하기
    //axios, await
    //예외처리
    try {
        // 시간함수걸리는 메서드
        return  axios.post(`/api?botable=${tablenm}`, {
                        headers: {
                            'Content-Type': 'application/json'
                        }                    
                    }
                )
    }catch (error) {
        return  error;
    }
}   