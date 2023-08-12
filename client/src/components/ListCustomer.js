import React, {Fragment, useEffect, useState} from "react";
import EditCustomer from "./EditCustomer";
import ViewCustomer from "./ViewCustomer";

const ListCustomer = () => {

    const [customer, setCustomer] = useState([]);

    // Delete customer function, while only work if customer has made no orders

    const deleteCustomer = async cid => {
        try {
            const deleteCustomerResponse = await fetch(`http://localhost:4950/customer/${cid}`, {
                method: "DELETE"
            });
    
            setCustomer(customer.filter(customer => customer.customerid !== cid));
        } catch(err) {
            console.error(err.message);
        }
    }

    const getCustomer = async () => {
        try {
            const response = await fetch("http://localhost:4950/customer")
            const jsonData = await response.json();

            setCustomer(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getCustomer();
    });

    return <Fragment>

        <h1 className="text-center- mt-5">Customer List</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">View</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {customer.map(customer => (
                    <tr>
                        <td>{customer.customerid}</td>
                        <td>{customer.customername}</td>
                        <td>
                            <ViewCustomer customer={customer} />
                        </td>
                        <td>
                            <EditCustomer customer={customer}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteCustomer(customer.customerid)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default ListCustomer;