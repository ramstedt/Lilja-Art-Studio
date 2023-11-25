import { FaCog, FaCode } from 'react-icons/fa';
import { RiLayoutBottom2Fill, RiLayoutTop2Fill } from 'react-icons/ri';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import { PiHouseLineFill, PiOfficeChairFill } from 'react-icons/pi';

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .icon(FaCog)
        .child(
          S.list()
            .title('Config')
            .items([
              S.listItem()
                .title('Metadata')
                .icon(FaCode)
                .child(S.document().schemaType('meta').documentId('meta')),
              S.listItem()
                .title('Theme')
                .icon(IoColorPaletteSharp)
                .child(S.document().schemaType('theme').documentId('theme')),
              S.listItem()
                .title('Hero')
                .icon(RiLayoutTop2Fill)
                .child(S.document().schemaType('hero').documentId('hero')),
              S.listItem()
                .title('Footer')
                .icon(RiLayoutBottom2Fill)
                .child(S.document().schemaType('footer').documentId('footer')),
            ])
        ),
      S.documentTypeListItem('artists').title('Artists').icon(BsPersonFill),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(S.document().schemaType('home').documentId('home'))
                .icon(PiHouseLineFill),
              S.listItem()
                .title('Studio')
                .child(S.document().schemaType('studio').documentId('studio'))
                .icon(PiOfficeChairFill),
              S.listItem()
                .title('Tatuerare')
                .child(
                  S.document().schemaType('tatuerare').documentId('tatuerare')
                )
                .icon(BsPeopleFill),
            ])
        ),
    ]);
