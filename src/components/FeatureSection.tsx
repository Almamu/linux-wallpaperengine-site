import { CheckCircle2, Image, Layers, Monitor, Video, Zap } from 'lucide-react';
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="hover:bg-gray-750 transform rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 text-primary-400">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="leading-relaxed text-gray-300">{description}</p>
    </div>
  );
};

export const FeatureSection = () => {
  const features = [
    {
      icon: <Video size={32} />,
      title: 'Video Wallpapers',
      description:
        'Support for various video formats as live wallpapers on your desktop.',
    },
    {
      icon: <Image size={32} />,
      title: 'Scene Wallpapers',
      description:
        'Support for Wallpaper Engine scene-based wallpapers with animations and effects.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Web Wallpapers',
      description:
        'Support for web-based wallpapers using a browser rendering engine.',
    },
    {
      icon: <Zap size={32} />,
      title: 'High Performance',
      description:
        'Optimized for low resource usage and high performance across distributions.',
    },
    {
      icon: <Monitor size={32} />,
      title: 'Multi-Monitor',
      description:
        'Seamless support for multiple monitors with different wallpapers.',
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Steam Workshop',
      description:
        'Access and download wallpapers directly from Steam Workshop.',
    },
  ];

  return (
    <section id="features" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Feature <span className="text-primary-400">Highlights</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Discover what makes linux-wallpaperengine the perfect solution for
            bringing your desktop to life
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
