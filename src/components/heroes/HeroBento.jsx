import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from '@phosphor-icons/react';
import siteData from '../../data/siteData';

function HeroBento() {
  const { business, hero, stats } = siteData;
  const images = hero.backgroundImages || [];
  const img1 = images[0]?.url || hero.backgroundImage;
  const img2 = images[1]?.url || hero.backgroundImage;
  const img3 = images[2]?.url || hero.backgroundImage;

  return (
    <section className="min-h-screen bg-navy-950 flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">{hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              {hero.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                    {part.text}
                  </span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="/contact" className="btn-primary">
                {hero.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-secondary">
                {hero.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className={i < business.ratingRounded ? 'text-gold-400' : 'text-gold-400/50'} />
                ))}
                <span className="text-white/70 text-sm ml-2">{business.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} weight="fill" className="text-green-400" />
                <span className="text-white/70 text-sm">{hero.trustBadge}</span>
              </div>
            </motion.div>
          </div>

          {/* Bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 gap-3 lg:gap-4"
          >
            {/* Large image */}
            <div className="col-span-1 row-span-2">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px] group">
                <img
                  src={img1}
                  alt={hero.backgroundAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
              </div>
            </div>

            {/* Top right */}
            <div className="col-span-1">
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <img
                  src={img2}
                  alt="Project showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </div>

            {/* Bottom right */}
            <div className="col-span-1">
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <img
                  src={img3}
                  alt="Project showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center py-4 px-3 border border-white/10 rounded-xl bg-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-1">{stat.number}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBento;
