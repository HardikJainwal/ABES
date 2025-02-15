import React from 'react';
import { Users, Target, Trophy, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Our Team",
      description: "A dedicated group of professionals committed to excellence and innovation. Together, we bring years of diverse experience to deliver outstanding results."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      description: "To revolutionize the industry through cutting-edge solutions while maintaining the highest standards of quality and customer satisfaction."
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "Our Achievements",
      description: "Recognized industry leader with multiple awards for innovation and customer service excellence. Trusted by over 1000+ satisfied clients worldwide."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Our Values",
      description: "Built on integrity, innovation, and customer-first approach. We believe in sustainable growth and giving back to our community."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team dedicated to creating innovative solutions 
            that help businesses thrive in the digital age.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "1000+", label: "Clients Worldwide" },
            { number: "50+", label: "Team Members" },
            { number: "95%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;