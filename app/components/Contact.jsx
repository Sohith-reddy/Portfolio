'use client'
import React, { useState } from "react";
import Reveal from "./Reveal";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "92886517-d35c-4c4e-9f87-02e8b875996d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = result.includes("Success");

  return (
    <section id="contact" className="py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          Connect with me
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          Get in touch.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          Have a question, an opportunity, or just want to say hello? Send me a
          message and I'll get back to you.
        </Reveal>

        <Reveal delay={0.15} className="max-w-[640px] mx-auto mt-14">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input-apple"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input-apple"
              />
            </div>
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              required
              className="input-apple mt-4 resize-none"
            />

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-apple disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </div>

            {result && (
              <p
                role="status"
                className="text-center mt-5 text-[15px] tracking-[-0.01em]"
                style={{ color: isSuccess ? "#1d7a3e" : "#d70015" }}
              >
                {result}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
