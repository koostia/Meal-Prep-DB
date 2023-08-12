import React, {Fragment, useEffect, useState} from "react";

// Works but need to add more to it

const SeeSupplyIng = () => {

    const [supply, setSupply] = useState([]);


    const getSupply = async () => {
        try {
            const response = await fetch("http://localhost:4950/Supplier_supplies_ing")
            const jsonData = await response.json();

            setSupply(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getSupply();
    });

    return <Fragment>
        <h1 className="text-center- mt-5">SuppliersID Who Supplied All Ingredients</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Supplier ID</th>
                </tr>
            </thead>
                <tbody>
                    {supply.map(supply => (
                        <tr>
                            <td>{supply.supplierid}</td>
                            {/* <td>
                                <ListSupplier supply={supply}/>
                            </td> */}
                        </tr>  
                    ))}     
                </tbody>
            </table>



    </Fragment>

};

export default SeeSupplyIng;