import {React} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ButtonDirect(){
    const navigate = useNavigate();         
    function onSubmit(){
        navigate("/form");
    }
    return (
        <>
         <button onClick={onSubmit} className="bg-green-500 m-2 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Create Shareables 
         </button>
        </>
    )
}               