import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Newsletter: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }
    if (!captcha) {
      setMessage("⚠️ Please verify the reCAPTCHA.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwmMcS44k-BbTI2L6iXt8VD6b1ejov0OQ6h6yPBdTYeq59J9u7SzL1-RL9zNibFUZo/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("✅ Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("⚠️ " + result.message);
      }
    } catch (error) {
      setMessage("🚫 Error sending request. Please try again later.");
    } finally {
      setLoading(false);
      setCaptcha(null);
    }
  };

  return (
    <div className="mt-8">
      <h4
        className={`font-semibold mb-4 transition-colors duration-300 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Newsletter
      </h4>

      <div className="flex flex-col space-y-3">
        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-1 px-4 py-2 rounded-l-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          />
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors duration-300"
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6Lc2VcErAAAAAIaubktW7Knyus4TPPXMJKnVKWah"
            onChange={(token) => setCaptcha(token)}
            theme={darkMode ? "dark" : "light"}
          />
        </div>

        {message && (
          <p
            className={`text-sm ${
              message.includes("✅")
                ? "text-green-500"
                : message.includes("❌") || message.includes("🚫")
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
