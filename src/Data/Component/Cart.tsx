import React from 'react'
import "./style.css"
interface Props{
 onClick: () => void
}
function Cart(props: Props) {
    return (
      
            <div id="page-cart">
                <div className="container">
                <table id="cart">
                    <thead>
                        <tr>
                            <th className="first">Ảnh</th>
                            <th className="second">Tên</th>
                            <th className="third">Số lượng</th>
                            <th className="fourth">Giá</th>
                            <th className="fifth">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="productitm">

                            <td>
                                <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png" className="thumb" />
                            </td>
                            <td>
                                <p>Tên</p>
                            </td>
                            <td>
                                <div className='td-qyt'> <button>-</button><span>0</span><button>+</button></div>
                            </td>
                          
                            <td>$79.00</td>
                          
                          
                            <td><button>Xóa</button></td>
                        </tr>
                        <tr className="totalprice">
                            <td colSpan={3}>&nbsp;</td>
                            <td colSpan={2}>
                                <div className='td-total-price'><p>Tổng giá tiền</p>
                                    <span className="thick">$225.45</span></div>
                            </td>
                        </tr>
                        <tr className="checkoutrow">
                            <td colSpan={5} >
                                <div className="checkout">
                                    <button id="submitbtn" onClick={props.onClick}>Checkout Now</button>
                                    <button id="submitbtn" onClick={props.onClick}>Xóa tất cả</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        

    )
}

export default Cart
