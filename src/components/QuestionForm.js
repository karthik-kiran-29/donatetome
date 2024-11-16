import { useForm } from 'react-hook-form';

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          {...register('firstName')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          placeholder="Enter your first name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          {...register('lastName', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          placeholder="Enter your last name"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs italic">Last name is required.</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
          Age
        </label>
        <input
          {...register('age', { pattern: /\d+/ })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="text"
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="text-red-500 text-xs italic">Please enter a number for age.</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}