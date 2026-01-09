import { FiMail, FiMessageCircle, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaMediumM } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      }, (error) => {
        setError('Failed to send message, please try again.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto mt-16 mb-8 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
        Let's Connect <span className="text-pink-300">🌸</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#1b1e36] border-2 border-[#393053] rounded-xl p-8 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><FiMessageCircle className="text-pink-300" /> Send Message</h3>
          <p className="text-gray-300 text-sm mb-4">Have a question or want to collaborate? Drop me a message and I'll get back to you soon!</p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input type="text" name="user_name" placeholder="Name" className="bg-[#18122B] border border-[#393053] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-400" required />
            <input type="email" name="user_email" placeholder="Email" className="bg-[#18122B] border border-[#393053] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-400" required />
            <input type="text" name="title" placeholder="Subject of your message" className="bg-[#18122B] border border-[#393053] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-400" />
            <textarea name="message" placeholder="Message" rows={4} className="bg-[#18122B] border border-[#393053] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-400" required />
            <button type="submit" className="mt-2 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition flex items-center gap-2 justify-center" disabled={loading}>
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
          {sent && <p className="text-green-400 mt-2">Message sent successfully!</p>}
          {error && <p className="text-red-400 mt-2">{error}</p>}
          <div className="flex gap-4 mt-8 justify-center">
            <a href="mailto:aakanshapande0@gmail.com" className="text-pink-300 hover:text-pink-400 text-2xl"><FiMail /></a>
            <a href="https://github.com/aakanshaa0" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400 text-2xl"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aakansha-pande-666ba6285" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400 text-2xl"><GrLinkedin /></a>
            <a href="https://medium.com/@aakansha0" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-400 text-2xl"><FaMediumM /></a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#1b1e36] border-2 border-[#393053] rounded-xl p-6 flex flex-col">
            <div>
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mx-1"></span>
                Let's Work Together
              </h4>
              <p className="text-gray-200 mt-2">Have an idea or a problem to solve? I'm open to building impactful products together.</p>
            </div>
            <div className="flex flex-row gap-3 mt-4 justify-start">
              <a href="mailto:aakanshapande0@gmail.com" className="flex items-center justify-center gap-2 px-3.5 py-1.5 border-2 border-pink-400 text-pink-300 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition">
                <FiMail />
                <span>Email Me</span>
              </a>
              <a href="https://cal.com/aakansha-pande-kc5mwn/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-3.5 py-1.5 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
                <span>Book a Call</span>
                <FiArrowRight />
              </a>
            </div>
          </div>
          <div className="bg-[#1b1e36] border-2 border-[#393053] rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-2">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-pink-200">
              <a href="mailto:aakanshapande0@gmail.com"><FiMail className="inline mr-2" /> aakanshapande0@gmail.com</a>
              <a href="https://github.com/aakanshaa0" target="_blank"><FaGithub className="inline mr-2" /> github.com/aakanshaa0</a>
              <a href="https://www.linkedin.com/in/aakansha-pande-666ba6285/" target="_blank"><GrLinkedin className="inline mr-2" />linkedin.com/in/aakansha-pande-666ba6285</a>
              <a href="https://medium.com/@aakansha0" target="_blank"><FaMediumM className="inline mr-2" />medium.com/@aakansha0</a>
            </div>
          </div>
          <div className="bg-[#1b1e36] border-2 border-[#393053] rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-2">Fun Fact <span className="text-pink-300">🌸</span></h4>
            <p className="text-gray-200">When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a good cup of coffee while brainstorming my next project idea.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
