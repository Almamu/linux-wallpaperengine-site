import { ArrowRight, Github, Terminal } from 'lucide-react';

import { Link } from './ui/Link';

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="bg-grid-pattern absolute inset-0"></div>
      </div>

      {/* Animated Glow Effect */}
      <div className="animate-pulse-slow absolute -left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-primary-500 opacity-20 blur-[150px] filter"></div>
      <div className="animate-pulse-slow animation-delay-1000 absolute -right-1/4 bottom-1/4 h-1/2 w-1/2 rounded-full bg-secondary-500 opacity-20 blur-[150px] filter"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className="bg-primary-500/10 border-primary-500/20 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-primary-400">
              <Terminal size={14} className="mr-1.5" />
              Linux Compatibility Project
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-primary-400">Dynamic Wallpapers</span> for
            Linux
          </h1>

          <p className="mb-10 text-xl leading-relaxed text-gray-300">
            An open-source implementation of Wallpaper Engine for Linux.
            Bringing interactive and animated wallpapers to your Linux desktop.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="#installation"
              className="flex w-full items-center justify-center rounded-lg bg-primary-500 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-primary-600 sm:w-auto">
              Installation instructions{' '}
              <ArrowRight size={18} className="ml-2" />
            </Link>

            <Link
              href="https://github.com/Almamu/linux-wallpaperengine"
              className="flex w-full items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-gray-700 sm:w-auto"
              external>
              <Github size={18} className="mr-2" /> View on GitHub
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            Compatible with most Linux distributions running X11 or Wayland
          </div>
        </div>
      </div>
    </div>
  );
};
