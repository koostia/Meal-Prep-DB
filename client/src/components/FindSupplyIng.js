import React, {Fragment, useEffect, useState} from "react";
// Find the SupplyID of all Supplies which contains a specific Ingredient
// SELECT s.SID
// FROM Supply s, Has h, Ingredients i
// WHERE i.IngID = h.IngID AND h.SID = s.SID AND i.IngName = $1
const FindSupplyIng = () => {

    const [iName, setIName] = useState([]);
    const [supply, setSupply] = useState([]);

    const onSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:4950/Supply_Has?iName=${iName}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const jsonData = await response.json();

            setSupply(jsonData);

        } catch(err) {
            console.error(err.message);
        }
    }

    return <Fragment>

        <h1 className="text-center- mt-5">
            SupplyID For Ingredient
        </h1>

        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <div class="mb-3 mx-auto">
                <input type="text" className="form-control" placeholder="Ingredient Name" value ={iName} onChange={e => setIName(e.target.value)}/>
            </div>
            <button className="btn btn-success">Search</button>
        </form>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Supply ID</th>
                    <th scope="col">Supplier ID in Charge of Supply</th>
                </tr>
            </thead>
            <tbody>
                {supply.map(supply => (
                    <tr key={supply.sid}>
                        <td>{supply.sid}</td>
                        <td>{supply.supplierid}</td>
                    </tr>
                ))}
            </tbody>
        </table>


    </Fragment>


};

export default FindSupplyIng;