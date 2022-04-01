import React from "react";
const Contact=()=>{
    return(
        <div className="container">
            <div className="py-4">
                <h2>Contact page</h2><br>
                </br>

                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Name"></input>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email id</label>
        <input type="Email" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Email id "></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
        <input type="Mobile" class="form-control" id="exampleFormControlInput1" placeholder="Enter the phone number"></input>
                    </div>
                    <div class="mb-3">
                        <button  type="submit" class="btn-btn-info"> AddItem</button>
                    </div>
                    </form>
            </div>
        </div>

    )
        
}
export default Contact;
                   