import { Target, Lightbulb, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Emberlane
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of digital innovators dedicated to transforming how brands connect with their audiences in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                      <p className="text-slate-300 leading-relaxed">
                        To empower businesses with innovative digital solutions that drive measurable growth and lasting impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                      <p className="text-slate-300 leading-relaxed">
                        To be the most trusted digital partner for brands looking to thrive in an ever-evolving digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Emberlane was born from a simple belief: every brand has a unique story worth telling, and the right digital strategy can ignite that story into something extraordinary.
                </p>
                <p>
                  We started with a mission to bridge the gap between traditional marketing and the dynamic digital world. Over the years, we've evolved into a full-service digital agency, helping businesses of all sizes navigate the complexities of digital marketing, web development, and brand growth.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your unique challenges and crafting solutions that align with your goals. We don't believe in one-size-fits-all approaches. Instead, we take the time to learn about your business, your audience, and your aspirations.
                </p>
                <p>
                  Today, we're proud to have helped numerous brands transform their digital presence and achieve remarkable results. But we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'We are passionate about what we do and it shows in the results we deliver.',
                color: 'from-orange-500 to-red-600'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to solve complex challenges.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on measurable outcomes that directly impact your business growth.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Client-Centric Approach',
                description: 'Your success is our success. We build long-term partnerships based on trust, transparency, and mutual growth.'
              },
              {
                number: '02',
                title: 'Expert Team',
                description: 'Our diverse team brings together expertise in design, development, marketing, and strategy to deliver comprehensive solutions.'
              },
              {
                number: '03',
                title: 'Proven Track Record',
                description: 'With years of experience and countless successful projects, we have the knowledge and skills to make your vision a reality.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
              >
                <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Write Your Success Story
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Partner with Emberlane and experience the difference that dedication, expertise, and innovation can make.
          </p>
        </div>
      </section>
    </div>
  );
}
