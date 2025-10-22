import Hero from '../components/Hero';
import { Code, TrendingUp, Mail, Target, Users, Megaphone, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies that captivate your audience and drive conversions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven strategies that amplify your brand reach and maximize your return on investment.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Engaging email campaigns that nurture leads, build relationships, and boost customer retention.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Campaign Management',
      description: 'End-to-end campaign creation, optimization, and promotion to ensure maximum impact.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Megaphone,
      title: 'Press & Influencer Marketing',
      description: 'Strategic media outreach and influencer partnerships to expand your brand visibility.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Foster engaged communities around your brand that drive loyalty and organic growth.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero onNavigate={onNavigate} />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Emberlane?
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We're not just another digital agency. We're your growth partners, committed to igniting your brand's potential with innovative strategies and proven results.
              </p>
              <div className="space-y-4">
                {[
                  'Customized strategies tailored to your unique goals',
                  'Expert team with years of industry experience',
                  'Data-driven approach with measurable results',
                  'Dedicated support throughout your journey'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all border border-slate-600"
              >
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                <div className="space-y-6">
                  {[
                    { label: 'Strategy', value: 95 },
                    { label: 'Execution', value: 98 },
                    { label: 'Results', value: 92 },
                    { label: 'Support', value: 99 }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{stat.label}</span>
                        <span className="text-orange-400 font-bold">{stat.value}%</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-1000"
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
