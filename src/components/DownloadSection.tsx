import { Download, ExternalLink, Github, Terminal } from 'lucide-react';
import React from 'react';

import { Link } from './ui/Link';

interface Props {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: React.ReactNode;
  primary?: boolean;
}

const DownloadCard = ({
  title,
  description,
  link,
  linkText,
  icon,
  primary = false,
}: Props) => {
  return (
    <div
      className={`rounded-xl border p-6 ${primary ? 'bg-gray-750 border-primary-500/20' : 'border-gray-700 bg-gray-800'} transition-all duration-300 hover:shadow-xl`}>
      <div className="mb-4 flex items-center">
        <div
          className={`mr-4 ${primary ? 'text-primary-400' : 'text-secondary-400'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="mb-5 text-gray-300">{description}</p>
      <Link
        href={link}
        className={`inline-flex items-center rounded-lg px-5 py-2.5 font-medium transition-colors duration-300 ${
          primary
            ? 'bg-primary-500 text-white hover:bg-primary-600'
            : 'hover:bg-gray-650 bg-gray-700 text-white'
        }`}
        external>
        {linkText}
        {primary ? (
          <Download size={18} className="ml-2" />
        ) : (
          <ExternalLink size={18} className="ml-2" />
        )}
      </Link>
    </div>
  );
};

export const DownloadSection = () => {
  return (
    <section id="download" className="bg-gray-850 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Download <span className="text-primary-400">Options</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Get linux-wallpaperengine through your preferred distribution method
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <DownloadCard
            title="Prebuilt Package"
            description="Download the latest stable release package for common Linux distributions."
            link="https://github.com/Almamu/linux-wallpaperengine/releases/latest"
            linkText="Download Latest"
            icon={<Download size={28} />}
            primary
          />
          <DownloadCard
            title="Package Managers"
            description="Install through your distribution's package manager for automatic updates."
            link="#installation"
            linkText="View Instructions"
            icon={<Terminal size={28} />}
          />
          <DownloadCard
            title="Source Code"
            description="Get the source code to build manually or contribute to development."
            link="https://github.com/Almamu/linux-wallpaperengine"
            linkText="View on GitHub"
            icon={<Github size={28} />}
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-xl border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            System Requirements
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-medium text-primary-400">
                Minimum Requirements
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Linux distribution with X11 or Wayland</li>
                <li>• OpenGL 4.3 compatible GPU</li>
                <li>• 4GB RAM</li>
                <li>• 1GB free disk space (more for wallpapers)</li>
                <li>• PulseAudio or PipeWire for audio features</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-primary-400">Recommended</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Modern Linux distribution (Ubuntu 22.04+, Fedora 38+, Arch)
                </li>
                <li>• OpenGL 4.6 compatible GPU</li>
                <li>• 8GB RAM</li>
                <li>• Dedicated GPU with 2GB+ VRAM</li>
                <li>• SSD for wallpaper storage</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              Note: Performance varies based on wallpaper complexity. Video and
              simple scene wallpapers run well on most systems, while complex
              scene wallpapers may require more powerful hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
