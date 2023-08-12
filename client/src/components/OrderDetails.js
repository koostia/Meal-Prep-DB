import React, { Fragment, useState, useEffect } from "react";

const OrderDetails = () => {
    const [oid, setOid] = useState();
    const [splitTable, setSplitTable] = useState([]);
    const getSplit = async (e) => {
        try {
            const response = await fetch(`http://localhost:4950/OrderInfo?oid=${oid}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const jsonData = await response.json();
            setSplitTable(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getSplit();
    },[]);
    return <Fragment>

        <h1 className="text-center- m5"> Order Information </h1>

        <input type='text' className="form-control mt-3" placeholder="Enter Order ID" value={oid} onChange={e => setOid(e.target.value)} />
        <button type="button" class="btn btn-primary mt-3" onClick={getSplit}>Get Details</button>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Meal Name</th>    
                <th scope="col">Quantity</th> 
                </tr>
            </thead>
            <tbody>
                {splitTable.map(splitTable => (
                    <tr>
                        <td>{splitTable.menuname}</td>
                        <td>{splitTable.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default OrderDetails;