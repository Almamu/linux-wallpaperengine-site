import { AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

// Status types
type StatusType = 'supported' | 'partial' | 'planned' | 'unsupported';

interface StatusItemProps {
  feature: string;
  status: StatusType;
  details?: string;
}

interface StatusCategoryProps {
  title: string;
  items: StatusItemProps[];
}

const StatusIcon = ({ status }: { status: StatusType }) => {
  switch (status) {
    case 'supported':
      return <CheckCircle size={20} className="text-primary-400" />;
    case 'partial':
      return <AlertCircle size={20} className="text-yellow-400" />;
    case 'planned':
      return <Clock size={20} className="text-secondary-400" />;
    case 'unsupported':
      return <XCircle size={20} className="text-red-400" />;
    default:
      return null;
  }
};

const StatusLabel = ({ status }: { status: StatusType }) => {
  switch (status) {
    case 'supported':
      return <span className="text-primary-400">Supported</span>;
    case 'partial':
      return <span className="text-yellow-400">Partial Support</span>;
    case 'planned':
      return <span className="text-secondary-400">Planned</span>;
    case 'unsupported':
      return <span className="text-red-400">Unsupported</span>;
    default:
      return null;
  }
};

const StatusItem = ({ feature, status, details }: StatusItemProps) => {
  return (
    <div className="hover:bg-gray-750 mb-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <StatusIcon status={status} />
          <span className="ml-3 font-medium text-white">{feature}</span>
        </div>
        <StatusLabel status={status} />
      </div>
      {details && <p className="mt-2 pl-7 text-sm text-gray-400">{details}</p>}
    </div>
  );
};

const StatusCategory = ({ title, items }: StatusCategoryProps) => {
  return (
    <div className="mb-10">
      <h3 className="mb-4 border-b border-gray-700 pb-2 text-xl font-semibold text-white">
        {title}
      </h3>
      <div>
        {items.map((item, index) => (
          <StatusItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export const StatusSection = () => {
  const wallpaperTypes = [
    {
      feature: 'Video Wallpapers',
      status: 'supported' as StatusType,
      details: 'Full support for mp4, webm and other video formats',
    },
    {
      feature: 'Scene Wallpapers',
      status: 'partial' as StatusType,
      details: 'Most effects supported, some complex scenes may have issues',
    },
    {
      feature: 'Web Wallpapers',
      status: 'partial' as StatusType,
      details: 'Basic support, some interactive elements may not work properly',
    },
    {
      feature: 'Application Wallpapers',
      status: 'unsupported' as StatusType,
    },
  ];

  const platforms = [
    {
      feature: 'X11',
      status: 'supported' as StatusType,
    },
    {
      feature: 'Wayland',
      status: 'partial' as StatusType,
      details: 'Basic support via XWayland, native support in development',
    },
    {
      feature: 'KDE',
      status: 'supported' as StatusType,
    },
    {
      feature: 'GNOME',
      status: 'supported' as StatusType,
    },
    {
      feature: 'i3/Sway',
      status: 'supported' as StatusType,
    },
  ];

  const features = [
    {
      feature: 'Audio Reactive',
      status: 'partial' as StatusType,
      details: 'Works with PulseAudio, support for PipeWire in development',
    },
    {
      feature: 'Multiple Monitors',
      status: 'supported' as StatusType,
    },
    {
      feature: 'Steam Workshop',
      status: 'supported' as StatusType,
    },
    {
      feature: 'Customization Settings',
      status: 'partial' as StatusType,
      details: 'Core settings implemented, advanced options in development',
    },
  ];

  return (
    <section id="status" className="bg-gray-850 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Compatibility <span className="text-primary-400">Status</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Current implementation status of Wallpaper Engine features on Linux
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <StatusCategory title="Wallpaper Types" items={wallpaperTypes} />
          <StatusCategory title="Desktop Environments" items={platforms} />
          <StatusCategory title="Features & Integrations" items={features} />
        </div>

        <div className="mt-12 rounded-lg border border-gray-700 bg-gray-800 p-5">
          <div className="mb-4 flex items-start">
            <Clock size={24} className="mr-3 mt-1 text-primary-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Last Updated</h3>
              <p className="mt-1 text-gray-300">
                Status information last updated on April 15, 2025
              </p>
            </div>
          </div>
          <p className="text-gray-400">
            This status board is updated regularly as development progresses.
            Check the GitHub repository for the most current information or to
            contribute to the project.
          </p>
        </div>
      </div>
    </section>
  );
};
