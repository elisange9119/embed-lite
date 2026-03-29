import { EmbedProvider } from '../types.js';

import { youtube } from './youtube.js';
import { vimeo } from './vimeo.js';
import { twitter } from './twitter.js';
import { spotify } from './spotify.js';
import { codepen } from './codepen.js';
import { figma } from './figma.js';
import { reddit } from './reddit.js';

export const providers: EmbedProvider[] = [
  youtube,
  vimeo,
  twitter,
  spotify,
  codepen,
  figma,
  reddit
];