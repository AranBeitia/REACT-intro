import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import ProductSchema from "../../schemas/ProductSchema";
import "./ProductForm.css";

export default class ProductForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <Formik
                validationSchema={ProductSchema}
                initialValues={{
                    id: 0,
                    title: "",
                    brand: "",
                    price: 0,
                    quantity: 0,
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {   
                    setSubmitting(true);
                    this.props.handleSubmit(values);
                    resetForm();
                    setSubmitting(false);
                }}
            >
                {({errors, isSubmiting}) => (

                <Form className="product-form">
                    <div className="product-form__input">
                        <label htmlFor="id">ID</label>
                        <Field 
                            type="number"
                            name="id"
                            placeholder="Enter id"
                            className="form-control"
                        />
                        <ErrorMessage
                            component="div"
                            name="id"
                            className="invalid-input"    
                        />
                    </div>
                    <div className="product-form__input">
                        <label htmlFor="title">Title</label>
                        <Field 
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            className="form-control"
                        />
                        <ErrorMessage
                            component="div"
                            name="title"
                            className="invalid-input"    
                        />
                    </div>
                    <div className="product-form__input">
                        <label htmlFor="brand">Brand</label>
                        <Field 
                            type="text"
                            id="brand"
                            name="brand"
                            placeholder="Enter brand"
                            className="form-control"
                        />
                        <ErrorMessage
                            component="div"
                            name="brand"
                            className="invalid-input"    
                        />
                    </div>
                    <div className="product-form__input">
                        <label htmlFor="price">Price</label>
                        <Field 
                            type="number"
                            id="price"
                            name="price"
                            className="form-control"
                        />
                        <ErrorMessage
                            component="div"
                            name="price"
                            className="invalid-input"    
                        />
                    </div>
                    <div className="product-form__input">
                        <label htmlFor="quantity">Quantity</label>
                        <Field 
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="form-control"
                        />
                        <ErrorMessage
                            component="div"
                            name="quantity"
                            className="invalid-input"    
                        />
                    </div>
                    <button 
                    type="submit"
                    disabled={isSubmiting}>
                        Create Product
                    </button>
                </Form>

                )}

            </Formik>
            </>
        );
    }
}