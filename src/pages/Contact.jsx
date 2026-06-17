import React, { useState } from 'react';
import Button from "../components/Button.jsx"
import { Link } from 'react-router';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: false, error: false, loading: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: false, loading: true });

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: true, message: "All fields are required." });
      return;
    }

    try {
      // TODO: Connect your email service integration here (e.g., fetch('/api/contact') or EmailJS)
      console.log('Sending payload:', formData);

      // Simulating network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({ success: true, error: false, loading: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ success: false, error: true, loading: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center p-4 md:p-8 font-mono">
      <div className="w-full max-w-lg bg-base-100 rounded-xl border border-neutral shadow-xl p-6 md:p-8">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-neutral-content flex items-center gap-2">
            <span className="text-success">&lt;</span> Get In Touch <span className="text-success">/&gt;</span>
          </h2>
          <p className="text-xs text-neutral-content/60 mt-1">
            Have a project in mind or just want to chat? Drop a message below.
          </p>
          <p className="text-xs text-neutral-content/60 mt-3">Send a mail instead:
            <span className='text-green-400 ml-1 hover:underline'>
              <a
                href="mailto:sadewdewmika10@gmail.com"
                >
                sadewdewmika10@gmail.com
              </a>
            </span>
          </p>
        </div>

        {/* Status Alerts */}
        {status.success && (
          <div className="alert alert-success text-xs py-2 mb-4 rounded border border-success/20">
            <span>✨ Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}
        {status.error && (
          <div className="alert alert-error text-xs py-2 mb-4 rounded border border-error/20">
            <span>❌ {status.message || "Failed to transmit message."}</span>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-neutral-content/80">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered bg-base-200 focus:input-success text-sm w-full font-mono rounded"
              required
              disabled={status.loading}
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-neutral-content/80">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="input input-bordered bg-base-200 focus:input-success text-sm w-full font-mono rounded"
              required
              disabled={status.loading}
            />
          </div>

          {/* Message Textarea */}
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-neutral-content/80">Message</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="textarea textarea-bordered bg-base-200 focus:textarea-success text-sm w-full font-mono rounded resize-none"
              required
              disabled={status.loading}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={status.loading}
              className={`btn btn-success btn-block font-mono text-sm rounded ${status.loading ? 'loading' : ''}`}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;