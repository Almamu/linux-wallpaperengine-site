import type { IndexComponentProps } from '@wroud/vite-plugin-ssg';
import {
  Body,
  Head,
  Html,
  Link,
} from '@wroud/vite-plugin-ssg/react/components';

import { App } from './App';
import indexStyles from './index.css?url';

export default function Index(_props: IndexComponentProps) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Linux Wallpaper Engine</title>
        <Link rel="stylesheet" href={indexStyles} />
      </Head>
      <Body>
        <App />
      </Body>
    </Html>
  );
}
