import React, {Fragment, useState} from "react";

const InputCustomer = () => {

    const [Cname, setCname] = useState("")
    const [Phone, setPhone] = useState("")
    const [CCI, setCCI] = useState("")
    const [HouseNum, setHN] = useState("")
    const [Street, setStreet] = useState("")
    const [PC, setPC] = useState("")
    const [Province, setPro] = useState("")


    const onSubmitForm = async() => {
        try {
            const body = {Cname, Phone, CCI, HouseNum, Street, PC, Province};
            const response = await fetch("http://localhost:4950/customer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <h1 className="text-center- mt-5">
            Input Customer
        </h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="Customer Name" value ={Cname} onChange={e => setCname(e.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="Phone Number" value ={Phone} onChange={e => setPhone(e.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="Credit Card Information" value ={CCI} onChange={e => setCCI(e.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="House Number" value ={HouseNum} onChange={e => setHN(e.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="Street" value ={Street} onChange={e => setStreet(e.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="Postal Code" value ={PC} onChange={e => setPC(e.target.value)}/>
            </div>
            <div class="mb-3">
                <input type="text" className="form-control" placeholder="Province" value ={Province} onChange={e => setPro(e.target.value)}/>
            </div>
            
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>;
};

export default InputCustomer;