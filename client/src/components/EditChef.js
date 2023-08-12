import React, {Fragment, useState} from "react";

const EditChef = ({ chef }) => {

    const [chefname, setCname] = useState(chef.chefname);


    // Edit Chef Name function
    const updateCname = async(e) => {
        e.preventDefault();
        try {

            const body = {chefname};
            const response = await fetch(`http://localhost:4950/chef/${chef.chefid}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>


        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${chef.chefid}`}>
            Edit
        </button>

        <div class="modal fade" id={`id${chef.chefid}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Chef</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type='text' className="form-control" value={chefname} onChange={e => setCname(e.target.value)}/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={e => updateCname(e)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>;
};

export default EditChef;