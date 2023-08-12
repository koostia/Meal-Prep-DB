import React, {Fragment, useEffect, useState} from "react";
// import EditChef from "./EditChef";

const ListChef = () => {

    const [chef, setChef] = useState([]);
    const deleteChef = async cid => {
        try {
            const deleteChefResponse = await fetch(`http://localhost:4950/chef/${cid}`, {
                method: "DELETE"
            });

            setChef(chef.filter(chef => chef.chefid !== cid));
        } catch(err) {
            console.error(err.message);
        }
    }

    const getChefList = async () => {
        try {
            const response = await fetch("http://localhost:4950/ChefList")
            const jsonData = await response.json();

            setChef(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getChefList();
    });

    return <Fragment>

        <h1 className="text-center- mt-5">Chef</h1>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">Chef ID</th>
                <th scope="col">Chef Name</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {chef.map(chef => (
                <tr>
                    <td>{chef.chefid}</td>
                    <td>{chef.chefname}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => deleteChef(chef.chefid)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>

    </Fragment>


};
export default ListChef;