import React, {Fragment, useEffect, useState} from "react";

const ListOrder = () => {

    const [orders, setOrdersList] = useState([]);

    const getOrderList = async () => {
        try {
            const response = await fetch("http://localhost:4950/Order_Makes_Sent_List")
            const jsonData = await response.json();

            setOrdersList(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getOrderList();
    });

    return <Fragment>

        <h1 className="text-center- mt-5">Orders List</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Order ID</th>    
                <th scope="col">Customer ID who Placed Order</th> 
                <th scope="col">Order Status</th>
                <th scope="col">Cost of Order</th>
                </tr>
            </thead>
                <tbody>
                    {orders.map(orders => (
                        <tr>
                            <td>{orders.orderid}</td>
                            <td>{orders.customerid}</td>
                            <td>{orders.orderstatus}</td>
                            <td>{orders.cost}</td>
                        </tr>  
                    ))}     
                </tbody>
            </table>

    </Fragment>


};

export default ListOrder;