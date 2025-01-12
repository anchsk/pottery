import { ConfigContext } from 'sanity';
import { StructureBuilder } from 'sanity/structure';
import { DocumentIcon, DocumentsIcon, HomeIcon } from '@sanity/icons';

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
        (listItem: any) =>
          ![
            // Singletons
            'homepage',
          ].includes(listItem.getId())
      ),
    ]);
};
