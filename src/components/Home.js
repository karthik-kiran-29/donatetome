import {React} from 'react';
import ButtonDirect from './ButtonDirect';

export default function Home(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6 py-10  ">
        <h1 className="text-4xl font-bold text-green-500 mb-4">DonateToYou</h1>
        <p>Generate social media shareables which gets donations directly to UPI ID's</p>
        <ButtonDirect />
        </div>
    )
}               