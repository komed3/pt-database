import type { ElementFactory } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { EntityType, ImageFormat, LangCode } from '@pseinfo/database-schema/enum/util';

import dewiki_265555462 from '../../references/dewiki_265555462';

export default ( {
  type: EntityType.ELEMENT,
  element: ElementSymbol.H,
  data: {
    classification: {
      symbol: 'H',
      atomicNumber: 1,
      block: ElementBlock.S,
      group: ElementGroup.ALKALI_METAL,
      column: PTColumn.COLUMN_1,
      period: PTPeriod.PERIOD_1,
      phase: Phase.GASEOUS,
      set: ElementSet.NON_METAL,
      radioactive: false,
      synthetic: false,
      properties: [
        ElementProperty.NATURAL,
        ElementProperty.VITAL,
        ElementProperty.STABLE
      ]
    },
    descriptive: {
      registry: {
        cas: '12385-13-6',
        cid: '783',
        chemspider: '4515072',
        chebi: 'CHEBI:18276',
        chembl: 'CHEMBL4297766',
        kegg: 'C00282',
        echa: '100.014.187',
        ec: '215-605-7',
        rtecs: 'RTECSMW8900000',
        unii: '7YNJ3PO35Z',
        drugbank: 'DB15127',
        wikidata: 'Q556'
      },
      structure: {
        smiles: '[H]',
        iupacName: 'atomic hydrogen'
      },
      names: {
        [ LangCode.LATIN ]: [ 'Hydrogenium' ],
        [ LangCode.ENGLISH ]: [ 'Hydrogen' ],
        [ LangCode.GERMAN ]: [ 'Wasserstoff' ],
        [ LangCode.FRENCH ]: [ 'Hydrogène' ],
        [ LangCode.SPANISH ]: [ 'Hidrógeno' ],
        [ LangCode.ITALIAN ]: [ 'Idrogeno' ]
      },
      discovery: {
        year: '1766',
        discoverer: 'Cavendish, Henry',
        country: 'GB',
        references: [ dewiki_265555462.refId ]
      },
      media: {
        images: [ {
          url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Hydrogen_discharge_tube.jpg',
          format: ImageFormat.JPG,
          attribution: {
            credits: '<a href="https://commons.wikimedia.org/wiki/File:Hydrogen_discharge_tube.jpg">Alchemist-hp (Diskussion) (www.pse-mendelejew.de)</a>, FAL, via Wikimedia Commons',
            license: 'FAL',
            author: 'Alchemist-hp (www.pse-mendelejew.de)',
            source: 'https://commons.wikimedia.org/wiki/File:Hydrogen_discharge_tube.jpg'
          },
          width: 3000,
          height: 1000
        } ]
      },
      weblinks: {
        wiki: {
          [ LangCode.ENGLISH ]: 'Hydrogen',
          [ LangCode.GERMAN ]: 'Wasserstoff'
        }
      }
    }
  }
} ) as const satisfies ElementFactory;
