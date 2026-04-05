import React from 'react';
import { designTokens } from '../../data/siteData';
import HeroCarousel from '../HeroCarousel';
import HeroParallax from './HeroParallax';
import HeroSplit from './HeroSplit';
import HeroCinematic from './HeroCinematic';
import HeroBento from './HeroBento';
import siteData from '../../data/siteData';

const HERO_MAP = {
  parallax: HeroParallax,
  split: HeroSplit,
  cinematic: HeroCinematic,
  bento: HeroBento,
};

function HeroDispatcher() {
  const style = designTokens?.heroStyle || 'carousel';
  const HeroComponent = HERO_MAP[style];

  // Non-carousel heroes are self-contained
  if (HeroComponent) {
    return <HeroComponent />;
  }

  // Default: render carousel (needs children from Home.jsx, so return null here)
  // The carousel case is handled directly in Home.jsx
  return null;
}

export default HeroDispatcher;
export { HERO_MAP };
