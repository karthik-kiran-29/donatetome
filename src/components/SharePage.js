import {React} from 'react';
import { useLocation } from 'react-router-dom';
import GeneratedMessage from './GeneratedMessage';
import Share from './Share'

export default function SharePage(){
  const {state} = useLocation();
  const { data } = state;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <GeneratedMessage campaignData={data} />
      <Share campaignData={data} />
    </div>
    );
} 