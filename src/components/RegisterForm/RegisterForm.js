import React, {Component } from "react";

import {Formik, Form, Field, ErrorMessage } from "formik";

import {UserRegisterSchema} from "../../schemas";

import "./RegisterForm.css";



export default class RegisterForm extends Component {

    render() {
        return (
            <>
                <Formik
                    initialValues={{
                        name: "",
                        lastname: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={UserRegisterSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert("Submiting form...");
                            setSubmitting(false);
                            this.props.handleSubmit(values);

                        }, 1000);
                    }}                
                >
                    {({errors, isSubmitting}) => (
                        <Form>
                            <div className="product-form__input">
                                <label htmlFor="name">Name</label>
                                <Field 
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="name"
                                    className="invalid-input"
                                />  
                            </div>
                            <div className="product-form__input">
                                <label htmlFor="name">Lastname</label>
                                <Field 
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter lastname"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="lastname"
                                    className="invalid-input"
                                />
                            </div>
                            <div className="product-form__input">
                                <label htmlFor="name">Email</label>
                                <Field 
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-input"
                                />
                            </div>
                            <div className="product-form__input">
                                <label htmlFor="name">Password</label>
                                <Field 
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="password"
                                    className="invalid-input"
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}>
                                    {isSubmitting ? "Submiting...": "Register"}
                            </button>

                        </Form>
                    )}

                </Formik>
            </>
        );
    }
}