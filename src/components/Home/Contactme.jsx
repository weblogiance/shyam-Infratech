import React from "react";

const ContactForm = () => {
  return (
    <div className=" w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center px-20 gap-x-20  p-6">
      <div className="bg-[#B0C9D1] p-6 md:p-10 rounded-lg shadow-md w-full md:w-1/2">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input type="tel" className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition w-full">Send Message</button>
        </form>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-2">A wonderful Serenity has taken possession of my entire soul, like these sweet mo alone and feel the charm of existence in this spot.</p>
        <hr className="my-6 border-gray-300" />
        <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-gray-600">B-14 Collins Street West Victoria<br />2386 lorems Colerfes state</p>
        <p className="text-gray-600 mt-2 flex items-center"><span className="mr-2">📞</span> (+123) 456 789 (+024) 666 888</p>
        <hr className="my-6 border-gray-300" />
        <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
        <p className="text-gray-600">Dummy text ever since 1500s, simply dummy text of the printing and typesetting industry.</p>
        <p className="text-gray-600 mt-2 flex items-center"><span className="mr-2">✉️</span> careers@yourdomain.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
