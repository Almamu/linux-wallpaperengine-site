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
      return <CheckCircle size={20} className="text-green-400" />;
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
      return <span className="text-green-400">Supported</span>;
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
  const wallpaperTypes: StatusItemProps[] = [
    {
      feature: 'Video Wallpapers',
      status: 'supported' as StatusType,
      details: 'Full support through MPV',
    },
    {
      feature: 'Scene Wallpapers',
      status: 'partial' as StatusType,
      details:
        'Image effects, user properties and complex effects. Particles partially supported',
    },
    {
      feature: 'Web Wallpapers',
      status: 'partial' as StatusType,
      details: 'Basic support, settings not implemented',
    },
  ];

  const platforms: StatusItemProps[] = [
    {
      feature: 'X11',
      status: 'partial' as StatusType,
      details: 'As long as no compositor is drawing to the root screen',
    },
    {
      feature: 'Wayland',
      status: 'partial' as StatusType,
      details: 'Layer Shell required (wlroots)',
    },
  ];

  const features: StatusItemProps[] = [
    {
      feature: 'Audio Reactive',
      status: 'supported' as StatusType,
    },
    {
      feature: 'Multiple Monitors',
      status: 'supported' as StatusType,
    },
    {
      feature: 'Steam Workshop',
      status: 'supported' as StatusType,
      details: 'Detects available backgrounds downloaded to your Steam folder',
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
      </div>
    </section>
  );
};
