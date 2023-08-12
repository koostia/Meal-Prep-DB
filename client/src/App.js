import { Fragment } from 'react';
import './App.css';

// components

import InputCustomer from "./components/InputCustomer"
import ListCustomer from "./components/ListCustomer";
import ViewCustomerOrderGB from './components/ViewCustomerOrderGB';
import ListOrder from './components/ListOrder';
import SeeSupplyIng from './components/SeeSupplyIng';
import ListSupplier from './components/ListSupplier';
import FindSupplyIng from './components/FindSupplyIng';
import Menu from './components/Menu';
import ListIng from './components/ListIng';
import CustomerMeals from './components/CustomerMeals'
import HealthyMeals from './components/HealthyMeals';
import ListMenu from './components/ListMenu';
import DeliveryService from './components/DeliveryService';
import DeliveryNumber from "./components/DeliveryNumber";
import ListChef from "./components/ListChef";
import OrderDetails from './components/OrderDetails';
function App() {
  return (
    <Fragment>

      <h2 className="text-center- mt-1"> Manager View </h2>

      <div className='container'>
      <InputCustomer />
      <ListCustomer />
      <ListChef />
      <ListOrder />
      <OrderDetails />
      <ViewCustomerOrderGB />
      <ListSupplier />
      <SeeSupplyIng />
      <ListIng/>
      <FindSupplyIng />
      <ListMenu />
      <Menu/>
      <CustomerMeals/>
      <HealthyMeals/>
      <DeliveryService/>
      <DeliveryNumber/>
      </div>
    </Fragment>
  );
}
export default App;
