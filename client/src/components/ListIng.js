import React, {Fragment, useEffect, useState} from "react";

const ListIng = () => {

    const [Ing, SetIng] = useState([]);

    const getIng = async () => {
        try {

            const response = await fetch("http://localhost:4950/Ing")
            const jsonData = await response.json();

            SetIng(jsonData);
        } catch {

        }

    }

    useEffect(() => {
        getIng();
    });

    return <Fragment>

        <h1 className="text-center- mt-5">Ingredient List</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Ingredient ID</th>
                <th scope="col">Ingredient Name</th>
                </tr>
            </thead>
            <tbody>
                {Ing.map(Ing => (
                    <tr>
                        <td>{Ing.ingid}</td>
                        <td>{Ing.ingname}</td>
                    </tr>
                ))}
            </tbody>
        </table>


    </Fragment>

    

};

export default ListIng;