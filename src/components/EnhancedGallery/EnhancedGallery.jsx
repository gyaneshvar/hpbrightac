import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow';
import SectionHeading from '../shared/SectionHeading';

const categories = [
  {
    name: 'Campus',
    description: 'The physical environment where school life happens every day.',
    maxImages: 2,
  },
  {
    name: 'Activities',
    description: 'Learning, play, and participation captured in motion.',
    maxImages: 6,
  },
  {
    name: 'Events',
    description: 'Celebrations and school moments that build memory and belonging.',
    maxImages: 2,
  },
  {
    name: 'Achievements',
    description: 'The milestones that reflect effort, confidence, and recognition.',
    maxImages: 2,
  },
];

const EnhancedGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Campus');
  const activeCategoryData = categories.find((category) => category.name === activeCategory);

  return (
    <section id="gallery" className="section-shell section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Visual proof"
          title="A gallery that shows the school with"
          highlight="presence, not filler."
          description="Families decide with their eyes long before they fill a form. The gallery now frames the campus, children, and events in a more deliberate way so the school feels real and credible."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="soft-card p-6">
            <span className="eyebrow">Browse chapters</span>
            <div className="mt-6 space-y-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full rounded-[1.4rem] border px-5 py-4 text-left transition duration-200 ${
                    activeCategory === category.name
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>{category.name}</div>
                      <p className={`mt-2 text-sm leading-6 ${activeCategory === category.name ? 'text-white/72' : 'text-slate-500'}`}>
                        {category.description}
                      </p>
                    </div>
                    <div className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] ${activeCategory === category.name ? 'bg-white/12 text-white' : 'bg-slate-100 text-slate-500'}`} style={{ fontFamily: "'Oswald', sans-serif" }}>
                      View
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="soft-card overflow-hidden p-4"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 px-2 pb-4 pt-2">
              <div>
                <span className="label-chip">{activeCategory}</span>
                <h3 className="mt-3 font-display text-4xl leading-none text-slate-900">{activeCategoryData?.description}</h3>
              </div>
            </div>
            <ImageSlideshow
              category={activeCategory}
              maxImages={activeCategoryData?.maxImages || 6}
              autoPlay={true}
              interval={4000}
              showControls={true}
              className="overflow-hidden rounded-[1.6rem] shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setActiveCategory(category.name)}
              className="soft-card overflow-hidden text-left"
            >
              <div className="h-44">
                <ImageSlideshow
                  category={category.name}
                  maxImages={category.maxImages}
                  autoPlay={activeCategory !== category.name}
                  interval={5300 + index * 500}
                  showControls={false}
                  className="h-full"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>{category.name}</h4>
                  <span className="label-chip">Preview</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedGallery;
