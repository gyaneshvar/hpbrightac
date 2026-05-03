import React from 'react';

const Academics = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-container-padding py-stack-md gap-stack-lg flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-gutter pt-stack-sm">
        <div className="flex-1 space-y-stack-sm">
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-label-bold text-label-bold">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
            Learning Journey
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">Discover the Joy of Learning</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Our curriculum is designed to spark boundless curiosity. From playful early years to foundational primary and exploratory middle school, we nurture bright minds every step of the way.
          </p>
        </div>
        <div className="flex-1 relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-primary-fixed rounded-[3rem] rotate-3 scale-105 opacity-50 blur-xl"></div>
          <img 
            alt="Students learning together" 
            className="relative w-full h-[400px] object-cover rounded-[3rem] border-4 border-surface-container-lowest shadow-[0_20px_60px_rgba(0,92,85,0.15)]" 
            src={import.meta.env.BASE_URL + "images/Activities/5.jpg"}
          />
        </div>
      </section>

      {/* Preschool Section */}
      <section className="space-y-stack-md relative mt-32">
        <div className="absolute -left-10 top-10 w-32 h-32 bg-secondary-fixed rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">Preschool (Early Years)</h2>
          <p className="text-on-surface-variant font-body-md">A magical environment where learning feels like play, focusing on emotional, social, and physical development.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant shadow-[0_8px_30px_rgba(0,106,99,0.06)] hover:-translate-y-1 transition-transform flex flex-col items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-inner mb-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>extension</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Play-Based Discovery</h3>
            <p className="text-on-surface-variant">Hands-on activities that build cognitive skills and encourage natural curiosity.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant shadow-[0_8px_30px_rgba(0,106,99,0.06)] hover:-translate-y-1 transition-transform flex flex-col items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-inner mb-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Social Growth</h3>
            <p className="text-on-surface-variant">Learning to share, communicate, and build meaningful friendships in a safe space.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant shadow-[0_8px_30px_rgba(0,106,99,0.06)] hover:-translate-y-1 transition-transform flex flex-col items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shadow-inner mb-2">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Creative Expression</h3>
            <p className="text-on-surface-variant">Art, music, and movement to help tiny hands and minds express big ideas.</p>
          </div>
        </div>
      </section>

      {/* Primary School (Bento Grid) */}
      <section className="space-y-stack-md bg-surface-container-low p-8 md:p-12 rounded-[3rem] shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)] border border-white mt-32">
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-2">
            <h2 className="font-headline-lg text-headline-lg text-primary">Primary School</h2>
            <p className="text-on-surface-variant font-label-bold text-label-bold uppercase tracking-wider">Classes 1 to 5</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter min-h-[500px]">
          {/* Large Feature Cell */}
          <div className="md:col-span-2 md:row-span-2 bg-primary text-on-primary rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,92,85,0.3)] relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 space-y-4">
              <span className="material-symbols-outlined text-5xl text-secondary-fixed mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
              <h3 className="font-headline-lg text-headline-lg">Core Foundation</h3>
              <p className="text-primary-fixed-dim max-w-sm mt-2 font-body-md">Building strong roots in Mathematics and Language Arts through interactive, real-world problem solving.</p>
            </div>
            <div className="relative z-10 mt-8 flex flex-wrap gap-2">
              <span className="bg-on-primary/10 text-on-primary px-4 py-2 rounded-full font-label-bold text-label-bold backdrop-blur-sm">Mathematics</span>
              <span className="bg-on-primary/10 text-on-primary px-4 py-2 rounded-full font-label-bold text-label-bold backdrop-blur-sm">Reading & Writing</span>
            </div>
          </div>
          {/* Small Cell 1 */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant flex items-center gap-6 shadow-sm hover:bg-surface transition-colors">
            <div className="w-16 h-16 rounded-[1rem] bg-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-1">General Science</h4>
              <p className="text-on-surface-variant text-sm font-body-md">Exploring nature and basic physics through fun experiments.</p>
            </div>
          </div>
          {/* Small Cell 2 */}
          <div className="bg-tertiary-fixed rounded-[2rem] p-6 flex flex-col justify-between shadow-sm min-h-[200px]">
            <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
            <h4 className="font-headline-md text-headline-md text-black mt-4">Social Studies</h4>
          </div>
          {/* Small Cell 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[2rem] p-6 flex flex-col justify-between shadow-sm min-h-[200px]">
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sports_basketball</span>
            <h4 className="font-headline-md text-headline-md text-on-surface mt-4">Physical Ed.</h4>
          </div>
        </div>
      </section>

      {/* Middle School Section */}
      <section className="space-y-stack-md py-stack-sm mt-32 mb-32">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">Middle School (Classes 6-8)</h2>
          <p className="text-on-surface-variant font-body-md">Fostering independence, critical thinking, and advanced technological literacy to prepare students for the future.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-gutter">
          <div className="flex-1 bg-surface-container-lowest p-8 md:p-12 rounded-[2.5rem] border border-outline-variant shadow-lg relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-surface-container rounded-tl-full -z-10"></div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary-fixed rounded-2xl">
                  <span className="material-symbols-outlined text-on-primary-fixed-variant text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>computer</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Advanced Academics</h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">check_circle</span>
                  <span className="text-on-surface-variant font-body-md">Introduction to Computer Science & Coding</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">check_circle</span>
                  <span className="text-on-surface-variant font-body-md">Applied Mathematics and Algebra basics</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">check_circle</span>
                  <span className="text-on-surface-variant font-body-md">Laboratory Sciences (Physics, Chemistry, Bio)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-secondary-fixed p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_30px_rgba(255,223,155,0.4)] relative overflow-hidden flex flex-col justify-center mt-8 md:mt-0">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-white rounded-full opacity-30 blur-2xl -z-10"></div>
            <h3 className="font-headline-lg text-headline-lg text-on-secondary-fixed mb-6">Clubs & Electives</h3>
            <p className="text-on-secondary-fixed-variant mb-8 font-body-md">Students can choose from Robotics, Debate Team, Advanced Art, and Drama to discover their unique passions.</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/60 px-5 py-2.5 rounded-full font-label-bold text-on-secondary-fixed-variant shadow-sm border border-white/40">Robotics</span>
              <span className="bg-white/60 px-5 py-2.5 rounded-full font-label-bold text-on-secondary-fixed-variant shadow-sm border border-white/40">Debate</span>
              <span className="bg-white/60 px-5 py-2.5 rounded-full font-label-bold text-on-secondary-fixed-variant shadow-sm border border-white/40">Drama</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
