import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ResCard = ({gu, item}) => {


    console.log(item.MAIN_TITLE)
    return (
    <Card style={{ 
        width: '14rem',
        padding : "10px 15px" ,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        backgroundColor : "rgba(255, 255, 255, 0.8)",
        
        }}>
        <Card.Img 
        style={{
            width : "100%",
            height : "auto",

        }}
        variant="top" src={item.MAIN_IMG_THUMB} />
        <Card.Body style={{
            padding : "10px 0",
            textAlign : "center"
        }}>
            <Card.Title style={{
                fontSize : "18px",
                fontWeight : "bold",
                marginTop : "10px",
                marginBottom : "15px"
            }}>{item.MAIN_TITLE}</Card.Title>
            <Card.Text style={{
                marginTop : "10px",
                fontSize : "12px",
                overflow : "hidden",
                textOverflow : "ellipsis",
                whiteSpace : "nowrap",
            }}>
                
                    <p style={{
                        fontSize : "14px",
                        fontWeight : "600"
                    }}>주소</p> 
                    {item.ADDR1}
                    <hr />
                    <p style={{
                        fontSize : "14px",
                        fontWeight : "600"
                    }}>전화번호 </p> 
                    {item.CNTCT_TEL}
                    <hr />
                    <p style={{
                        fontSize : "14px",
                        fontWeight : "600"
                    }}>영업시간</p>
                    {item.USAGE_DAY_WEEK_AND_TIME}
                
            </Card.Text>
            
        </Card.Body>
    </Card>
    );
}

export default ResCard;