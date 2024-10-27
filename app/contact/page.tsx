"use client";

import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import MagicButton from "../../components/MagicButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);
  const [formValid, setFormValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setNotification({ message: "Your message has been sent successfully!", type: "success" });
    } else {
      setNotification({ message: "Please fill in all fields.", type: "error" });
      setFormValid(false);
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000); // Auto-hide notification after 3s
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black-100 text-white px-5 relative">
      <div className="bg-black-200 p-10 rounded-xl shadow-lg w-full max-w-3xl relative">
        {/* Home Icon */}
        <div className="absolute top-6 left-6">
          <a href="/" aria-label="Go to Home">
            <FaHome className="text-white text-3xl cursor-pointer hover:text-purple-500 transition duration-300" />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-purple mb-10 text-center">Contact Me</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`peer placeholder-transparent bg-black-300 text-white border ${
                formValid ? "border-gray-700" : "border-red-600"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full px-4 py-3`}
              placeholder="Name"
              required
            />
            <label
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`peer placeholder-transparent bg-black-300 text-white border ${
                formValid ? "border-gray-700" : "border-red-600"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full px-4 py-3`}
              placeholder="Email"
              required
            />
            <label
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple"
            >
              Email
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`peer placeholder-transparent bg-black-300 text-white border ${
                formValid ? "border-gray-700" : "border-red-600"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full px-4 py-3`}
              placeholder="Subject"
              required
            />
            <label
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple"
            >
              Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`peer placeholder-transparent bg-black-300 text-white border ${
                formValid ? "border-gray-700" : "border-red-600"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full px-4 py-3`}
              placeholder="Message"
              rows={4}
              required
            />
            <label
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <MagicButton
              title="Submit"
              icon={<FaHome />}
              position="right"
              handleClick={handleSubmit}
            />
          </div>
        </form>

        {/* Notification Section */}
        {notification && (
          <div
            className={`mt-6 p-4 text-center text-sm rounded-lg ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}
