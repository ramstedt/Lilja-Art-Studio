import { blockContent } from './schemas/blockContent/blockContent';
import { blockContentNoImage } from './schemas/blockContent/blockContentNoImage';
import { blockContentPlain } from './schemas/blockContent/blockContentPlain';
import { theme } from './schemas/theme';
import { home } from './schemas/pages/home';
import { hero } from './schemas/hero';
import { footer } from './schemas/footer';
import { tatuerare } from './schemas/pages/tatuerare';
import { artist } from './schemas/artist';
import { meta } from './schemas/meta';

export const schema = {
  types: [
    blockContent,
    blockContentNoImage,
    blockContentPlain,
    theme,
    hero,
    home,
    footer,
    tatuerare,
    artist,
    meta,
  ],
};
