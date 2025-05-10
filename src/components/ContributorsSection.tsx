import { Link } from './ui/Link.tsx';

export const ContributorsSection = () => {
  return (
    <section id="download" className="bg-gray-850 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-primary-400">Contributors</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            These are some of the people who have contributed to
            linux-wallpaperengine.
          </p>
        </div>

        <div className="mx-auto max-w-6xl flex flex-col items-center">
          <a href="https://github.com/Almamu/linux-wallpaperengine/graphs/contributors">
            <img src="https://contrib.rocks/image?repo=Almamu/linux-wallpaperengine" />
          </a>
          <span className="text-sm">
            Made with{' '}
            <Link className="text-primary-400" href="https://contrib.rocks">
              contrib.rocks
            </Link>
            .
          </span>
        </div>
      </div>
    </section>
  );
};
