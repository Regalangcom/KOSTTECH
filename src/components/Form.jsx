import React, { useEffect , useRef } from 'react';
import { useForm } from 'react-hook-form';
import Aos from 'aos';
import "aos/dist/aos.css"
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
// import DOMPurify from 'dompurify';


const Form = () => {

  const navigate = useNavigate()

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const sendEmail = () => {
    // e.preventDefault()
    emailjs
      .sendForm( import.meta.env.VITE_SERVICE_ID, 
                 import.meta.env.VITE_TEMPLATE_ID, 
                 form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  const validasi = /^[^<>&"'\\.]*$/;
  
//   load AOS 
  useEffect(() => {
        Aos.init({duration : 2900})
  } , [])


  return (
    
    <div className="bg-theme flex items-center justify-center min-h-screen p-4" >
      <div className="w-full max-w-md">
        <h3 className="text-3xl text-center mb-6">Contact</h3>
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="bg-theme p-6 rounded-xl shadow-2xl" data-aos="fade-up">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Nama Kamu:</label>
            <input
              type="text"
              id="name"
              name="from_name"
              {...register('from_name', { required: true , pattern : {
                                                                    value : validasi,
                                                                    message : ""
                                                                } })}
              aria-invalid={errors.name ? 'true' : 'false'}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="from_email"
              {...register('from_email', {
                required: true,
                pattern: {
                  message: 'Alamat email tidak valid',
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label  className="block text-sm font-bold mb-2">Pesan:</label>
            <textarea
              id="message"
              name="message"
              {...register('message', { required: true , pattern : { 
                                                                        value : validasi , 
                                                                        message : "mengandung karakter yang berbahaya"
                                                                } })}
              aria-invalid={errors.message ? 'true' : 'false'}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-5 justify-center">
            <button
              type="submit"
              className="bg-blue-500 rounded hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send message !
              </button>
             <button className='bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
             onClick={() => navigate("/")}
             >
              Back
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
