import React, { Component} from "react";

import ProductForm from "../../components/NewProductForm";
import RegisterForm from "../../components/RegisterForm";

import "./Home.css";

export default class Home extends Component {

    render() {
        const { products, isFetchingProducts, isFetchingSuccess, fetchError} = this.props;
        return (
            <>
                <h1>Home</h1>
                <div className="content">
                    <div className="content__wrapper">
                        <div className="product-form">
                            {/*  <RegisterForm 
                                     handleSubmit={this.props.handleSubmit}
                                /> */}
                            <ProductForm
                                handleSubmit={this.props.handleSubmit}
                            />
                        </div>
                        <div className="product-list">
                            {isFetchingProducts && <h4>Fetching Products...</h4>}
                            {isFetchingSuccess ? products.map((p) => (<p key={p.id}>{p.title}</p>)): "No Products"}
                        </div>
                        
                    </div>

                </div>
            </>
        );
    }
}