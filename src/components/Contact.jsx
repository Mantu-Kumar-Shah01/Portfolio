import React from "react"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d8f72a2-a545-453c-85aa-cbcfe5dbc371");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success(" Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      toast.error("Failed to send message!");
      setResult("");
    }
  };

  return (
 
    <div className="bg-gradient-to-b from-gray-400 to-white py-10 px-4 w-full h-full pt-20 " id="Contact">
      {/* Title */}
      <div className="title mb-8 ">
        <p className=" text-3xl  mt-15  mb-4   text-center text-black font-bold hover:scale-110 transition-transform">
          Contact
          <span className="underline underline-offset-4 decoration-1 font-light px-2">
            With Us
          </span>
        </p>
        <p className="text-center text-gray-700 mt-3 px-3">
          Your comfort and style are our priority. Let’s connect and create the perfect look for you — get in touch now!
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto flex flex-col gap-4 p-6 rounded-2xl shadow-md bg-white"
      >
        <div>
          <label className="block mb-2 text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"   // ✅ Added
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"   // ✅ Added
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Your Message</label>
          <textarea
            name="message"   // ✅ Added
            placeholder="Write your message here..."
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  
  );
};

export default Contact;
