import { blockContent } from './schemas/blockContent';
import { blockContentNoImage } from './schemas/blockContentNoImage';
import { category } from './schemas/category';
import { post } from './schemas/post';
import { author } from './schemas/author';
import { theme } from './schemas/theme';
import { about } from './schemas/pages/about';
import { hero } from './schemas/hero';
import { footer } from './schemas/footer';
import { tatuerare } from './schemas/pages/tatuerare';
import { artist } from './schemas/artist';

export const schema = {
  types: [
    blockContent,
    blockContentNoImage,
    theme,
    hero,
    about,
    footer,
    tatuerare,
    artist,
  ],
};
