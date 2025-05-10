import {
  ChevronDown,
  ChevronUp,
  ExternalLinkIcon,
  ImageIcon,
  LayersIcon,
  VideoIcon,
} from 'lucide-react';
import { useState } from 'react';

import bgs from '../../public/bgs.json';
import projects from '../../public/projects.json';
import { Link } from './ui/Link.tsx';
import { Video } from './ui/Video.tsx';
const images = bgs.map(bg => `/bgs/${bg}.jpg`);
const videos = bgs.map(bg => `/bgs/${bg}.webm`);
const steamBaseUrl = 'https://steamcommunity.com/sharedfiles/filedetails/?id=';

export const BackgroundShowcaseSection = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <section id="showcase" className="bg-gray-850 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Background <span className="text-primary-400">Showcase</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            These are some of the backgrounds that are regularly tested to
            prevent regressions and measure improvements.
          </p>
        </div>

        <div
          className={`mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ${expanded ? '' : 'max-h-[700px] overflow-y-hidden relative'}`}>
          <div className="absolute bottom-0 w-full h-16 bg-linear-to-b from-transparent to-gray-850"></div>
          {bgs.map((bg, index) => {
            // @ts-expect-error the in check should take care of actually validating this
            const project = bg in projects ? projects[bg] : null;

            return (
              <div
                key={bg}
                className="flex flex-col gap-2 rounded-xl border border-gray-700 bg-gray-800 p-6">
                <Video
                  className="h-[200px]"
                  src={videos[index]}
                  poster={images[index]}
                />
                <div className="flex gap-2 items-center">
                  <span>
                    {project?.type.toLowerCase() === 'video' ? (
                      <VideoIcon size={32} />
                    ) : project?.type.toLowerCase() === 'scene' ? (
                      <ImageIcon size={32} />
                    ) : (
                      <LayersIcon size={32} />
                    )}
                  </span>
                  <span className="text-primary-400 max-w-full min-w-0">
                    <Link
                      className="max-w-full flex gap-2 items-center"
                      external
                      href={`${steamBaseUrl}${bgs[index]}`}>
                      <span className="overflow-hidden overflow-ellipsis whitespace-nowrap min-w-0">
                        {project?.title}
                      </span>
                      <span>
                        <ExternalLinkIcon size={18} />
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-10">
          {expanded ? (
            <button
              className="text-gray-600 cursor-pointer hover:text-primary-400"
              onClick={() => setExpanded(false)}>
              <ChevronUp size={32} />
            </button>
          ) : (
            <button
              className="text-gray-600 cursor-pointer hover:text-primary-400"
              onClick={() => setExpanded(true)}>
              <ChevronDown size={32} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
