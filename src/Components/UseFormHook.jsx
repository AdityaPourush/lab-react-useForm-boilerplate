import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UseFormHook = () => {

    const{register, handleSubmit, watch, reset, formState :{errors, isSubmitSuccessful}} = useForm()
    console.log('errors :', errors);

    // console.log(watch());

    const FormSubmitHandler = (data)=>{
        toast("Form Submitted", {
            theme: "dark"
        })
        console.log("data :", data);
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Registration Form</h1>

                <div className="form-container">
                    <fieldset>
                        <legend>Fill this form</legend>
                        <form onSubmit={handleSubmit(FormSubmitHandler)}>
                            {isSubmitSuccessful && <div className="success">
                                <p>Registration Successfull</p>
                            </div>}

                            <label>First Name</label>
                            <input type="text" name="FirstName" {...register("FirstName", {
                                required : "Please Fill First Name", minLength : {value:4, message:"Minimun 4 characters required."}
                            })} />
                            <p className="err">{errors.FirstName?.message}</p>

                            <label>Last Name</label>
                            <input type="text" name="LastName" {...register("LastName", {required: "Fill Last Name", minLength: {value:3, message:"Minimum 3 characters required"}})}/>
                            <p className="err">{errors.LastName?.message}</p>

                            <label>Email</label>
                            <input type="email" name="Email" {...register("email", {required: "Enter Email"})}/>
                            <p>{errors.Email?.message}</p>

                            <label>Password</label>
                            <input type="password" name="Password" {...register("Password", {required:"Fill your password", minLength: {value: 8, message:"Minimum 8 characters required"}})}/>
                            <p>{errors.Password?.message}</p>

                            <input type="Submit" id="submit-button" value={"Register"}/>
                            <button onClick={()=>{
                                reset();
                            }}>Reset</button>
                        </form>
                    </fieldset>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default UseFormHook;