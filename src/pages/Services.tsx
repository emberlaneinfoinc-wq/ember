import { Code, TrendingUp, Mail, Search, Megaphone, Users, Target, BarChart } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Transform your digital presence with custom, responsive websites that captivate your audience and drive conversions.',
      features: [
        'Custom design tailored to your brand identity',
        'Responsive layouts for all devices',
        'SEO-optimized architecture',
        'Fast loading speeds and performance optimization',
        'Content management system integration',
        'Ongoing maintenance and support'
      ],
      benefits: 'Establish credibility, increase conversions, and provide seamless user experiences that keep visitors engaged.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies designed to amplify your brand reach and maximize ROI across all digital channels.',
      features: [
        'Multi-channel marketing strategy',
        'Social media management and advertising',
        'Content marketing and creation',
        'PPC campaign management',
        'Analytics and performance tracking',
        'Conversion rate optimization'
      ],
      benefits: 'Reach your target audience effectively, increase brand awareness, and drive qualified leads to your business.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Engaging email campaigns that nurture leads, build lasting relationships, and boost customer retention.',
      features: [
        'Strategic email campaign planning',
        'Custom template design',
        'List segmentation and personalization',
        'A/B testing and optimization',
        'Automated drip campaigns',
        'Detailed performance analytics'
      ],
      benefits: 'Build direct relationships with customers, increase repeat business, and achieve one of the highest ROIs in digital marketing.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Search,
      title: 'Campaign Audit',
      description: 'Comprehensive analysis of your existing marketing campaigns to identify opportunities for improvement and optimization.',
      features: [
        'In-depth performance analysis',
        'Competitor benchmarking',
        'Audience insights and behavior analysis',
        'Budget allocation review',
        'Channel effectiveness evaluation',
        'Actionable recommendations report'
      ],
      benefits: 'Uncover hidden opportunities, eliminate wasteful spending, and maximize the effectiveness of your marketing investments.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Campaign Creation & Promotion',
      description: 'End-to-end campaign development from concept to execution, designed to achieve your specific marketing objectives.',
      features: [
        'Strategic campaign planning',
        'Creative concept development',
        'Multi-channel content creation',
        'Landing page optimization',
        'Campaign launch and management',
        'Real-time monitoring and optimization'
      ],
      benefits: 'Launch campaigns that resonate with your audience, drive engagement, and deliver measurable results aligned with your goals.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Megaphone,
      title: 'Press Media Outreach',
      description: 'Strategic media relations and press outreach to amplify your brand message and gain valuable media coverage.',
      features: [
        'Press release writing and distribution',
        'Media list building and management',
        'Journalist relationship development',
        'Story pitch creation',
        'Interview coordination',
        'Media monitoring and reporting'
      ],
      benefits: 'Build brand authority, increase visibility, and leverage third-party credibility to reach wider audiences.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to authentically promote your brand and reach highly engaged audiences.',
      features: [
        'Influencer identification and vetting',
        'Campaign strategy development',
        'Contract negotiation and management',
        'Content collaboration and approval',
        'Campaign tracking and analytics',
        'ROI measurement and reporting'
      ],
      benefits: 'Tap into established audiences, build trust through authentic endorsements, and drive conversions through social proof.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart,
      title: 'Community Building',
      description: 'Foster engaged, loyal communities around your brand that drive organic growth and long-term customer relationships.',
      features: [
        'Community strategy development',
        'Platform selection and setup',
        'Content calendar planning',
        'Engagement and moderation',
        'Community member recognition programs',
        'Growth metrics and insights'
      ],
      benefits: 'Create brand advocates, generate valuable feedback, increase customer lifetime value, and drive word-of-mouth marketing.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive measurable growth.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 hover:border-orange-500/50 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">What's Included:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                              <span className="text-slate-400 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Key Benefits:</h3>
                        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                          <p className="text-slate-300 leading-relaxed">{service.benefits}</p>
                        </div>

                        <button
                          onClick={() => onNavigate('contact')}
                          className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's talk about your goals and we'll help you choose the right solution for your business.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
