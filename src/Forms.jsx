import React from 'react'
import { useState } from 'react';
import FileBase64 from 'react-file-base64'
import "./forms.css";
const Forms = () => {
    const [products, setProducts] = useState([]);
    const [person, setPerson] = useState({
        Title: "",
        Description: "",
        price: "",
        Reveiw: "",
        Comments:"",
        selectedFile: "",

    });
    const [file, setFile] = useState("")
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
        console.log(name, value)
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (person.Title && person.Description && person.Reveiw && person.price && person.Comments) {
            const newProduct = { ...person, id: new Date().getTime().toString() };
            setProducts([...products, newProduct]);
            console.log({ products, newProduct });
        }
        else {
            alert("please fill the inputs feilds")
        }
        setPerson({
            Title: "",
            Description: "",
            price: "",
            Reveiw: "",
            Comments: "",
            selectedFile: "",
        });
        
    };
     return (
        <div id='main'>
            <h1>Multiple inputs</h1>
            <form onSubmit={submitHandler}>
                <div className='inputs'>
                    <label htmlFor='product'>Title:</label>
                    <input type="text" name='Title' id='product' value={person.Title} onChange={changeHandler} />
                </div>
                <div className='inputs'>
                    <label htmlFor='desc'>Description:</label>
                    <input type="text" name='Description' id='desc' value={person.Description} onChange={changeHandler} />
                </div>
                <div className='inputs'>
                    <label htmlFor='Reveiw'>Reveiw:</label>
                    <input type="text" name='Reveiw' id='Reveiw' value={person.Reveiw} onChange={changeHandler} />
                </div>
                <div className='inputs'>
                    <label htmlFor='price'>price:</label>
                    <input type="text" name='price' id='price' value={person.price} onChange={changeHandler} />
                </div>
                <div className='inputs'>
                    <label htmlFor='Comments'>Comments:</label>
                    <input type="text" name='Comments' id='Comments' value={person.Comments} onChange={changeHandler} />
                </div>
                <div className='inputs'>
                    <label htmlFor='file'>File:</label>
                    <FileBase64 type="file" multiple={false} onDone={({base64})=>setFile(base64)}/>
                </div>
                <button type='submit'>submit</button>
            </form>
            <main className="card">
                {products.map((meriProduct) => {
                    return (
                        <div className='product'>
                        <img src={file} alt=''/>
                           <div className='contents'>
                            <h3>{meriProduct.Title}</h3>
                            <p>{meriProduct.Description}</p>
                            <p>{meriProduct.Comments}</p>
                            </div>
                            <footer>
                            <h6>{meriProduct.price}</h6>
                            <h6>{meriProduct.Reveiw}</h6>
                            </footer>
                        </div>
                    );
                })}
            </main>

        </div>

    )
}




export default Forms
