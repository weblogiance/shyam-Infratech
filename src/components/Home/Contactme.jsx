import React ,{useState} from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Valid email is required";
        break;
      case "phone":
        if (!/^\+?[1-9]\d{1,14}$/.test(value)) error = "Enter a valid phone number with country code";
        break;
      case "message":
        if (!value.trim()) error = "Message cannot be empty";
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key].trim()) isValid = false;
    });

    if (isValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <div className=" lg:w-11/12 w-full mx-auto flex flex-col md:flex-row  gap-x-20 my-20   p-6">
    <div className="bg-[#EBF5FB] p-6 md:p-10 rounded-lg shadow-md w-full md:w-[740px]">
  <form className="space-y-3" onSubmit={handleSubmit}>
    <div className="space-y-2">
      <label className="block text-lg text-gray-700 font-semibold">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    </div>

    <div className="space-y-2">
      <label className="block text-lg text-gray-700 font-semibold">Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </div>

    <div className="space-y-2">
      <label className="block text-lg text-gray-700 font-semibold">Phone Number</label>
      <PhoneInput
  country={'in'}
  value={formData.phone}
  onChange={(phone) => handleChange({ target: { name: 'phone', value: phone } })}
  inputClass="!w-full !border !rounded-md !bg-[#EBF5FB] !focus:outline-none !focus:ring-2"
  containerClass="!w-full"
  inputStyle={{
    borderColor: errors.phone ? '#EF4444' : '#D1D5DB',
    padding: '30px 50px', // Adds padding inside the input
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#EBF5FB',
  }}
/>
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>

    <div className="space-y-2">
      <label className="block text-lg text-gray-700 font-semibold">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className={`w-full p-4 border rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 ${
          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
        rows="4"
      ></textarea>
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
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
