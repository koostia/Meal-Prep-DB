import React, { Fragment, useState, useEffect } from "react";

const Menu = () => {

    const [mealKind, setMealKind] = useState();
    const [menuTable, setMenuTable] = useState([]);
    const [calories, setCalories] = useState();

    async function handleChange(event) {
        setMealKind(event.target.value);
    }

    const getMenu = async (e) => {
        try {
            if (mealKind === "snack") {
                const response = await fetch(`http://localhost:4950/MenuSnack?calories=${calories}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const jsonData = await response.json();
                setMenuTable(jsonData);
            }
            if (mealKind === "entree") {
                const response = await fetch(`http://localhost:4950/MenuEntree?calories=${calories}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const jsonData = await response.json();
                setMenuTable(jsonData);
            }
            if (mealKind === "drink") {
                const response = await fetch(`http://localhost:4950/MenuDrink?calories=${calories}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const jsonData = await response.json();
                setMenuTable(jsonData);
            }




            //  window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getMenu();
    }, []);
    return <Fragment>

        <h1 className="text-center- m5"> Select Meal Type and Filter by Calories </h1>

        <div>
            <label>
                <input type="radio" value="snack" checked={mealKind === 'snack'} onChange={handleChange} />
                Snack
            </label>
            <br />
            <label>
                <input type="radio" value="drink" checked={mealKind === 'drink'} onChange={handleChange} />
                Drink
            </label>
            <br />
            <label>
                <input type="radio" value="entree" checked={mealKind === 'entree'} onChange={handleChange} />
                Entree
            </label>
        </div>
        <form>
            <input type='text' className="form-control mt-3" placeholder="Calories" value={calories} onChange={e => setCalories(e.target.value)} />
        </form>
        <button type="button" class="btn btn-primary mt-3" onClick={getMenu}>Filter Menu</button>
        <table class="table">
            <thead>
                <tr>   
                <th scope="col">Meal Name</th> 
                <th scope="col">Cost</th> 
                </tr>
            </thead>
            <tbody>
                {menuTable.map(menuTable => (
                    <tr>
                        <td>{menuTable.menuname}</td>
                        <td>{menuTable.cost}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment >;
};

export default Menu;