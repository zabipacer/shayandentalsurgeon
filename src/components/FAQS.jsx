import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is the cost of dental implants in Lahore?',
    answer: (
      <>
        The cost of dental implants in Lahore varies based on the clinic and the specific requirements of each patient. On average, you can expect to pay between PKR 30,000 and PKR 80,000 per implant. For detailed pricing and package options, please visit our{' '}
        <Link
          to="/dental-implants-lahore"
          className="text-teal-600 hover:text-teal-800 underline transition-colors duration-200"
        >
          Dental Implants in Lahore
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'Do you offer payment plans for dental treatments?',
    answer: (
      <>
        Yes—we provide flexible payment plans for various treatments, including implants, braces, and cosmetic procedures. Our goal is to make quality dental care accessible to everyone in Lahore. Contact our front desk to learn more about monthly installment options.
      </>
    ),
  },
  {
    question: 'How often should I visit the dentist for a check-up?',
    answer: (
      <>
        It’s recommended to schedule a routine check-up and cleaning every six months. Regular visits allow us to detect early signs of cavities, gum disease, and other oral issues before they become serious.
      </>
    ),
  },
  {
    question: 'Are professional teeth whitening procedures safe?',
    answer: (
      <>
        Absolutely. Our professional teeth whitening is FDA-approved and performed under the supervision of qualified dental specialists. We use medical-grade bleaching agents and advanced LED light technology to ensure safe, predictable results.
      </>
    ),
  },
  {
    question: 'What are my options for replacing missing teeth?',
    answer: (
      <>
        You can replace missing teeth with dental implants, bridges, or dentures. The best option depends on your bone density, oral health, and budget. Schedule a consultation to discuss personalized treatment plans with one of our implantologists.
      </>
    ),
  },
  {
    question: 'Do you provide emergency dental services in Lahore?',
    answer: (
      <>
        Yes. We offer 24/7 emergency dental care for issues such as severe toothaches, knocked-out teeth, or dental trauma. Call our emergency hotline at{' '}
        <a href="tel:+923001404630" className="text-teal-600 hover:text-teal-800 underline">
          +92 300-1404630
        </a>{' '}
        immediately if you need urgent attention.
      </>
    ),
  },
  {
    question: 'What is the process for getting braces at Shayan Dental Surgery?',
    answer: (
      <>
        The process begins with a comprehensive orthodontic evaluation. We will take digital X-rays and 3D intraoral scans to assess your bite and alignment. Once we confirm braces are right for you, we’ll create a custom treatment plan—typically spanning 12–24 months, depending on case complexity.
      </>
    ),
  },
  {
    question: 'Is root canal treatment painful?',
    answer: (
      <>
        Modern root canal therapy is virtually painless, thanks to local anesthesia and advanced rotary instruments. Our endodontists ensure you remain comfortable throughout the procedure, which typically takes 60–90 minutes per tooth.
      </>
    ),
  },
  {
    question: 'Do you offer pediatric dental services?',
    answer: (
      <>
        Yes. Our pediatric dentists specialize in preventive and restorative care for children. We create a child-friendly environment and focus on education—teaching proper brushing, fluoride treatments, and sealant applications to keep young smiles healthy.
      </>
    ),
  },
  {
    question: 'What infection control protocols do you follow?',
    answer: (
      <>
        We adhere to CDC-recommended sterilization standards: single-use disposables, autoclave sterilization for all instruments, and hospital-grade surface disinfectants. Every operatory is sanitized between patients to ensure a germ-free environment.
      </>
    ),
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gray-50 py-20 px-6 md:px-8 lg:px-16"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
                >
                  <span itemProp="name">{faq.question}</span>
                  <span aria-hidden="true" className="text-2xl text-teal-600 font-bold transform transition-transform duration-200">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
              </dt>

              <dd
                id={`faq-answer-${index}`}
                className={`px-6 text-gray-700 text-base transition-all duration-300 ${
                  openIndex === index ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FaqAccordion;
