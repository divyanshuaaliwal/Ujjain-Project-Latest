import React from "react";

const ContactPage = () => {
  return (
    <section className="w-[95vw] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-500 mb-2">Contact Us</h2>
        <p className="text-gray-600">
          Get in touch for customized travel plans and temple visit assistance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info and Map */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-start gap-4">
            <i className="fas fa-map-marker-alt text-2xl text-orange-500"></i>
            <div>
              <h4 className="font-semibold text-orange-500 text-lg">Address</h4>
              <p>Mahakaleshwar Temple Road, Ujjain, Madhya Pradesh 456006</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="fas fa-phone text-2xl text-orange-500"></i>
            <div>
              <h4 className="font-semibold text-orange-500 text-lg">Phone</h4>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="fas fa-envelope text-2xl text-orange-500"></i>
            <div>
              <h4 className="font-semibold text-orange-500 text-lg">Email</h4>
              <p>info@mahakaleshwartemple.com</p>
            </div>
          </div>

          <div className="w-full h-72 mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.498157883766!2d75.76646307532979!3d23.182887979088906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963746c6687e8a5%3A0xf834069f6fea0209!2sMahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1681215421437!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahakaleshwar Temple Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 p-3 rounded h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
