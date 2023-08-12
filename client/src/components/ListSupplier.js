import React, {Fragment, useEffect, useState} from "react";

const ListSupplier = ( ) => {

    const [supplier, setSupplier] = useState([]);

    const getSupplier = async () => {
        try {
            const response = await fetch(`http://localhost:4950/Supplier`, {
                method: "GET"
            });
            const jsonData = await response.json();

            setSupplier(jsonData);
        } catch(err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getSupplier();
    });


    return <Fragment>

<h1 className="text-center- mt-5">Supplier List</h1>

<table class="table">
    <thead>
        <tr>
        <th scope="col">Supplier ID</th>
        <th scope="col">Supplier Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        </tr>
    </thead>
        <tbody>
            {supplier.map(supplier => (
                <tr>
                    <td>{supplier.supplierid}</td>
                    <td>{supplier.sname}</td>
                    <td>{supplier.phone}</td>
                    <td>{supplier.address}</td>
                    
                </tr>  
            ))}     
        </tbody>
    </table>

    </Fragment>

};

export default ListSupplier;