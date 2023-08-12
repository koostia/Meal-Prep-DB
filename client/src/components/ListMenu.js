import React, {Fragment, useEffect, useState} from "react";

const ListMenu = () => {

    const [menu, setMenu] = useState([]);

    const getMenuList = async () => {
        try {
            const response = await fetch("http://localhost:4950/MenuItemFind")
            const jsonData = await response.json();

            setMenu(jsonData);
        } catch {

        }
    }

    useEffect(() => {
        getMenuList();
    });

    return <Fragment>

        <h1 className="text-center- mt-5">Menu</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Menu ID</th>    
                <th scope="col">Meal Name</th> 
                <th scope="col">Meal Type</th>
                <th scope="col">Calories</th>
                <th scope="col">Cost</th>
                </tr>
            </thead>
                <tbody>
                    {menu.map(menu => (
                        <tr>
                            <td>{menu.menuid}</td>
                            <td>{menu.menuname}</td>
                            <td>{menu.mealtype}</td>
                            <td>{menu.calories}</td>
                            <td>{menu.cost}</td>
                        </tr>  
                    ))}     
                </tbody>
            </table>

    </Fragment>


};

export default ListMenu;