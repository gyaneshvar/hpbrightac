import React from 'react';

const EnhancedGallery = () => {
  const galleryItems = [
    { src: import.meta.env.BASE_URL + "images/Achievements/1.jpg", alt: "Science fair achievement", category: "Achievements" },
    { src: import.meta.env.BASE_URL + "images/Achievements/2.jpg", alt: "Award winning moment", category: "Achievements" },
    { src: import.meta.env.BASE_URL + "images/Activities/1.jpg", alt: "Students in library", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Activities/2.jpg", alt: "Kids learning science", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Activities/3.jpg", alt: "Art class session", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Activities/4.jpg", alt: "Outdoor activities", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Activities/5.jpg", alt: "Kids doing yoga", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Activities/6.jpg", alt: "Reading corner fun", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Activities/7.JPG", alt: "Group classroom activity", category: "Activities" },
    { src: import.meta.env.BASE_URL + "images/Campus/1.jpg", alt: "Main campus corridor", category: "Campus" },
    { src: import.meta.env.BASE_URL + "images/Campus/2.jpg", alt: "Beautiful school playground", category: "Campus" },
    { src: import.meta.env.BASE_URL + "images/Events/1.jpg", alt: "Annual day celebrations", category: "Events" },
    { src: import.meta.env.BASE_URL + "images/Events/2.jpg", alt: "Sports meet highlights", category: "Events" },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen font-body-md w-full max-w-[1440px] mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-stack-lg pb-stack-md px-container-padding text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-surface-container-low opacity-50"></div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary-fixed rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-fixed rounded-full blur-3xl opacity-60"></div>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-sm relative inline-block">
          Experience Bright Academy
          <span className="absolute -top-4 -right-8 text-secondary text-4xl material-symbols-outlined fill animate-bounce">stars</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-md">
          Where curiosity thrives and every corner is a new adventure in learning. Explore our vibrant campus life and state-of-the-art facilities designed for young minds.
        </p>
      </section>

      {/* Bento Grid Facilities */}
      <section className="px-container-padding py-stack-md max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-stack-sm">
          <span className="material-symbols-outlined text-tertiary text-3xl">account_balance</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Our Facilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[250px]">
          {/* Smart Classrooms (Large) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg border border-primary-fixed-dim/30 bg-surface">
            <img alt="Smart Classrooms" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={import.meta.env.BASE_URL + "images/Campus/1.jpg"} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
              <div className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl inline-block max-w-max border border-white/20 shadow-sm">
                <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined fill text-secondary">computer</span>
                  Smart Classrooms
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Interactive hubs designed for engaging, tech-enabled learning.</p>
              </div>
            </div>
          </div>
          {/* Science Labs */}
          <div className="relative rounded-[2rem] overflow-hidden group shadow-lg border border-primary-fixed-dim/30 bg-surface">
            <img alt="Science Labs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={import.meta.env.BASE_URL + "images/Activities/2.jpg"} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-headline-md text-headline-md text-surface-container-lowest drop-shadow-md">Discovery Labs</h3>
            </div>
          </div>
          {/* Playground */}
          <div className="relative rounded-[2rem] overflow-hidden group shadow-lg border border-primary-fixed-dim/30 bg-surface">
            <img alt="Playground" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={import.meta.env.BASE_URL + "images/Campus/2.jpg"} />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-headline-md text-headline-md text-surface-container-lowest drop-shadow-md">Active Playground</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="px-container-padding py-stack-lg max-w-7xl mx-auto w-full bg-surface-container-low rounded-[3rem] my-stack-md">
        <div className="text-center mb-stack-md">
          <span className="inline-flex items-center justify-center bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full font-label-bold text-label-bold mb-4">
            <span className="material-symbols-outlined text-sm mr-1">photo_camera</span>
            Campus Moments
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Life at Bright Academy</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-4 border-surface-container-lowest">
              <img alt={item.alt} className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" src={item.src} />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-surface-container-lowest text-primary font-label-bold text-label-bold px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined">favorite</span> {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnhancedGallery;
