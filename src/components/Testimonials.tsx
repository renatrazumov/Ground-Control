import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Hank from Pawtuxet Village',
      text: 'We hired him for this summer- he charged the same as other services in our neighborhood but we liked his desire to work. He is an impressive young man.'
    },
    {
      name: 'Laurie from Narragansett Terrace',
      text: 'I have also hired Henry, and am completely impressed with the quality of his work and professionalism!! Highly recommend!!'
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;