import React, { Fragment, useState} from "react";

const DeliveryNumber = () => {
    const [deliveryNumber, setDeliveryNumber] = useState([]);
    const getDeliveryNumber = async () => {
        try {
            const response = await fetch(`http://localhost:4950/deliveryNumber`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const jsonData = await response.json();
            setDeliveryNumber(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    getDeliveryNumber();
    return <Fragment>
        <h1 className="text-center- mt-5">Delivery Summary (By Company Name)</h1>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Delivery Number</th>
                <th scope="col">Delivery Cost</th>
            </tr>
            </thead>
            <tbody>
            {deliveryNumber.map(deliveryNumber => (
                <tr>
                    <td>{deliveryNumber.companyname}</td>
                    <td>{deliveryNumber.count}</td>
                    <td>{deliveryNumber.sum}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </Fragment>
};

export default DeliveryNumber;