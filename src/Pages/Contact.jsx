import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "70f7e3f9-28b5-437e-9f5e-b083e4c3de10");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form Submitted Successfully");
      console.log("Web3Forms Response:", res);
      form.reset();
    } else {
      console.log("Submission error:", res);
    }
  };
  return (
    <section id="contact" className="py-16 px-4 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Phone No</label>
            <input
              type="tel"
              name="phoneno"
              placeholder="9876543210"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              name="message"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 text-sm">Dance Style</label>
            <select
              name="dance_style"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-black focus:outline-none"
            >
              <option value="">-- Select Dance Style --</option>
              <option value="Dance">Dance</option>
              <option value="Zumba">Zumba</option>
              <option value="Yoga Zumba">Yoga Zumba</option>
              <option value="Dance Yoga">Dance Yoga</option>
              <option value="Dance Zumba">Dance Zumba</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-md text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Google Map Iframe */}
        <div className="flex-1 hidden md:block rounded-lg overflow-hidden shadow-md bg-white/10 backdrop-blur-md text-white p-4 space-y-4">
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991713!2d72.74109904248943!3d19.0821978382789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b4b1a5d25f%3A0xd50d9b6bc1897fae!2sMumbai!5e0!3m2!1sen!2sin!4v1627220220888!5m2!1sen!2sin"
            width="100%"
            height="300"
            className="w-full border-0 rounded-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Contact Details */}
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">📍 Address:</span>
              <br />
              123 Dance Street, Andheri West,
              <br />
              Mumbai, Maharashtra, 400053
            </div>

            <div>
              <span className="font-semibold">📞 Phone:</span>
              <br />
              <a
                href="tel:+919876543210"
                className="underline hover:text-pink-400"
              >
                +91 98765 43210
              </a>
            </div>

            <div>
              <span className="font-semibold">✉️ Email:</span>
              <br />
              <a
                href="mailto:aarambhfitandflow@gmail.com"
                className="underline hover:text-pink-400"
              >
                aarambhfitandflow@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
