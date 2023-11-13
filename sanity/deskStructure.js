import { FaCog } from 'react-icons/fa';


export const myStructure = (S) =>
S.list()
.title('Content')
.items([
S.listItem()
.title('Config')
.icon(() => <FaCog />)
.child(
  S.list()
    .title('Config')
    .items([
        S.documentTypeListItem('theme').title('Theme'),
        S.documentTypeListItem('hero').title('Hero'),
        S.documentTypeListItem('footer').title('Footer'),
    ])
),
  S.listItem()
    .title('Pages')
    .child(
      S.list()
        .title('Pages')
        .items([
          S.documentTypeListItem('about').title('About'),
        ])
    ),
]);