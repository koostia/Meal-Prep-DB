import React, {Fragment, useEffect, useState} from "react";

const DeliveryService = ( ) => {

    const [ delivery, setDelivery] = useState([]);

    const getDelivery = async () => {
        try {
            const response = await fetch(`http://localhost:4950/Delivery`, {
                method: "GET"
            });
            const jsonData = await response.json();

            setDelivery(jsonData);
        } catch(err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getDelivery();
    });


    return <Fragment>

        <h1 className="text-center- mt-5">Delivery List</h1>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">Driver Id</th>
                <th scope="col">Company Name</th>
                <th scope="col">Driver Name</th>
                <th scope="col">Vehicle Make</th>
                <th scope="col">Vehicle Model</th>
            </tr>
            </thead>
            <tbody>
            {delivery.map(delivery => (
                <tr>
                    <td>{delivery.driverid}</td>
                    <td>{delivery.companyname}</td>
                    <td>{delivery.drivername}</td>
                    <td>{delivery.vehiclemake}</td>
                    <td>{delivery.vehiclemodel}</td>

                </tr>
            ))}
            </tbody>
        </table>

    </Fragment>

};

export default DeliveryService;