import { blockContent } from './schemas/blockContent/blockContent';
import { blockContentNoImage } from './schemas/blockContent/blockContentNoImage';
import { blockContentPlain } from './schemas/blockContent/blockContentPlain';
import { theme } from './schemas/theme';
import { home } from './schemas/pages/home';
import { hero } from './schemas/hero';
import { footer } from './schemas/footer';
import { artist } from './schemas/artist';
import { meta } from './schemas/meta';
import { information } from './schemas/pages/information';
import { schedule } from './schemas/pages/schedule';

export const schema = {
  types: [
    blockContent,
    blockContentNoImage,
    blockContentPlain,
    theme,
    hero,
    home,
    footer,
    artist,
    meta,
    information,
    schedule,
  ],
};
