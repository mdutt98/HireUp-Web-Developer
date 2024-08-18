// app/page.tsx

'use client'; // Add this line at the very top of the file

import { useState } from 'react';

const faqs = [
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework for building web applications.',
  },
  {
    question: 'How does Tailwind CSS work?',
    answer:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
  },
  {
    question: 'What is the purpose of getStaticProps?',
    answer: 'getStaticProps is used to fetch data at build time in Next.js.',
  },
  // Add more FAQs as needed
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleExpandAll = () => {
    setOpenIndex(0);
  };

  const handleCollapseAll = () => setOpenIndex(null);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex justify-between mb-4">
        <button
          onClick={handleExpandAll}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Expand All
        </button>
        <button
          onClick={handleCollapseAll}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Collapse All
        </button>
      </div>
      {filteredFaqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full text-left bg-gray-100 p-2 rounded"
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
          </button>
          {openIndex === index && (
            <p className="mt-2 p-2 bg-gray-50 rounded">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
