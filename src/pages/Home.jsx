import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { HeartPulse, CalendarCheck, Stethoscope, MessageSquare, ArrowRight, CheckCircle, ShieldCheck, Activity, Users, Clock } from 'lucide-react';

function Home() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { from } = useLocation() || {};

  // Only redirect to dashboard if coming from auth flow
  useEffect(() => {
    if (currentUser && from?.pathname === '/login') {
      navigate('/dashboard');
    }
  }, [currentUser, navigate, from]);

  // Welcome message for authenticated users
  const welcomeMessage = currentUser ? (
    <div className="w-full max-w-4xl px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Welcome back, {currentUser.displayName || 'User'}! 👋
      </h1>
      <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Ready to continue your health journey?
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 shadow-md"
        >
          Go to Dashboard
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block">Your Personal</span>
          <span className="text-blue-100">Health Assistant</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Take control of your health journey with our comprehensive healthcare platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 shadow-md"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '100%', label: 'User Focused' },
    { icon: <ShieldCheck className="h-6 w-6" />, value: 'Secure', label: 'Data Privacy' },
    { icon: <Clock className="h-6 w-6" />, value: 'Always', label: 'Available' },
    { icon: <Stethoscope className="h-6 w-6" />, value: 'Expert', label: 'Backed' }
  ];

  const features = [
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: 'Health Tracking',
      description: 'Monitor your health metrics and track your progress over time.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      hover: 'hover:bg-pink-100'
    },
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: 'Appointments',
      description: 'Schedule and manage your medical appointments in one place.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      hover: 'hover:bg-blue-100'
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Doctor Connect',
      description: 'Connect with healthcare professionals when you need them most.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      hover: 'hover:bg-emerald-100'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Health Tips',
      description: 'Get personalized health recommendations and wellness tips.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      hover: 'hover:bg-purple-100'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Health Insights',
      description: 'Get customized health recommendations based on your unique profile and goals.',
      icon: <Activity className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Secure & Private',
      description: 'Your health data is encrypted and protected with enterprise-grade security.',
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Expert Guidance',
      description: 'Access to certified healthcare professionals whenever you need them.',
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />
    },
    {
      title: '24/7 Support',
      description: 'Our team is always here to help with any questions or concerns.',
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white overflow-hidden">
        {/* Decorative elements with subtle animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid grid-cols-4 gap-8 transform -skew-y-6">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="h-48 w-full bg-white rounded-lg transition-transform duration-1000 hover:scale-105"
                style={{
                  animation: `float ${Math.random() * 3 + 15}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center min-h-[70vh] py-12">
            {/* Welcome Message */}
            <div className="w-full max-w-4xl mx-auto transform transition-all duration-500 hover:scale-[1.01]">
              {welcomeMessage}
            </div>

            {/* Stats - Moved to bottom */}
            <div className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto w-full">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex justify-center text-blue-100 mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-blue-100 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 text-center">
                <p className="text-blue-100 text-xs uppercase tracking-wider mb-3 opacity-90">Trusted by healthcare professionals</p>
                <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
                  <div className="text-lg font-semibold">HIPAA</div>
                  <div className="h-5 w-px bg-blue-300"></div>
                  <div className="text-lg font-semibold">GDPR</div>
                  <div className="h-5 w-px bg-blue-300"></div>
                  <div className="text-lg font-semibold">ISO 27001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We provide the tools and support you need to take control of your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Our Core Features
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to manage your health in one place
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className={`group p-6 rounded-xl transition-all duration-300 ${feature.bg} ${feature.hover} transform hover:-translate-y-1`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${feature.bg} ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-12 lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Ready to take control of your health?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Join thousands of users who are already improving their health with our platform.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
                <Link
                  to="/signup"
                  className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors duration-200"
                >
                  Get started for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;