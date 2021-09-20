import React, { Component } from "react";

import "./ProductForm.css";

export default class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            brand: "",
            price: 0,
            quantity: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        //Validation
        const data = {...this.state};

        this.props.handleSubmit(data);
    }

    handleChange(event) {
        this.setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    render() {
        return (
            <>
            <form className="product-form" onSubmit={this.handleSubmit}>
                <div className="product-form__input">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="product-form__input">
                    <label htmlFor="brand">Brand</label>
                    <input 
                        type="text"
                        id="brand"
                        name="brand"
                        value={this.state.brand}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="product-form__input">
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number"
                        id="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="product-form__input">
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Create Product</button>
            </form>
            </>
        );
    }
}