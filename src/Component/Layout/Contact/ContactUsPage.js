import React from 'react';
import { useForm } from 'react-hook-form';
import './contact-2.css';

const ContactUsPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="contactbody">


        <div className=''>
          NAVBAR
        </div>

      <br /><br />

    <div className='container'>
    <div className="info-box">
        <h2 className="info-heading">How We Can Help</h2>
        <p className="info-text">Welcome to our BloodConnect! We are here to assist you in any way we can. Whether you have questions, feedback, or specific needs, our dedicated team is ready to provide support.</p>
      </div>


      <div className="form-container form-box bg-red-400 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <hr className="w-full mb-6" />

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              className="form-input resize-y"
              placeholder="Enter your message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
       <br /><br />
        <p className='flex flex-1 items-center mb-1'>&copy; All Rights Reserved. Project By Group 33</p>
    </div>
  );
};

export default ContactUsPage;
