import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { designTokens } from '../../data/siteData';
import siteData from '../../data/siteData';
import iconMap from '../../data/iconMap';
import SectionReveal from '../SectionReveal';

function IconTopCard({ service, index }) {
  const IconComp = iconMap[service.iconName] || iconMap.Buildings;
  return (
    <SectionReveal delay={index * 0.1}>
      <div className="group relative bg-earth-50/50 hover:bg-navy-900 border border-earth-100 hover:border-navy-800 rounded-2xl p-8 transition-all duration-500 h-full">
        <div className="w-14 h-14 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
          <IconComp size={28} className="text-gold-600 group-hover:text-gold-400 transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-3 transition-colors">{service.title}</h3>
        <p className="text-steel-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{service.desc}</p>
        <div className="mt-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold-600 group-hover:text-gold-400 text-sm font-medium transition-colors">
            Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}

function OverlayCard({ service, index }) {
  const IconComp = iconMap[service.iconName] || iconMap.Buildings;
  // Use a service image if available from the services page data
  const serviceItem = siteData.services?.items?.find(s => s.title === service.title);
  const bgImage = serviceItem?.image;

  return (
    <SectionReveal delay={index * 0.1}>
      <Link to="/services" className="group relative block rounded-2xl overflow-hidden h-full min-h-[280px]">
        {bgImage && (
          <img src={bgImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        )}
        <div className={`absolute inset-0 ${bgImage ? 'bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/20' : 'bg-navy-900'}`} />
        <div className="relative z-10 p-8 flex flex-col h-full justify-end">
          <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
            <IconComp size={24} className="text-gold-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
        </div>
      </Link>
    </SectionReveal>
  );
}

function HorizontalCard({ service, index }) {
  const IconComp = iconMap[service.iconName] || iconMap.Buildings;
  return (
    <SectionReveal delay={index * 0.1}>
      <div className="group flex gap-6 items-start bg-white hover:bg-earth-50 border border-earth-100 rounded-2xl p-6 transition-all duration-300 h-full">
        <div className="w-14 h-14 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
          <IconComp size={28} className="text-gold-600 transition-colors" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
          <p className="text-steel-500 text-sm leading-relaxed mb-3">{service.desc}</p>
          <Link to="/services" className="inline-flex items-center gap-2 text-gold-600 text-sm font-medium hover:text-gold-700 transition-colors">
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}

function MinimalCard({ service, index }) {
  const IconComp = iconMap[service.iconName] || iconMap.Buildings;
  return (
    <SectionReveal delay={index * 0.1}>
      <div className="border-l-3 border-gold-500 pl-6 py-4 h-full group hover:bg-earth-50/50 transition-colors rounded-r-lg">
        <div className="flex items-center gap-3 mb-3">
          <IconComp size={22} className="text-gold-600" />
          <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
        </div>
        <p className="text-steel-500 text-sm leading-relaxed">{service.desc}</p>
      </div>
    </SectionReveal>
  );
}

function ServiceCards() {
  const style = designTokens?.serviceCardStyle || 'icon-top';
  const { servicesPreview } = siteData;

  const cardComponents = {
    'icon-top': IconTopCard,
    'overlay': OverlayCard,
    'horizontal': HorizontalCard,
    'minimal': MinimalCard,
  };

  const CardComponent = cardComponents[style] || IconTopCard;
  const isHorizontal = style === 'horizontal' || style === 'minimal';

  return (
    <section className="section-padding bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-wider mb-4">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Comprehensive Services</h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              From concept to completion, we provide end-to-end solutions that stand the test of time.
            </p>
          </div>
        </SectionReveal>

        <div className={
          isHorizontal
            ? 'grid sm:grid-cols-2 gap-4'
            : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
        }>
          {servicesPreview.map((service, index) => (
            <CardComponent key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
