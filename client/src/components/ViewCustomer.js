import React, {Fragment, useEffect, useState} from "react";

// WIP NOT COMPLETE

const ViewCustomer = ({ customer }) => { 

    const [cus, setCustomer] = useState([]);

    const getCustomer = async (id) => {
        try {
            const response = await fetch(`http://localhost:4950/customer/${id}`, {
                method: "GET"
            });
            const jsonData = await response.json();

            setCustomer(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getCustomer(customer.customerid);
    }, [customer.customerid]);

    return <Fragment>

        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target={`#idv${customer.customerid}`}>
        View
        </button>

        <div class="modal fade" id={`idv${customer.customerid}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Customer Informations</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">House Number</th>
                <th scope="col">Street</th>
                <th scope="col">Postal Code</th>
                <th scope="col">Province</th>
                <th scope="col">Credit Card Information</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>{customer.customerid}</td>
                        <td>{customer.customername}</td>
                        <td>{cus.phone}</td>
                        <td>{cus.housenum}</td>
                        <td>{cus.street}</td>
                        <td>{cus.postalcode}</td>
                        <td>{cus.province}</td>
                        <td>{cus.creditcardinfo}</td>
                    </tr>
                
            </tbody>
        </table>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

    </Fragment>

};

export default ViewCustomer;