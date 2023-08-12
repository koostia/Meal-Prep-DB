import React, { Fragment, useState, useEffect } from "react";

const CustomerMeals = () => {
    const [cid, setCid] = useState();
    const [splitTable, setSplitTable] = useState([]);
    const getSplit = async (e) => {
        try {
            const response = await fetch(`http://localhost:4950/mealsOrdered?cid=${cid}`, {
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

        <h1 className="text-center- m5"> Number of Meals a Customer has Ordered (By Meal Type) </h1>

        <input type='text' className="form-control mt-3" placeholder="Enter Customer ID" value={cid} onChange={e => setCid(e.target.value)} />
        <button type="button" class="btn btn-primary mt-3" onClick={getSplit}>Get MealType Split for Customer</button>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Meal Type</th>    
                <th scope="col">Number of Meals</th> 
                </tr>
            </thead>
            <tbody>
                {splitTable.map(splitTable => (
                    <tr>
                        <td>{splitTable.mealtype}</td>
                        <td>{splitTable.sum}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default CustomerMeals;
