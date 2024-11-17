function GeneratedMessage({ campaignData }){

    return (
      <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            Medical Support Campaign
          </h1>
        </div>
  
        {/* Content */}
        <div className="p-6">
          {/* Image Section */}
          <div className="mb-6">
            {campaignData.patientPhoto && (
              <img
                src={URL.createObjectURL(campaignData.patientPhoto[0])}
                alt="Patient"
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
          </div>
  
          {/* Campaign Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Support {campaignData.beneficiaryName}'s Medical Treatment
              </h2>
            </div>
  
            <div className="text-gray-600">
              <p>
                Campaign organized by: <span className="font-medium">{campaignData.creatorName}</span>
              </p>
              <p>
                Hospital: <span className="font-medium">{campaignData.hospitalName}</span>
              </p>
              <p>
                Admission Date:{' '}
                <span className="font-medium">
                  {new Date(campaignData.admissionDate).toLocaleDateString()}
                </span>
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Medical Condition</h3>
              <p className="text-gray-600">{campaignData.disease}</p>
            </div>
  
            {campaignData.extraDetails && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Information</h3>
                <p className="text-gray-600">{campaignData.extraDetails}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default GeneratedMessage;
  