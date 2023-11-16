import { blockContent } from './schemas/blockContent';
import { category } from './schemas/category';
import { post } from './schemas/post';
import { author } from './schemas/author';
import { theme } from './schemas/theme';
import { about } from './schemas/pages/about';
import { hero } from './schemas/hero';
import { footer } from './schemas/footer';

export const schema = {
  types: [blockContent, theme, hero, about, footer],
};
