import { Code, Github, Heart } from 'lucide-react';

import { Link } from './ui/Link';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="#"
              className="mb-4 flex items-center text-xl font-bold text-white">
              <span className="mr-1 text-primary-400">&gt;</span>
              <span className="mr-1">linux</span>
              <span className="text-primary-400">-</span>
              <span>wallpaperengine</span>
            </Link>
            <p className="mb-4 leading-relaxed text-gray-400">
              An open-source implementation of Wallpaper Engine for Linux.
              Bringing interactive and animated wallpapers to your Linux desktop
              environment.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://github.com/Almamu/linux-wallpaperengine"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
                external>
                <Github size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#status"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400">
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="#installation"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400">
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Almamu/linux-wallpaperengine/wiki"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400"
                  external>
                  Wiki
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/Almamu/linux-wallpaperengine/issues"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400"
                  external>
                  Report Issues
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Almamu/linux-wallpaperengine/discussions"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400"
                  external>
                  Discussions
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Almamu/linux-wallpaperengine/blob/master/CONTRIBUTING.md"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400"
                  external>
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/linux-wallpaperengine"
                  className="text-gray-400 transition-colors duration-300 hover:text-primary-400"
                  external>
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-800 pt-6 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            © 2025 linux-wallpaperengine. Not affiliated with Wallpaper Engine
            or Steam.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by the
              community
            </span>
            <span className="mx-3">|</span>
            <Link
              href="https://github.com/Almamu/linux-wallpaperengine/blob/master/LICENSE"
              className="flex items-center text-gray-500 transition-colors duration-300 hover:text-primary-400"
              external>
              <Code size={14} className="mr-1" /> GPL-3.0 License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
