import { useLocation } from 'react-router-dom';


function AppHeader() { 



    const locate = useLocation();
    const {book} = locate.state
    console.log(book)
    return(
        <>
        <h4 className="app-header">PAYMENT ช่องทางการจ่ายเงิน</h4>
        {/* <h4 className="price-header"> {book.Prices} Bath</h4> */}
        
        </>
    );
}
export default AppHeader; 