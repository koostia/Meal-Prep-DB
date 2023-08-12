import React, {Fragment, useState} from "react";

const EditCustomer = ({ customer }) => {

    const [customername, setCname] = useState(customer.customername);


    // Edit Customer Name function
    // Same with Delete, doesn't update until refreshed

    const updateCname = async(e) => {
        e.preventDefault();
        try {

            const body = {customername};
            const response = await fetch(`http://localhost:4950/customer/${customer.customerid}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>


        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${customer.customerid}`}>
        Edit
        </button>

        <div class="modal fade" id={`id${customer.customerid}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Customer</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type='text' className="form-control" value={customername} onChange={e => setCname(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updateCname(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>

    </Fragment>;
};

export default EditCustomer;