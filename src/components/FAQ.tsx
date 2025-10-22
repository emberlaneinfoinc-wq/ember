import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Emberlane offer?',
      answer: 'Emberlane provides a comprehensive suite of digital services including website development, digital marketing, email marketing, campaign audits, campaign creation & promotion, press media outreach, influencer marketing, and community building. We tailor our services to meet your specific business needs and goals.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A basic website might take 4-6 weeks, while comprehensive digital marketing campaigns could span several months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work with businesses across various industries including technology, e-commerce, healthcare, finance, education, and more. Our team has the expertise to adapt our strategies to meet the unique challenges and opportunities of your specific industry.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes! We believe in building long-term partnerships. We offer various support and maintenance packages to ensure your digital assets continue to perform optimally. This includes regular updates, monitoring, optimization, and strategic consulting.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We define success metrics collaboratively at the project start, tailored to your specific goals. These might include website traffic, conversion rates, engagement metrics, lead generation, ROI, or brand awareness. We provide regular reports with detailed analytics and insights.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on the scope, complexity, and specific services required. We offer transparent pricing with no hidden fees. Contact us for a free consultation where we can discuss your needs and provide a detailed proposal.'
    },
    {
      question: 'Can you work with our existing marketing team?',
      answer: 'Absolutely! We excel at collaboration and can seamlessly integrate with your existing team. Whether you need us to lead initiatives or provide specialized support, we adapt to your preferred working style and communication methods.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply reach out through our contact form, email, or phone. We\'ll schedule a free consultation to discuss your goals, challenges, and how we can help. From there, we\'ll create a customized proposal outlining our recommended approach.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <p className="text-slate-300">
            We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}
