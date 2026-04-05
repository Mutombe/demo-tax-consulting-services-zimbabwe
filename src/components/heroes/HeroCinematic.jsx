import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from '@phosphor-icons/react';
import siteData from '../../data/siteData';

function HeroCinematic() {
  const { business, hero } = siteData;
  const bgImage = hero.backgroundImages?.[0]?.url || hero.backgroundImage;

  // Typewriter effect for heading
  const fullText = hero.titleParts.map(p => p.text).join('');
  const [displayedChars, setDisplayedChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayedChars < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedChars(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      // Blink cursor after done
      const interval = setInterval(() => setShowCursor(prev => !prev), 530);
      return () => clearInterval(interval);
    }
  }, [displayedChars, fullText.length]);

  // Build the heading with highlights and typewriter
  const renderTypewriterHeading = () => {
    let charCount = 0;
    return hero.titleParts.map((part, i) => {
      const start = charCount;
      charCount += part.text.length;
      const visibleLength = Math.max(0, Math.min(part.text.length, displayedChars - start));
      const visibleText = part.text.substring(0, visibleLength);

      if (visibleText.length === 0) return null;

      return part.highlight ? (
        <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
          {visibleText}
        </span>
      ) : (
        <React.Fragment key={i}>{visibleText}</React.Fragment>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ken Burns background */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={hero.backgroundAlt}
          className="w-full h-full object-cover"
          style={{ animation: 'kenburns 20s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
          <span className="text-gold-400 text-sm font-medium">{hero.badge}</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 min-h-[1.2em]">
          {renderTypewriterHeading()}
          <span
            className="inline-block w-[3px] h-[0.8em] bg-gold-400 ml-1 align-middle"
            style={{
              opacity: showCursor ? 1 : 0,
              transition: 'opacity 0.1s',
            }}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Link to="/contact" className="btn-primary text-base">
            {hero.ctaPrimary}
            <ArrowRight size={18} />
          </Link>
          <Link to="/projects" className="btn-secondary text-base">
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.3 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} weight="fill" className={i < business.ratingRounded ? 'text-gold-400' : 'text-gold-400/50'} />
            ))}
            <span className="text-white/80 text-sm ml-2">{business.rating}/5</span>
          </div>
          <div className="h-5 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <CheckCircle size={18} weight="fill" className="text-green-400" />
            <span className="text-white/80 text-sm">{hero.trustBadge}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroCinematic;
