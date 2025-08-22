import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Activity, MessageSquare, Zap } from 'lucide-react';

function Home() {
  const features = [
    { icon: BarChart, title: 'Symptom Analysis', description: 'Get AI-driven insights into your symptoms.' },
    { icon: Activity, title: 'Wellness Tracking', description: 'Monitor your activity, sleep, and vital signs.' },
    { icon: MessageSquare, title: 'Doctor Connect', description: 'Consult with certified doctors, anytime.' },
    { icon: Zap, title: 'Smart Reminders', description: 'Never miss a medication or appointment again.' },
  ];

  const testimonials = [
    { name: 'Sarah J.', quote: 'HealthMate has revolutionized how I manage my health. The AI symptom checker is incredibly accurate!' },
    { name: 'Mike T.', quote: 'Connecting with a doctor has never been easier. The platform is intuitive and saves me so much time.' },
    { name: 'Emily R.', quote: 'I love the wellness tracking features. It keeps me motivated to stay active and healthy.' },
  ];

  return (
    <div className="bg-white text-brand-text">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-4">Your Health, Smarter.</h1>
        <p className="text-lg md:text-xl text-brand-subtle max-w-2xl mx-auto mb-8">HealthMate is your personal AI health assistant, providing smart insights and connecting you with the care you need.</p>
        <Link to="/dashboard" className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
          Get Started Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Everything you need for better health</h2>
          <p className="text-lg text-brand-subtle mt-2">One platform, complete peace of mind.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-blue-100 text-brand-primary rounded-full">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-text">{feature.title}</h3>
                <p className="text-brand-subtle">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Get Started in 3 Easy Steps</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6">
            <div className="text-6xl font-bold text-gray-200 mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2 text-brand-text">Create Your Profile</h3>
            <p className="text-brand-subtle">Set up your secure health profile in minutes.</p>
          </div>
          <div className="p-6">
            <div className="text-6xl font-bold text-gray-200 mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2 text-brand-text">Get AI Insights</h3>
            <p className="text-brand-subtle">Use our tools to track symptoms and wellness goals.</p>
          </div>
          <div className="p-6">
            <div className="text-6xl font-bold text-gray-200 mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2 text-brand-text">Connect with Doctors</h3>
            <p className="text-brand-subtle">Access professional medical advice when you need it.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Loved by Users Everywhere</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200">
              <p className="text-brand-subtle mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-brand-text">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Take Control of Your Health Today</h2>
        <p className="text-lg md:text-xl text-brand-subtle max-w-2xl mx-auto mb-8">Join HealthMate and start your journey towards a healthier, happier life.</p>
        <Link to="/dashboard" className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-brand-primary hover:text-white transition-all transform hover:scale-105">
          Sign Up for Free
        </Link>
      </section>
    </div>
  );
}

export default Home;