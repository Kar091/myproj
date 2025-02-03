export default function ContactPage() {
  return (
    <div className="px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Our Services</h1>
      <p className="text-lg text-center text-gray-600 mb-12">Explore the services we offer to help your business grow!</p>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="service-item bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Web Development</h3>
            <p className="text-gray-500">We create responsive and modern websites tailored to your needs. Our team specializes in front-end and back-end development using the latest technologies.</p>
          </div>
          <div className="service-item bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Mobile App Development</h3>
            <p className="text-gray-500">Our developers build high-quality mobile apps for iOS and Android, designed to provide seamless user experiences across all devices.</p>
          </div>
          <div className="service-item bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Digital Marketing</h3>
            <p className="text-gray-500">Our digital marketing services include SEO, content marketing, social media campaigns, and more to help grow your online presence and reach new customers.</p>
          </div>
          <div className="service-item bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Consulting</h3>
            <p className="text-gray-500">We offer expert business consulting services to help you optimize your processes, increase productivity, and drive growth.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16 bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto">
          <div className="testimonial bg-white p-6 shadow-lg rounded-lg mb-8">
            <p className="text-lg italic text-gray-600">"The team at [Company] helped us redesign our website, and the results were outstanding. Our traffic has doubled since launch!"</p>
            <p className="text-right mt-4 text-gray-700">- John Doe, CEO of Example Co.</p>
          </div>
          <div className="testimonial bg-white p-6 shadow-lg rounded-lg">
            <p className="text-lg italic text-gray-600">"Thanks to the mobile app developed by [Company], we were able to reach a whole new audience and significantly increase our sales."</p>
            <p className="text-right mt-4 text-gray-700">- Jane Smith, Marketing Director at Example Corp.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Message</label>
             
            </div>
            <div>
              <button type="submit" className="w-full py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">If you're ready to take your business to the next level, contact us today! We'll work with you to create a customized solution that fits your needs.</p>
        <button className="py-3 px-8 bg-white text-blue-700 text-lg font-semibold rounded-lg hover:bg-gray-200">
          Contact Us
        </button>
      </section>

    </div>
  );
}
