import { blockContent } from './schemas/blockContent';
import { blockContentNoImage } from './schemas/blockContentNoImage';
import { theme } from './schemas/theme';
import { about } from './schemas/pages/about';
import { hero } from './schemas/hero';
import { footer } from './schemas/footer';
import { tatuerare } from './schemas/pages/tatuerare';
import { artist } from './schemas/artist';
import { meta } from './schemas/meta';

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
    meta,
  ],
};
