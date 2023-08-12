import React, { Fragment, useState} from "react";

const HealthyMeals = () => {
    const [healthyMeals, setHealthyMeals] = useState([]);
    const getHealthyMeals = async () => {
        try {
            const response = await fetch(`http://localhost:4950/healthymeals`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const jsonData = await response.json();
            setHealthyMeals(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    getHealthyMeals();
    return <Fragment>
        <h1 className="text-center- mt-5">All Healthy Meals That Customers Have Ordered (Average Calories Lower Than 500)</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Meal Name</th>    
                <th scope="col">Average Calories</th> 
                </tr>
            </thead>
            <tbody>
                {healthyMeals.map(healthyMeals => (
                    <tr>
                        <td>{healthyMeals.menuname}</td>
                        <td>{healthyMeals.avg}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default HealthyMeals;
