import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import countriesList from './countriesdata';
import { useForm, useController } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Select from "react-select";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    firstName: z.string().min(5, { message: 'This field is required.' }),
    lastName: z.string().min(1, { message: 'This field is required.' }),
    country: z.string(),
    address: z.string().min(1, { message: 'This field is required.' }),
    city: z.string().min(1, { message: 'This field is required.' }),
    state: z.string().min(1, { message: 'This field is required.' }),
    zipcode: z.string().min(1, { message: 'This field is required.' }),
    email: z.string().min(1, { message: "This field is required" }).email({
        message: "Must be a valid email",
    }),
    phone: z.string().min(10, { message: 'Enter a valid phone number' }),
});



const CheckOutForm = () => {

    const cart = useSelector((state) => state.cart.items);
    const [error, setError] = useState([]);
    const cartQuantity = cart.reduce((sum, obj) => { return sum + obj.quantity }, 0);
    const totalPrice = cart.reduce((sum, obj) => { return sum + obj.price }, 0);
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            country: ''

        },
        resolver: zodResolver(schema)
    });
    console.log(errors);

    const { field } = useController({ name: 'country', control });




    // const [checkoutInput, setCheckoutInput] = useState({
    //     firstname: '',
    //     lastname: '',
    //     phone: '',
    //     email: '',
    //     address: '',
    //     city: '',
    //     state: '',
    //     zipcode: '',
    // });

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    }

    const handleonChangeSelect = (option) => {
        field.onChange(option.value);
    }

    // if(loading)
    // {
    //     return <h4>Loading Checkout...</h4>
    // }

    var checkout_HTML = '';
    if (cart.length > 0) {
        checkout_HTML = <div>
            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h4>Billing Information</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <Select
                                    value={countriesList.find(value => value === field.value)}
                                    onChange={handleonChangeSelect}
                                    options={countriesList}
                                />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> First Name</label>
                                            <input type="text" className="form-control" {...register("firstName", { required: true, minLength: 3, pattern: /[A-Za-z]{3}/ })} />
                                            {(errors.firstName || errors.touchedFields)?.message &&
                                                <small className='text-danger'>{errors.firstName?.message}</small>}
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Last Name</label>
                                            <input type="text" className="form-control" {...register('lastName', { required: true })} />
                                            {(errors.lastName)?.message &&
                                                <small className="text-danger">{errors.lastName?.message}</small>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Phone Number</label>
                                            <input type="number" className="form-control" {...register('phone', { required: true }, { valueAsNumber: true })} />
                                            {(errors.phone)?.message &&
                                                <small className="text-danger">{errors.phone?.message}</small>}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Email Address</label>
                                            <input type="email" className="form-control" {...register('email', { required: true })} />
                                            <small className="text-danger">{error.email}</small>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label> Full Address</label>
                                            <textarea rows="3" {...register('address', { required: true })} className="form-control"></textarea>
                                            {(errors.address)?.message &&
                                                <small className="text-danger">{errors.address?.message}</small>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>City</label>
                                            <input type="text" {...register('city', { required: true })} className="form-control" />
                                            {(errors.city)?.message &&
                                                <small className="text-danger">{errors.city?.message}</small>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>State</label>
                                            <input type="text" {...register('state', { required: true })} className="form-control" />
                                            {(errors.state)?.message &&
                                                <small className="text-danger">{errors.state?.message}</small>}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>Zip Code</label>
                                            <input type="text" {...register('zipcode', { required: true })} className="form-control" />
                                            {(errors.zipcode)?.message &&
                                                <small className="text-danger">{errors.zipcode?.message}</small>}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group text-end">
                                            <button type="submit" className="btn btn-primary mx-1"> Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th width="50%">Product</th>
                                <th>ID</th>
                                <th>Qty</th>
                                <th>Price</th>

                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, idx) => {
                                //  totalCartPrice += item.product.selling_price * item.product_qty;
                                return (
                                    <tr key={idx}>
                                        <td>{item.author}</td>
                                        <td>{item.id}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>

                                        <td>{item.price * item.quantity}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                                <td className="text-end fw-bold">{cartQuantity}</td>
                                <td colSpan="2" className="text-end fw-bold">{totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    }
    else {
        checkout_HTML = <div>
            <div className="card card-body py-5 text-center shadow-sm">
                <h4>Your Shopping Cart is Empty. You are on Checkout Page.</h4>
            </div>
        </div>
    }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Checkout</h6>
                </div>
            </div>
            <div className="py-4">
                <div className="container">
                    {checkout_HTML}
                </div>
            </div>

        </div>
    )
};

export default CheckOutForm;



{/* <label> Country</label>
                                <Controller
                                    control={control}
                                    name="country"
                                    // rules={{ required: true }}
                                    render={({field})=>( 
                                        <Autocomplete
                                        // value={fieldController.value}
                                        onChange={handleonChangeSelect}
                                        fullWidth
                                        disablePortal
                                        id="country"
                                        name='country'
                                        options={countriesList}
                                        renderInput={(c) => <TextField {...c} />}
                                        />
                                     )}
                                />  */}
{/* 
                                <select
                                value={fieldController.value}
                                onChange={handleonChangeSelect}
                                options={countriesList}
                                /> */}