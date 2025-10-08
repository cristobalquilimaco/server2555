// src/components/ContactForm.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Send, CheckCircle, AlertCircle, Loader2, Ticket } from "lucide-react";
import { useContactForm } from "../../hook/useContactForm";
import type { ContactFormData } from "../../APIServices/contactServices";

const ContactFormWH: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });

  const { formState, submitForm, resetForm, clearMessages } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.captcha) {
      alert("Please confirm the captcha before submitting.");
      return;
    }

    await submitForm(formData);

    setTimeout(() => {
      if (formState.isSuccess) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          captcha: "",
        });
      }
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formState.error || formState.isSubmitted) {
      clearMessages();
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: "",
    });
    resetForm();
  };

  return (
    <AnimatePresence mode="wait">
      {formState.isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          key="success"
          className="text-center py-12"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {formState.message}
          </p>
          {formState.ticketId && (
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Ticket className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm text-purple-700 dark:text-purple-300">
                <strong>Ticket ID:</strong> #{formState.ticketId}
              </span>
            </div>
          )}
          <div className="mt-6">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
            >
              Send Another Message
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="form"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {formState.error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
              <p className="text-red-700 text-sm">{formState.error}</p>
            </div>
          )}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name *"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address *"
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject *"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message..."
            className="w-full px-4 py-3 border rounded-lg"
          ></textarea>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lc2VcErAAAAAIaubktW7Knyus4TPPXMJKnVKWah"
              onChange={(token) =>
                setFormData((prev) => ({ ...prev, captcha: token || "" }))
              }
            />
          </div>

          <button
            type="submit"
            disabled={formState.isLoading}
            className="w-full py-4 bg-purple-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2"
          >
            {formState.isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default ContactFormWH;
