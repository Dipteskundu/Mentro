"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How much does Mentro cost?",
    answer: "Mentro offers a mix of free and paid workshops. Many introductory sessions are completely free. Paid workshops range from $24.99 to $59.99 depending on the session type and duration. There are no subscription fees — you pay per workshop.",
  },
  {
    question: "Do I get a certificate after completing a workshop?",
    answer: "Yes! You receive a certificate of completion for every workshop you finish. Our certificates are verified and can be shared directly on LinkedIn to showcase your new skills to potential employers.",
  },
  {
    question: "How do live sessions work?",
    answer: "Live sessions are conducted via video conferencing with real-time interaction. You can ask questions, participate in discussions, and get instant feedback from your mentor. All sessions are recorded so you can revisit the material later.",
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a full refund up to 48 hours before a scheduled workshop. If you're unsatisfied with a session, contact us within 7 days and we'll work with you to make it right or provide a refund.",
  },
  {
    question: "Who are the mentors on Mentro?",
    answer: "Our mentors are industry professionals from top tech companies like Google, Meta, OpenAI, AWS, and Figma. Each mentor is vetted for both their technical expertise and teaching ability to ensure you get the best learning experience.",
  },
  {
    question: "Can I join as a complete beginner?",
    answer: "Absolutely! We offer workshops across all levels — Beginner, Intermediate, and Advanced. Many of our most popular sessions are designed for beginners with no prior experience in the topic.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Questions
            </span>
        </h2>
        <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto text-lg">
          Everything you need to know about Mentro
        </p>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
