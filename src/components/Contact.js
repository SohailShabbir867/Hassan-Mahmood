import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Facebook, Linkedin, Instagram, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus('');

    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    // Send message to yourself
    emailjs.sendForm(
      'service_rvalkwg',
      'template_3c8l8lq',
      form.current,
      '_1sMvdoULdC7owDlj'
    )
    .then(() => {
      // Send auto-reply to user
      return emailjs.send(
        'service_rvalkwg',
        'template_o9lhf2b',
        {
          user_name: userName,
          user_email: userEmail,
          message: message,
        },
        '_1sMvdoULdC7owDlj'
      );
    })
    .then(() => {
      setMessageStatus('Message sent successfully! You will receive an auto-reply shortly.');
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setMessageStatus('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#FB9E3A] text-left ml-20 ">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#00CAFF] mb-1 text-left">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#00CAFF] mb-1 text-left">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#00CAFF] mb-1 text-left">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex justify-center items-center bg-[#FB9E3A] text-black font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition"
              >
                {isSending ? 'Sending...' : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </button>
              
              {messageStatus && (
                <p className={`mt-2 text-center ${messageStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {messageStatus}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Find Me On</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <a href="https://www.facebook.com/share/15vh2PXHEf/" className="text-white hover:text-[#FB9E3A] transition" target="_blank" rel="noopener noreferrer">
                <Facebook size={32} />
              </a>
              <span className="mt-2">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/hassan-choudhry-216310178/" className="text-white hover:text-[#FB9E3A] transition" target="_blank" rel="noopener noreferrer">
                <Linkedin size={32} />
              </a>
              <span className="mt-2">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.instagram.com/choudhry__hassan21?igsh=MXAxbzF6bHJ6bXphOA==" className="text-white hover:text-[#FB9E3A] transition" target="_blank" rel="noopener noreferrer">
                <Instagram size={32} />
              </a>
              <span className="mt-2">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="mailto:unknownperson3822@gmail.com" className="text-white hover:text-[#FB9E3A] transition">
                <Mail size={32} />
              </a>
              <span className="mt-2">Email</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
