import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CampaignForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const navigate = useNavigate();

  function onSharePage(data){
    navigate("/share", { state: {data} });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <form 
        onSubmit={handleSubmit((data)=> onSharePage(data))}
        className="mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <h1 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Fill the Form to Create Campaign
        </h1>

        {/* Campaign Creator Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Campaign Creator Name
          </label>
          <input
            {...register('creatorName', { required: 'Creator name is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter creator's full name"
          />
          {errors.creatorName && (
            <p className="text-red-500 text-sm mt-1">{errors.creatorName.message}</p>
          )}
        </div>

        {/* Beneficiary Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Campaign Beneficiary Name
          </label>
          <input
            {...register('beneficiaryName', { required: 'Beneficiary name is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter beneficiary's full name"
          />
          {errors.beneficiaryName && (
            <p className="text-red-500 text-sm mt-1">{errors.beneficiaryName.message}</p>
          )}
        </div>

        {/* Admission Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Admission Date
          </label>
          <input
            type="date"
            {...register('admissionDate', { required: 'Admission date is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          {errors.admissionDate && (
            <p className="text-red-500 text-sm mt-1">{errors.admissionDate.message}</p>
          )}
        </div>

        {/* Hospital Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Hospital Name
          </label>
          <input
            {...register('hospitalName', { required: 'Hospital name is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Enter hospital name"
          />
          {errors.hospitalName && (
            <p className="text-red-500 text-sm mt-1">{errors.hospitalName.message}</p>
          )}
        </div>

        {/* Disease Information */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Disease/Condition
          </label>
          <textarea
            {...register('disease', { required: 'Disease information is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Describe the medical condition"
            rows="3"
          />
          {errors.disease && (
            <p className="text-red-500 text-sm mt-1">{errors.disease.message}</p>
          )}
        </div>

        {/* Photo Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Patient's Photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              {selectedImage ? (
                <div className="mb-4">
                  <img 
                    src={selectedImage} 
                    alt="Preview" 
                    className="mx-auto h-32 w-32 object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="mx-auto h-12 w-12 text-gray-300">
                  📷
                </div>
              )}
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    {...register('patientPhoto', { 
                      required: 'Patient photo is required',
                      onChange: handleImageChange
                    })}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          {errors.patientPhoto && (
            <p className="text-red-500 text-sm mt-1">{errors.patientPhoto.message}</p>
          )}
        </div>

        {/* Extra Details - New Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Additional Details
          </label>
          <textarea
            {...register('extraDetails')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Share any additional information that might help your campaign (e.g., treatment plans, family situation, urgent needs)"
            rows="4"
          />
          <p className="text-gray-500 text-xs mt-1">
            Optional: Use this space to provide any additional context or important information about the campaign
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
}

export default CampaignForm;