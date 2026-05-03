import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative px-container-padding py-stack-lg max-w-7xl mx-auto mt-stack-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="z-10 relative">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-bold text-label-bold mb-stack-sm border-2 border-secondary-fixed shadow-[0_4px_15px_rgba(253,220,148,0.4)]">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              Admissions Open for 2026-2027
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-sm relative">
              Where Curiosity Meets <span className="relative inline-block"><span className="relative z-10 text-tertiary">Brilliance</span><svg className="absolute w-full h-4 -bottom-1 left-0 text-secondary-container z-0" preserveAspectRatio="none" viewBox="0 0 100 20"><path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="8"></path></svg></span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md max-w-lg">
              A vibrant community dedicated to nurturing young minds through joyful learning, creative exploration, and academic excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/gallery')}
                className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-full border-b-4 border-primary-fixed-dim shadow-[0_10px_20px_rgba(0,92,85,0.2)] hover:-translate-y-1 transition-transform btn-squish flex items-center gap-2"
              >
                Explore Our Campus
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden border-8 border-surface-container-lowest shadow-[0_20px_50px_rgba(0,106,99,0.15)] transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              alt="Students learning"
              className="w-full h-full object-cover"
              src={import.meta.env.BASE_URL + "images/Campus/2.jpg"}
            />
            {/* Floating Elements */}
            <div className="absolute top-8 -left-4 bg-secondary-container p-4 rounded-2xl shadow-lg border-2 border-surface-container-lowest transform -rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="material-symbols-outlined text-4xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
            </div>
            <div className="absolute bottom-16 right-8 bg-tertiary-container p-4 rounded-full shadow-lg border-2 border-surface-container-lowest transform rotate-12 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <span className="material-symbols-outlined text-4xl text-on-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
            </div>
          </div>
        </div>
      </header>

      {/* At a Glance Stats */}
      <section className="max-w-7xl mx-auto px-container-padding py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center transform hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-4 shadow-[0_8px_20px_rgba(15,118,110,0.3)]">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-2">500+</h3>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Happy Students</p>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center transform hover:-translate-y-2 transition-transform delay-100">
            <div className="w-20 h-20 mx-auto bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-4 shadow-[0_8px_20px_rgba(253,220,148,0.3)]">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_library</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-secondary mb-2">20+</h3>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Expert Faculty</p>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center transform hover:-translate-y-2 transition-transform delay-200">
            <div className="w-20 h-20 mx-auto bg-tertiary-container text-on-tertiary rounded-full flex items-center justify-center mb-4 shadow-[0_8px_20px_rgba(210,9,63,0.3)]">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_soccer</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-tertiary mb-2">15+</h3>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Sports & Activities</p>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="bg-surface-container-low py-stack-lg rounded-[4rem] mt-stack-md mx-4 lg:mx-8 mb-32">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center mb-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Choose Your Path</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Discover tailored experiences and resources designed specifically for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 border-2 border-primary-fixed overflow-hidden relative group shadow-[0_10px_30px_rgba(156,242,232,0.3)] hover:border-primary transition-colors cursor-pointer" onClick={() => navigate('/admissions')}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>family_restroom</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Parents</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Access portals, fee structures, and stay updated with your child's progress.</p>
              <div className="inline-flex items-center gap-2 font-button text-button text-primary group-hover:text-primary-container">
                Enter Portal <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 border-2 border-secondary-fixed overflow-hidden relative group shadow-[0_10px_30px_rgba(255,223,155,0.3)] hover:border-secondary transition-colors cursor-pointer" onClick={() => navigate('/academics')}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="material-symbols-outlined text-5xl text-secondary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>backpack</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Students</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Find assignments, clubs, resources, and connect with your peers.</p>
              <div className="inline-flex items-center gap-2 font-button text-button text-secondary group-hover:text-secondary-container">
                Student Hub <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 border-2 border-tertiary-fixed overflow-hidden relative group shadow-[0_10px_30px_rgba(255,218,218,0.3)] hover:border-tertiary transition-colors cursor-pointer" onClick={() => navigate('/about')}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="material-symbols-outlined text-5xl text-tertiary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Alumni</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Stay connected, give back, and network with the Bright Academy global community.</p>
              <div className="inline-flex items-center gap-2 font-button text-button text-tertiary group-hover:text-tertiary-container">
                Alumni Network <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
