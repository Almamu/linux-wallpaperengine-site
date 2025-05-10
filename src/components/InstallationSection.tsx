import { Check, Copy, Terminal } from 'lucide-react';
import React, { PropsWithChildren, useState } from 'react';

interface TabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Tab = ({ active, onClick, children, icon }: TabProps) => {
  return (
    <button
      className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
        active
          ? 'bg-primary-500 text-white'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
      onClick={onClick}>
      {icon}
      <span className="ml-2">{children}</span>
    </button>
  );
};

// Custom icon for Arch Linux since it's not in Lucide
const ArchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C11.95 6.91 11.18 9.38 9.91 11.31C8.99 12.73 7.82 14.02 6 15.31C7.95 16.3 9.42 17.59 12 21C13.81 18.29 15.22 16.65 16.96 15.31C18.79 13.89 20.24 12.4 22 9.72C20.82 8.8 19.18 7.15 17.95 5.31C16.32 2.98 16.13 2.53 12 2Z" />
  </svg>
);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 text-gray-400 transition-colors duration-200 hover:text-white"
      aria-label="Copy to clipboard">
      {copied ? (
        <Check size={18} className="text-primary-400" />
      ) : (
        <Copy size={18} />
      )}
    </button>
  );
};

const CommandBlock = ({ children }: PropsWithChildren) => {
  return (
    <div className="group relative my-4 rounded-md bg-gray-900 p-4">
      <div className="flex items-start justify-between">
        <pre className="w-full overflow-x-auto font-mono text-sm text-gray-300">
          {children}
        </pre>
        {typeof children === 'string' && <CopyButton text={children} />}
      </div>
    </div>
  );
};

export const InstallationSection = () => {
  const [activeTab, setActiveTab] = useState('arch');

  return (
    <section id="installation" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Installation <span className="text-primary-400">Guide</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Follow these steps to get linux-wallpaperengine running on your
            system
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <Tab
              active={activeTab === 'arch'}
              onClick={() => setActiveTab('arch')}
              icon={<ArchIcon />}>
              Arch Linux
            </Tab>
            <Tab
              active={activeTab === 'source'}
              onClick={() => setActiveTab('source')}
              icon={<Terminal size={18} />}>
              From Source
            </Tab>
          </div>

          <div className="mt-6">
            {activeTab === 'arch' && (
              <>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Installing on Arch Linux
                </h3>
                <p className="mb-4 text-gray-300">
                  1. Install from the AUR using your preferred helper (e.g.,
                  yay):
                </p>
                <CommandBlock>yay -S linux-wallpaperengine-git</CommandBlock>
                <p className="mb-4 text-gray-300">2. Run the application:</p>
                <CommandBlock>linux-wallpaperengine</CommandBlock>
              </>
            )}

            {activeTab === 'source' && (
              <>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Building from Source
                </h3>
                <p className="mb-4 text-gray-300">1. Clone the repository:</p>
                <CommandBlock>
                  git clone --recurse-submodules
                  https://github.com/Almamu/linux-wallpaperengine.git cd
                  linux-wallpaperengine
                </CommandBlock>
                <p className="mb-4 text-gray-300">
                  2. Install required dependencies (Ubuntu/Debian example):
                </p>
                <CommandBlock>
                  sudo apt-get update && sudo apt-get install build-essential
                  cmake libxrandr-dev libxinerama-dev libxcursor-dev libxi-dev
                  libgl-dev libglew-dev freeglut3-dev libsdl2-dev liblz4-dev
                  libavcodec-dev libavformat-dev libavutil-dev libswscale-dev
                  libxxf86vm-dev libglm-dev libglfw3-dev libmpv-dev mpv libmpv2
                  libpulse-dev libpulse0 libfftw3-dev
                </CommandBlock>
                <p className="mb-4 text-gray-300">3. Build the project:</p>
                <CommandBlock>
                  mkdir build && cd build && cmake .. && make
                </CommandBlock>
                <p className="mb-4 text-gray-300">4. Run the application:</p>
                <CommandBlock>
                  cd output && ./linux-wallpaperengine
                </CommandBlock>
              </>
            )}
          </div>

          <div className="bg-gray-750 mt-8 rounded-md border border-gray-700 p-4">
            <h4 className="mb-2 flex items-center font-semibold text-white">
              <Terminal size={18} className="mr-2 text-primary-400" /> Final
              steps
            </h4>
            <p className="mb-2 text-gray-300">
              After installation, you'll need to install official Wallpaper
              Engine through Steam's Proton so base assets and your subscribed
              backgrounds are available.
            </p>
            <ol className="list-inside list-decimal space-y-2 pl-4 text-gray-300">
              <li>Make sure Steam is installed on your system</li>
              <li>
                Open your library and right click -{'>'} Properties on Wallpaper
                Engine
              </li>
              <li>
                Go to Compatibility and Enable Proton and finally click install
              </li>
              <li>
                Subscribe to wallpapers through Steam Workshop to make them
                available for linux-wallpaperengine
              </li>
            </ol>
            <p className="mt-2 text-gray-300">
              For more information please check the{' '}
              <a
                className="text-primary-400"
                href="https://github.com/Almamu/linux-wallpaperengine/blob/main/README.md">
                README.md
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
