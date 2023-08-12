const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors())
app.use(express.json()); // req.body

app.post("/customer", async (req, res) => {
    try {
        const { Cname, Phone, CCI, HouseNum, Street, PC, Province } = req.body;
        const newCustomer = await pool.query("INSERT INTO customer(customername, phone, creditcardinfo, housenum, street, postalcode, province) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [Cname, Phone, CCI, HouseNum, Street, PC, Province]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/customer", async(req, res) => {

    try {
        const allCustomer = await pool.query("SELECT * FROM customer");
        res.json(allCustomer.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/Supplier", async(req, res) => {

    try {
        const allSupplier = await pool.query("SELECT * FROM Supplier");
        res.json(allSupplier.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/Ing", async(req, res) => {

    try {
        const allIng = await pool.query("SELECT * FROM Ingredients");
        res.json(allIng.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/customer/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const customer = await pool.query('SELECT Phone, Housenum, Street, PostalCode, Province, CreditCardInfo FROM customer WHERE CustomerID = $1', [id]);
        res.json(customer.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/customer/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { customername } = req.body;
        const updateCustomer = await pool.query("UPDATE customer SET CustomerName = $1 WHERE CustomerID = $2", [customername, id]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/customer/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteCustomer = await pool.query("DELETE FROM customer WHERE CustomerID = $1", [id]);
    } catch (err) {
        console.log(err.message);
    }
});

app.get("/Supply_Has", async (req, res) => {
    try {
        const iName = req.query.iName;
        const respSupply = await pool.query("SELECT s.SID, s.SupplierID FROM Supply_supplies s, Has h, Ingredients i WHERE i.IngID = h.IngID AND h.SID = s.SID AND i.IngName = $1", [iName]);
        res.json(respSupply.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/FindName", async (req, res) => {
    try {
        const sName = req.query.sName;
        const respSupply = await pool.query("SELECT s.sname FROM Supplier s WHERE s.SupplierID = $1", [sName]);
        res.json(respSupply.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/Order_Makes_Sent_List", async(req, res) => {

    try {
        const allOrder = await pool.query("SELECT * FROM Order_Makes_Sent");
        res.json(allOrder.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/MenuItemFind", async(req, res) => {

    try {
        const allMenuI = await pool.query("SELECT * FROM MenuItem");
        res.json(allMenuI.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/Order_Makes_Sent", async(req, res) => {
    try {
        const avgOrder = await pool.query("SELECT o.OrderStatus, AVG (o.Cost) AS avg_order_cost FROM Order_Makes_Sent o GROUP BY o.OrderStatus HAVING 1 < ( SELECT COUNT (*) FROM Order_Makes_Sent o2 WHERE o2.OrderStatus = o.OrderStatus )")
        res.json(avgOrder.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/Supplier_supplies_ing", async(req, res) => {
    try {
        const ingSupplier = await pool.query("SELECT SupplierID FROM Supply_supplies s WHERE NOT EXISTS ((SELECT i.IngID FROM Ingredients i) EXCEPT (SELECT h.IngID FROM Has h WHERE h.SID = s.SID))")
        res.json(ingSupplier.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/MenuSnack", async(req,res)=> {
    try {
        const cals = req.query.calories;
        const viewMenu = await pool.query("select * from snack s, menuitem m where s.menuid = m.menuid and m.calories < $1",[cals]);
        res.json(viewMenu.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.get("/MenuDrink", async(req,res)=> {
    try {
        const cals = req.query.calories;
        const viewMenu = await pool.query("select * from drink d, menuitem m where d.menuid = m.menuid and m.calories < $1",[cals]);
        res.json(viewMenu.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.get("/MenuEntree", async(req,res)=> {
    try {
        const cals = req.query.calories;
        const viewMenu = await pool.query("select * from entree e, menuitem m where e.menuid = m.menuid and m.calories < $1",[cals]);
        res.json(viewMenu.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.get("/mealsOrdered", async(req,res) => {
    const customer = req.query.cid;
    try {
        const healthyMeals = await pool.query("SELECT mi.mealtype, sum(m.quantity) FROM customer c, order_makes_sent o, meals_from_contains m, menuitem mi WHERE c.customerid = $1 AND c.customerid = o.customerid AND o.orderid = m.orderid AND m.menuid = mi.menuid GROUP BY mi.mealtype",[customer]);
        res.json(healthyMeals.rows);
        console.log(healthyMeals.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.get("/healthymeals", async(req,res) => {
    try {
        const healthyMeals = await pool.query("SELECT mi.menuname, avg(mi.calories) FROM customer c, order_makes_sent o, meals_from_contains m, menuitem mi WHERE c.customerid = o.customerid AND o.orderid = m.orderid AND m.menuid = mi.menuid GROUP BY mi.menuname HAVING avg(mi.calories) < 500");
        res.json(healthyMeals.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.get("/deliveryNumber", async(req,res) => {
    try {
        const deliveryNumber = await pool.query("SELECT companyname,count(*),sum(cost) FROM deliveryservice d,order_makes_sent o where d.driverid=o.driverid group by companyname");
        res.json(deliveryNumber.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.get("/ChefList", async(req, res) => {

    try {
        const chefList = await pool.query("SELECT * FROM chef_employed");
        res.json(chefList.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/chef/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const chef = await pool.query('SELECT chefid,chefname FROM chef_employed WHERE chefid = $1', [id]);
        res.json(chef.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/chef/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { chefname } = req.body;
        const updateChef = await pool.query("UPDATE chef_employed SET chefname = $1 WHERE chefid = $2", [chefname, id]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/chef/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteChef = await pool.query("DELETE FROM chef_employed WHERE chefid = $1", [id]);
    } catch (err) {
        console.log(err.message);
    }
});

app.get("/Delivery", async(req, res) => {

    try {
        const allDelivery = await pool.query("SELECT * FROM deliveryservice");
        res.json(allDelivery.rows);
    } catch (err) {
        console.error(err.message);
    }

});

app.get("/OrderInfo", async(req,res) => {
    const orderin = req.query.oid;
    try {
        const oDetail = await pool.query("SELECT mi.menuname, m.quantity FROM order_makes_sent o, meals_from_contains m, menuitem mi WHERE o.orderid = m.orderid AND m.menuid = mi.menuid AND o.orderid = $1",[orderin]);
        res.json(oDetail.rows);
        console.log(oDetail.rows);
    } catch(err) {
        console.error(err.message);
    }
});

app.listen(4950, () => {
    console.log("Server has started on port 4950")
});