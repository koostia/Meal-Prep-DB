import React, {Fragment, useEffect, useState} from "react";

const ViewCustomerOrderGB = () => {


    const [order, setOrder] = useState([]);


    const getOrder = async () => {
        try {
            const response = await fetch("http://localhost:4950/Order_Makes_Sent")
            const jsonData = await response.json();

            setOrder(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getOrder();
    });

    return <Fragment>

        <h1 className="text-center- mt-5">Average Order Cost Group By Order Status (Must Have More Than One Order)</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Order Status</th>
                <th scope="col">Average Cost Per Order</th>
                </tr>
            </thead>
                <tbody>
                    {order.map(order => (
                        <tr>
                            <td>{order.orderstatus}</td>
                            <td>{order.avg_order_cost}</td>
                        </tr>  
                    ))}     
                </tbody>
            </table>
    </Fragment>
};

export default ViewCustomerOrderGB;