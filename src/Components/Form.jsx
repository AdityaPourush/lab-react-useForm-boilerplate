import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [formSubmit, setFormSubmit] = useState(false)
    const [formError, setFormError] =  useState({})
    const [formData, setFormData] = useState({
        Email: "",
        FirstName: "",
        LastName: "",
        PhoneNo: ""
    })

    const handleInputChange = e =>{
        let{name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    // console.log("formdata :" , formData);

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);

        let errors = validate(formData)
        // console.log('errors :', errors);
        setFormError(errors)

        let errKeyArray = Object.keys(errors)

        if(errKeyArray.length == 0){
            setFormSubmit(true)
            toast("Done, Form Submitted")
        }else{
            setFormSubmit(false)
        }
    }

    const validate = (data)=>{
        let error = {}
        if(data.FirstName.trim() == ""){
            error.FirstName = "Please enter your First Name"
        }
        if(data.LastName.trim() == ""){
            error.LastName = "Please enter your Last Name"
        }
        if(data.Email.trim() == ""){
            error.Email = "Please enter your email"
        }
        if(data.PhoneNo.trim() == ""){
            error.PhoneNo = "Please enter your Phone no."
        }
        if(data.PhoneNo.trim().length != 10){
            error.PhoneNo = "Please enter 10 digit no."
        }
        return error;
    }


    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Registration Form</h1>

                <div className="form-container">
                    <fieldset>
                        <legend>Fill this form</legend>
                        <form onSubmit={handleFormSubmit}>
                            {formSubmit && <div className="success">
                                <p>Registration Successfull</p>
                            </div>}

                            <label>First Name</label>
                            <input type="text" name="FirstName" onChange={handleInputChange}/>
                            {formError.FirstName && <p className="err">{formError.FirstName}</p>}

                            <label>Last Name</label>
                            <input type="text" name="LastName" onChange={handleInputChange}/>
                            {formError.LastName && <p className="err">{formError.LastName}</p>}

                            <label>Email</label>
                            <input type="email" name="Email" onChange={handleInputChange}/>
                            {formError.Email && <p className="err">{formError.Email}</p>}

                            <label>Phone No.</label>
                            <input type="number" name="PhoneNo" onChange={handleInputChange}/>
                            {formError.PhoneNo && <p className="err">{formError.PhoneNo}</p>}

                            <input type="Submit" id="submit-button" value={"Register"}/>
                        </form>
                    </fieldset>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Form;