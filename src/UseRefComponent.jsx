
import React ,{useRef} from 'react'

const UseRefComponent = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const onsubmitHandler = (e) =>  {
        e.preventDefault();
        console.log(divContainer.current);
    }; 
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
             <h1>UseRefComponent</h1>
            <form className="forms" style={{backgroundColor: "#ccd4c9" , height: "50vh" , width: "50%"}} >
                <div className="form-control  m-4 w-50 mx-auto mt-4 h-50 ">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className= "mx-2" ref={refContainer } />
                   
                 <button onClick={onsubmitHandler} className="mt-3 btn btn-success">submit</button>
                </div>
            </form>   
        <div ref={divContainer} >hello world</div>    
        </div>
    ) 
}

export default UseRefComponent
