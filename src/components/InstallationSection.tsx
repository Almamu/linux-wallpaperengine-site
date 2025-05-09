import {
  Check,
  Copy,
  Mountain as Ubuntu,
  Redo as Fedora,
  Terminal,
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('ubuntu');

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
              active={activeTab === 'ubuntu'}
              onClick={() => setActiveTab('ubuntu')}
              icon={<Ubuntu size={18} />}>
              Ubuntu/Debian
            </Tab>
            <Tab
              active={activeTab === 'fedora'}
              onClick={() => setActiveTab('fedora')}
              icon={<Fedora size={18} />}>
              Fedora/RHEL
            </Tab>
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
            {activeTab === 'ubuntu' && (
              <>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Installing on Ubuntu/Debian
                </h3>
                <p className="mb-4 text-gray-300">
                  1. Install required dependencies:
                </p>
                <CommandBlock>
                  sudo apt update && sudo apt install -y build-essential cmake
                  libavcodec-dev libavformat-dev libavutil-dev libswscale-dev
                  libglm-dev libglfw3-dev libpulse-dev libx11-dev libxrandr-dev
                  libxinerama-dev libxi-dev libxcursor-dev
                </CommandBlock>
                <p className="mb-4 text-gray-300">
                  2. Install linux-wallpaperengine using the PPA:
                </p>
                <CommandBlock>
                  sudo add-apt-repository
                  ppa:wallpaperengine/linux-wallpaperengine sudo apt update sudo
                  apt install linux-wallpaperengine
                </CommandBlock>
                <p className="mb-4 text-gray-300">3. Run the application:</p>
                <CommandBlock>wallpaperengine</CommandBlock>
              </>
            )}

            {activeTab === 'fedora' && (
              <>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Installing on Fedora/RHEL
                </h3>
                <p className="mb-4 text-gray-300">
                  1. Install required dependencies:
                </p>
                <CommandBlock>
                  sudo dnf install -y gcc-c++ cmake ffmpeg-devel glm-devel
                  glfw-devel pulseaudio-libs-devel libX11-devel libXrandr-devel
                  libXinerama-devel libXi-devel libXcursor-devel
                </CommandBlock>
                <p className="mb-4 text-gray-300">
                  2. Install linux-wallpaperengine from COPR:
                </p>
                <CommandBlock>
                  sudo dnf copr enable wallpaperengine/linux-wallpaperengine
                  sudo dnf install linux-wallpaperengine
                </CommandBlock>
                <p className="mb-4 text-gray-300">3. Run the application:</p>
                <CommandBlock>wallpaperengine</CommandBlock>
              </>
            )}

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
                <CommandBlock>wallpaperengine</CommandBlock>
              </>
            )}

            {activeTab === 'source' && (
              <>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Building from Source
                </h3>
                <p className="mb-4 text-gray-300">1. Clone the repository:</p>
                <CommandBlock>
                  git clone https://github.com/Almamu/linux-wallpaperengine.git
                  cd linux-wallpaperengine
                </CommandBlock>
                <p className="mb-4 text-gray-300">
                  2. Install required dependencies (Ubuntu/Debian example):
                </p>
                <CommandBlock>
                  sudo apt update && sudo apt install -y build-essential cmake
                  libavcodec-dev libavformat-dev libavutil-dev libswscale-dev
                  libglm-dev libglfw3-dev libpulse-dev libx11-dev libxrandr-dev
                  libxinerama-dev libxi-dev libxcursor-dev
                </CommandBlock>
                <p className="mb-4 text-gray-300">3. Build the project:</p>
                <CommandBlock>
                  mkdir build && cd build cmake .. make -j$(nproc)
                </CommandBlock>
                <p className="mb-4 text-gray-300">4. Run the application:</p>
                <CommandBlock>./wallpaperengine</CommandBlock>
              </>
            )}
          </div>

          <div className="bg-gray-750 mt-8 rounded-md border border-gray-700 p-4">
            <h4 className="mb-2 flex items-center font-semibold text-white">
              <Terminal size={18} className="mr-2 text-primary-400" />{' '}
              Additional Setup
            </h4>
            <p className="mb-2 text-gray-300">
              After installation, you'll need to set up Steam Workshop
              integration:
            </p>
            <ol className="list-inside list-decimal space-y-2 pl-4 text-gray-300">
              <li>Make sure Steam is installed on your system</li>
              <li>Open linux-wallpaperengine and go to Settings</li>
              <li>Set your Steam workshop directory path</li>
              <li>
                Subscribe to wallpapers through Steam Workshop to make them
                available for linux-wallpaperengine
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
