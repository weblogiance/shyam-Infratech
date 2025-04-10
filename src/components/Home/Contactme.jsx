import React ,{useState} from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { useForm, Controller } from 'react-hook-form';

import { GetTouch } from "../../operation/Functions/ContactPage/GetTouch";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit =async (data) => {
    const phoneValue = data.phone;
    const countryCode = phoneValue.slice(0, phoneValue.length - 10); // Simple split, better with lib
    console.log('Form Data:', data);
    await GetTouch(data) 
  };

  return (
    <div className=" lg:w-11/12 w-full mx-auto flex flex-col md:flex-row  gap-x-20 my-20   p-6">
     <div className="bg-[#EBF5FB] p-6 md:p-10 rounded-lg shadow-md w-full md:w-[740px]">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label className="block text-lg text-gray-700 font-semibold">Name</label>
          <input
            {...register('Name', { required: 'Name is required' })}
            className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
              errors.Name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-lg text-gray-700 font-semibold">Email Address</label>
          <input
            {...register('Email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid Email address',
              },
            })}
            className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
              errors.Email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-lg text-gray-700 font-semibold">Phone Number</label>
          <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Phone number is required',
            validate: (value) => {
              const cleaned = value.replace(/\D/g, '');
              return cleaned.length >= 12 || 'Enter a valid phone number';
            },
          }}
          render={({ field }) => (
            <PhoneInput
              country={'in'}
              value={field.value}
              onChange={(value, countryData) => {
                field.onChange(value);
                setValue('countryCode', countryData.dialCode);
                setValue('countryName', countryData.name);
                // setValue('phoneWithoutCode', value.replace(countryData.dialCode, ''));
              }}
              inputClass="!w-full !border !rounded-md !bg-[#EBF5FB] !focus:outline-none !focus:ring-2"
              containerClass="!w-full"
              inputStyle={{
                borderColor: errors.phone ? '#EF4444' : '#D1D5DB',
                padding: '30px 50px',
                width: '100%',
                borderRadius: '8px',
                backgroundColor: '#EBF5FB',
              }}
            />
          )}
        />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-lg text-gray-700 font-semibold">Message</label>
          <textarea
            {...register('Message', { required: 'Message is required' })}
            className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
              errors.Message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
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

      <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-800 mb-5">Get in Touch</h2>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2">A wonderful Serenity has taken possession of my entire soul, like these sweet mo alone and feel the charm of existence in this spot.</p>
        <hr className="my-10 border-gray-300 " />
        <h3 className="text-3xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2">B-14 Collins Street West Victoria<br />2386 lorems Colerfes state</p>
        <p className="text-[#7A8D93] mt-2 flex items-center"><span className="mr-2"><IoCallOutline size={20}/></span> (+123) 456 789 (+024) 666 888</p>
        <hr className="my-10 border-gray-300" />
        <h3 className="text-3xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2">Dummy text ever since 1500s, simply dummy text of the printing and typesetting industry.</p>
        <p className="text-[#7A8D93] text-xl flex items-center  max-w-xl mt-2"><span className="mr-2"><TfiEmail/></span> careers@yourdomain.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
