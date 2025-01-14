import { ConfigContext } from 'sanity';
import { ListItemBuilder, StructureBuilder } from 'sanity/structure';
import { HomeIcon } from '@sanity/icons';

export const structure = (S: StructureBuilder, context: ConfigContext) => {
  const currentDataset = context?.dataset;
  return S.list()
    .title(`Studio (${currentDataset} dataset)`)
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .icon(HomeIcon)
        .child(S.document().schemaType('homepage').documentId('homepage')),

      // Filter
      ...S.documentTypeListItems().filter(
        (listItem: ListItemBuilder) =>
          ![
            // Singletons
            'homepage',
          ].includes(listItem.getId() as string)
      ),
    ]);
};
