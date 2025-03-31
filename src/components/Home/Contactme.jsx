import React from "react";

const ContactForm = () => {
  return (
    <div className=" lg:w-11/12 w-full mx-auto flex flex-col md:flex-row  gap-x-20 my-20   p-6">
      <div className="bg-[#EBF5FB] p-6 md:p-10 rounded-lg shadow-md w-full  md:w-[740px]">
        <form className="space-y-3">
          <div className=" space-y-2">
            <label className="block text-lg text-gray-700 font-semibold">Name</label>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className=" space-y-2">
            <label className="block text-lg text-gray-700 font-semibold">Email Address</label>
            <input type="email" className="w-full p-4 border border-gray-300 rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className=" space-y-2">
            <label className="block text-lg text-gray-700 font-semibold">Phone Number</label>
            <input type="tel" className="w-full p-4 border border-gray-300 rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className=" space-y-2">
            <label className="block text-lg text-gray-700 font-semibold">Message</label>
            <textarea className="w-full p-4 border border-gray-300 rounded-md bg-[#EBF5FB] focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          </div>
          <button className="bg-[#78C448] text-white py-3 px-6 rounded-md hover:bg-green-600 transition ">Send Message</button>
        </form>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-800 mb-5">Get in Touch</h2>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2">A wonderful Serenity has taken possession of my entire soul, like these sweet mo alone and feel the charm of existence in this spot.</p>
        <hr className="my-10 border-gray-300 " />
        <h3 className="text-3xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2">B-14 Collins Street West Victoria<br />2386 lorems Colerfes state</p>
        <p className="text-gray-600 mt-2 flex items-center"><span className="mr-2">📞</span> (+123) 456 789 (+024) 666 888</p>
        <hr className="my-10 border-gray-300" />
        <h3 className="text-3xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2">Dummy text ever since 1500s, simply dummy text of the printing and typesetting industry.</p>
        <p className="text-[#7A8D93] text-xl  max-w-xl mt-2"><span className="mr-2">✉️</span> careers@yourdomain.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
