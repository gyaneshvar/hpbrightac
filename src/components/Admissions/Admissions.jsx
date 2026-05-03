import React from 'react';

const Admissions = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-container-padding md:px-12 py-stack-lg gap-stack-lg flex-grow flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-6 flex flex-col gap-stack-md z-10">
          <div className="inline-flex items-center gap-2 bg-secondary-fixed/50 text-on-secondary-fixed px-4 py-2 rounded-full w-max border border-secondary/20 mb-4">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-bold text-label-bold">Admissions Open 2026-2027</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Join the Bright Academy Family</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8">We believe every child is naturally curious. Our admissions process is simple, transparent, and designed to welcome your family into our vibrant learning community without the stress.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => document.getElementById('lets-get-started')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-button text-button bg-primary text-on-primary rounded-full px-8 py-4 border-b-2 border-primary-container hover:translate-y-[2px] hover:border-b-0 transition-all duration-150 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            >
              Start Application
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 aspect-video lg:aspect-square group mt-12 lg:mt-0">
          <img
            alt="Students learning"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={import.meta.env.BASE_URL + "images/Activities/4.jpg"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
              <div className="bg-secondary-fixed w-12 h-12 rounded-full flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_satisfied</span>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-primary">100% Happiness</p>
                <p className="font-body-md text-sm text-on-surface-variant">Rated by Parents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Process Bento Grid */}
      <section className="flex flex-col gap-stack-md pt-stack-lg mt-32">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">A Simple 1-2-3 Process</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">We've designed our enrollment to be as friendly as our classrooms. No confusing paperwork, just three easy steps to joining our community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest border-2 border-surface-variant rounded-2xl p-8 relative shadow-lg shadow-surface-variant/50 hover:-translate-y-2 transition-transform duration-300 mt-8 md:mt-0">
            <div className="absolute -top-6 -left-6 bg-secondary text-on-secondary w-12 h-12 rounded-full flex items-center justify-center font-headline-md text-headline-md shadow-md border-2 border-white">1</div>
            <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed-variant mb-6">
              <span className="material-symbols-outlined text-3xl">waving_hand</span>
            </div>
            <h3 className="font-headline-md text-xl text-primary mb-3">Say Hello</h3>
            <p className="font-body-md text-on-surface-variant">Fill out our quick inquiry form below. Tell us a bit about your child and what you are looking for in a school.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container-lowest border-2 border-surface-variant rounded-2xl p-8 relative shadow-lg shadow-surface-variant/50 hover:-translate-y-2 transition-transform duration-300 mt-8 md:mt-0">
            <div className="absolute -top-6 -left-6 bg-secondary text-on-secondary w-12 h-12 rounded-full flex items-center justify-center font-headline-md text-headline-md shadow-md border-2 border-white">2</div>
            <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-tertiary-fixed-variant mb-6">
              <span className="material-symbols-outlined text-3xl">local_cafe</span>
            </div>
            <h3 className="font-headline-md text-xl text-primary mb-3">Meet & Greet</h3>
            <p className="font-body-md text-on-surface-variant">Schedule a casual campus tour. Let your child explore while we chat over coffee about our educational philosophy.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container-lowest border-2 border-surface-variant rounded-2xl p-8 relative shadow-lg shadow-surface-variant/50 hover:-translate-y-2 transition-transform duration-300 mt-8 md:mt-0">
            <div className="absolute -top-6 -left-6 bg-secondary text-on-secondary w-12 h-12 rounded-full flex items-center justify-center font-headline-md text-headline-md shadow-md border-2 border-white">3</div>
            <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center text-on-secondary-fixed-variant mb-6">
              <span className="material-symbols-outlined text-3xl">celebration</span>
            </div>
            <h3 className="font-headline-md text-xl text-primary mb-3">Welcome Home</h3>
            <p className="font-body-md text-on-surface-variant">Complete the final registration details and secure your spot. We'll handle the rest and prepare a special welcome kit!</p>
          </div>
        </div>
      </section>


      {/* Inquiry Form */}
      <section id="lets-get-started" className="max-w-3xl mx-auto w-full mt-32 mb-32 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,92,85,0.1)] border-2 border-surface-variant relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-30 z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl opacity-30 z-0"></div>
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Let's Get Started</h2>
            <p className="font-body-md text-on-surface-variant">Drop us a line and our admissions friendly team will reach out within 24 hours.</p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-primary" htmlFor="parentName">Parent/Guardian Name</label>
                <input className="w-full rounded-xl border-2 border-surface-variant bg-surface px-4 py-4 font-body-md text-on-surface focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all placeholder:text-outline" id="parentName" placeholder="Jane Doe" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-primary" htmlFor="phone">Phone Number</label>
                <input className="w-full rounded-xl border-2 border-surface-variant bg-surface px-4 py-4 font-body-md text-on-surface focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all placeholder:text-outline" id="phone" placeholder="+91 98765 43210" type="tel" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-primary" htmlFor="childName">Child's First Name</label>
                <input className="w-full rounded-xl border-2 border-surface-variant bg-surface px-4 py-4 font-body-md text-on-surface focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all placeholder:text-outline" id="childName" placeholder="Leo" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-primary" htmlFor="grade">Grade of Interest</label>
                <select className="w-full rounded-xl border-2 border-surface-variant bg-surface px-4 py-4 font-body-md text-on-surface focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all appearance-none cursor-pointer" id="grade" defaultValue="">
                  <option disabled value="">Select a grade...</option>
                  <option value="prek">Early Years (Pre-K)</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-primary" htmlFor="message">Anything else we should know? (Optional)</label>
              <textarea className="w-full rounded-xl border-2 border-surface-variant bg-surface px-4 py-4 font-body-md text-on-surface focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all resize-none placeholder:text-outline" id="message" placeholder="Leo loves dinosaurs and building blocks..." rows="4"></textarea>
            </div>
            <button className="mt-4 font-button text-button w-full bg-secondary text-on-secondary rounded-full px-8 py-5 border-b-4 border-secondary-container hover:translate-y-[2px] hover:border-b-2 active:border-b-0 active:translate-y-[4px] transition-all duration-150 shadow-xl shadow-secondary/30 flex justify-center items-center gap-2 text-lg" type="submit">
              Send Inquiry
              <span className="material-symbols-outlined">send</span>
            </button>
            <p className="text-center text-xs text-outline mt-2 font-body-md">By submitting, you agree to our privacy policy. We protect your data like our own.</p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
