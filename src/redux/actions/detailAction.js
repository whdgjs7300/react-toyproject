import axios from 'axios';


const API_KEY=process.env.REACT_APP_API_KEY

// ID별 축제 디테일 페이지 출력하는 함수

function getFesDetail(id,) {
    return async(dispatch) => {
        try {
            dispatch({type : "GET_FESDETAIL_REQUEST" })

        const fesDetailApi = await axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`);


        const fesDetailList = fesDetailApi.data.getFestivalKr.item[0];

        dispatch({
            type : "GET_FESDETAIL_SUCCESS", 
            payload : {
                fesDetailList : fesDetailList,

            }
        })
        }
        catch(error) {
            dispatch({type : "GET_FESDETAIL_FAILURE" })
        }
    }

}

// ID별 레스토랑 디테일 페이지를 출력하는 함수

function getResDetail(id,) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESDETAIL_REQUEST" })

            const resDetailApi = await axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`);
        
        let resDetailList = resDetailApi.data.getFoodKr.item[0]
            
        dispach({
            type : "GET_RESDETAIL_SUCCESS", 
            payload : {
                resDetailList : resDetailList,
                
            }
        })
        }
        catch(error) {
            dispach({type : "GET_RESDETAIL_FAILURE" })
        }
    }

}

export const detailAction = {
    getFesDetail, getResDetail,
}