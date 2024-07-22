import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service parameters
    const serviceID = 'service_m5hu85e';
    const templateID = 'template_bv9xyf6';
    const userID = 'O00nt2KEZP8n3jiXD';

    emailjs.send(serviceID, templateID, formState, userID)
      .then(() => {
        toast.success('Message Sent!');
        setFormState({ name: '', email: '', message: '' }); // Clear form after submission
      })
      .catch((error) => {
        toast.error('Message not sent. Please try again.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <MainNavbar />
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <nav className="bg-white w-64 p-4 h-full shadow-lg">
          <div className="mt-20 ml-4 text-lg">
            <a href="/contact" className="block text-black hover:text-gray-500">Contact Us</a>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 p-6 ml-16"> {/* Reduced ml-64 to fit content closer to sidebar */}
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          {/* Contact Form Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="border p-2 w-full rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="border p-2 w-full rounded"
                required
              />
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="border p-2 w-full rounded h-32"
                required
              />
              <button
                type="submit"
                className="bg-black text-white p-2 rounded"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Location Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <p className="mb-4">You can find us at:</p>
            <address className="bg-gray-100 p-4 rounded shadow-md">
              1234 Education Lane,<br />
              Knowledge City, 56789<br />
              Example Country<br />
              <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a><br />
              <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
            </address>
          </section>

          {/* Social Media Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook-f text-2xl"></i> Facebook
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter text-2xl"></i> Twitter
              </a>
              <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram text-2xl"></i> Instagram
              </a>
              <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                <i className="fab fa-linkedin-in text-2xl"></i> LinkedIn
              </a>
            </div>
          </section>

          {/* FAQs Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How do I get in touch with customer support?</h3>
                <p>You can reach our customer support team via email at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a> or by calling <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>.</p>
              </div>
              <div>
                <h3 className="font-semibold">What are your business hours?</h3>
                <p>Our office is open Monday through Friday, 9:00 AM to 6:00 PM. We are closed on weekends and holidays.</p>
              </div>
              <div>
                <h3 className="font-semibold">Can I schedule a meeting with a representative?</h3>
                <p>Yes, you can schedule a meeting with one of our representatives by contacting us via email or phone. We will arrange a suitable time for you.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
