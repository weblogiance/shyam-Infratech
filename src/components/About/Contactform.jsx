import React ,{useState} from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { useForm } from 'react-hook-form';
import { GetTouchContact } from "../../operation/Functions/ContactPage/GetTouch";


const Contactform = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log('Submitted:', data);
    await GetTouchContact(data)
  };

  return (
    <div className=" lg:w-10/12 w-full mx-auto flex flex-col md:flex-row  gap-x-20 my-20   p-6">
    <div>
      <h1 className=" lg:text-6xl text-4xl font-semibold mb-5 flex mx-auto   max-sm:w-fit ">Contact Us</h1>
      <div className="bg-[#EBF5FB] p-6 md:p-10 rounded-xl shadow-md w-full md:w-[740px]">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:flex-row flex-col gap-x-3">
            <div className="space-y-2 w-full">
              <label className="block text-lg text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                {...register('Name', { required: 'Name is required' })}
                className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message}</p>}
            </div>

            <div className="space-y-2 w-full">
              <label className="block text-lg text-gray-700 font-semibold">Email Address</label>
              <input
                type="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
                className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
                  errors.Email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-x-3">
            <div className="space-y-2 w-full">
              <label className="block text-lg text-gray-700 font-semibold">Phone Number</label>
              <PhoneInput
                country={'in'}
                onChange={(value, country) => {
                  setValue('phone', value, { shouldValidate: true });
                  setValue('countryCode', country.dialCode);
                  setValue('countryName', country.name);
                }}
                inputClass="!w-full !border !rounded-md !bg-[#EBF5FB] !focus:outline-none !focus:ring-2"
                containerClass="!w-full"
                inputStyle={{
                  borderColor: errors.phone ? '#EF4444' : '#D1D5DB',
                  padding: '28px 50px',
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: '#EBF5FB',
                }}
              />
              <input type="hidden" {...register('phone', { required: 'Phone number is required' })} />
              <input type="hidden" {...register('countryCode')} />
              <input type="hidden" {...register('countryName')} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2 w-full">
              <label className="block text-lg text-gray-700 font-semibold ">Company Name</label>
              <input
                type="text"
                {...register('companyName', { required: 'Company name is required' })}
                className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
                  errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-lg text-gray-700 font-semibold">Message</label>
            <select
              {...register('serviceType', { required: 'Please select a service' })}
              className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
                errors.service ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            >
              <option value="">Select a service</option>
              <option value="Solar Energy Solutions">Solar Energy Solutions</option>
              <option value="Wind Power Management">Wind Power Management</option>
              <option value="Energy Efficiency">Energy Efficiency</option>
              <option value="Industrial Solutions">Industrial Solutions</option>
            </select>
            {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-lg text-gray-700 font-semibold">Message</label>
            <textarea
              {...register('Message', { required: 'Message is required' })}
              className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
                errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
              rows="4"
            ></textarea>
            {errors.Message && <p className="text-red-500 text-sm">{errors.Message.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#78C448] text-white py-3 px-6 rounded-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

      <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/2">
      <h1 className=" lg:text-6xl text-4xl font-semibold mb-10 flex mx-auto   max-sm:w-fit ">Our Offices</h1>
        <h2 className="text-3xl font-semibold text-gray-900">New York</h2>
        <p className="text-[#7A8D93] text-xl  lg:w-[42%] mt-2">123 Energy Plaza, Manhattan, NY 10001</p>
        <span className="text-[#7A8D93] mt-2 flex items-center text-lg gap-x-3 font-medium"><IoCallOutline size={20}/><span>+1 (212) 555-0123</span></span>
        <span className="text-[#7A8D93] mt-2 flex items-center text-lg gap-x-3 font-medium"><TfiEmail size={20}/><span>careers@yourdomain.com</span></span>

        <hr className="my-10 border-gray-300 " />
        <h2 className="text-3xl font-semibold text-gray-900">Los Angeles</h2>
        <p className="text-[#7A8D93] text-xl  lg:w-[42%] mt-2">456 Solar Drive, Los Angeles, CA 90001</p>
        <span className="text-[#7A8D93] mt-2 flex items-center text-lg gap-x-3 font-medium"><IoCallOutline size={20}/><span>1 (310) 555-0456</span></span>
        <span className="text-[#7A8D93] mt-2 flex items-center text-lg gap-x-3 font-medium"><TfiEmail size={20}/><span>careers@yourdomain.com</span></span>
        <hr className="my-10 border-gray-300" />
        <h2 className="text-3xl font-semibold text-gray-900">India</h2>
        <p className="text-[#7A8D93] text-xl lg:w-[42%] mt-2">789 Wind Street, surat</p>
        <span className="text-[#7A8D93] mt-2 flex items-center text-lg gap-x-3 font-medium"><IoCallOutline size={20}/><span>+91 88022 75252</span></span>
        <span className="text-[#7A8D93] mt-2 flex items-center text-lg gap-x-3 font-medium"><TfiEmail size={20}/><span>weblogiance@energ.com</span></span>
      </div>
    </div>
  );
};

export default Contactform;
