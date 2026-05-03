import React from 'react';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-container-padding py-stack-lg max-w-7xl mx-auto mt-stack-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-center">
          <div className="space-y-stack-sm pr-lg-8">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-label-bold text-label-bold px-4 py-2 rounded-full mb-4">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              Our Story
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Where Curiosity<br/>Meets Excellence.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-6">
              At HP Bright Academy, we believe that education isn't just about absorbing facts; it's about igniting a lifelong love for learning. Our tactile, joy-centered approach ensures every child finds their unique path.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-fixed rounded-[3rem] transform rotate-3 scale-105 opacity-50 z-0"></div>
            <img 
              alt="Children playing" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)] border-4 border-surface-container-lowest" 
              src={import.meta.env.BASE_URL + "images/Campus/1.jpg"}
            />
          </div>
        </div>
      </section>

      {/* Bento Grid Mission Section */}
      <section className="px-container-padding py-stack-lg bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-12">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Large Feature Box */}
            <div className="md:col-span-2 bg-primary text-on-primary rounded-[2.5rem] p-10 shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container rounded-full opacity-50"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl mb-6 text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                <h3 className="font-headline-md text-headline-md mb-4">Nurturing Boundless Curiosity</h3>
                <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-90 max-w-xl">
                  We provide a safe, vibrant environment where asking questions is celebrated as much as finding answers. Our curriculum is designed to feel like play, fostering deep, meaningful engagement.
                </p>
              </div>
            </div>
            {/* Small Value Box 1 */}
            <div className="bg-secondary-fixed text-on-secondary-fixed rounded-[2.5rem] p-8 shadow-[0_10px_40px_-10px_rgba(255,223,155,0.4)] flex flex-col items-start justify-center">
              <div className="bg-surface-container-lowest p-3 rounded-2xl mb-4 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-lg mb-2">Empathetic Community</h4>
              <p className="font-body-md text-body-md opacity-80">Building strong, supportive roots through kindness and respect.</p>
            </div>
            {/* Small Value Box 2 */}
            <div className="bg-surface-container-lowest text-on-surface rounded-[2.5rem] p-8 shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)] flex flex-col items-start justify-center border-2 border-surface-variant mt-8 md:mt-0">
              <div className="bg-primary-fixed p-3 rounded-2xl mb-4 shadow-sm text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-lg text-primary mb-2">Innovative Thinking</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Encouraging creative problem solving with modern tools.</p>
            </div>
            {/* Medium Image Box */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)] relative mt-8 md:mt-0">
              <img 
                alt="Creative learning tools" 
                className="w-full h-full object-cover min-h-[250px]" 
                src={import.meta.env.BASE_URL + "images/Activities/6.jpg"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="px-container-padding py-stack-lg max-w-7xl mx-auto mt-16">
        <div className="bg-surface-container-lowest rounded-[3rem] border-2 border-surface-variant p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-sm items-center">
            <div className="md:col-span-4 flex justify-center md:justify-start relative">
              <div className="absolute inset-0 bg-secondary-fixed rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                alt="Principal Pooja Verma" 
                className="w-64 h-64 object-cover rounded-full border-8 border-surface-container-lowest shadow-lg z-10" 
                src={import.meta.env.BASE_URL + "images/AboutUs/principal.png"}
              />
            </div>
            <div className="md:col-span-8 relative pl-md-8 mt-12 md:mt-0">
              <span className="material-symbols-outlined text-primary-fixed opacity-30 text-8xl absolute -top-12 -left-4 md:-left-8 z-0" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <div className="relative z-10 space-y-6">
                <h2 className="font-headline-lg text-headline-lg text-primary">A Message from the Principal</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant italic">
                  "Welcome to HP Bright Academy. When we opened our doors, our vision was simple: to create a space where children sprint into the building every morning, eager to discover what the day holds. We blend foundational academics with a deeply tactile, playful approach because we know that joyful learners are successful learners. We are so excited to partner with your family on this incredible journey."
                </p>
                <div>
                  <h4 className="font-headline-md text-headline-md text-lg text-primary mb-1">Mrs. Pooja Verma</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">Principal & Lead Educator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Roots Philosophy */}
      <section className="px-container-padding py-stack-lg bg-surface-container-low mt-stack-md mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-stack-md max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed font-label-bold text-label-bold px-4 py-2 rounded-full mb-6">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              Pedagogy
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The "Modern Roots" Philosophy</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-12">We anchor our students in timeless values while equipping them with modern tools for a rapidly changing world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Phil 1 */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)] border border-surface-variant hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-primary text-on-primary rounded-[1.5rem] flex items-center justify-center mb-6 transform rotate-3">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>park</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-xl text-primary mb-3">Deep Foundations</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Mastery of core subjects through structured, yet engaging methodologies that build confidence.</p>
            </div>
            {/* Phil 2 */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 text-center shadow-[0_10px_40px_-10px_rgba(255,223,155,0.4)] border border-surface-variant hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-secondary-fixed text-on-secondary-fixed rounded-[1.5rem] flex items-center justify-center mb-6 transform -rotate-3">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>extension</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-xl text-primary mb-3">Tactile Learning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Moving beyond screens. We emphasize physical play, building, and hands-on experimentation.</p>
            </div>
            {/* Phil 3 */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,92,85,0.25)] border border-surface-variant hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-primary-fixed text-primary rounded-[1.5rem] flex items-center justify-center mb-6 transform rotate-6">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-xl text-primary mb-3">Future Ready</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Integrating digital literacy gracefully, ensuring technology acts as a tool for creation, not consumption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
