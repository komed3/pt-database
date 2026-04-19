import type { ElementFactory } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { EntityType, LangCode } from '@pseinfo/database-schema/enum/util';

export default ( {
  type: EntityType.ELEMENT,
  element: ElementSymbol.Be,
  data: {
    classification: {
      symbol: 'Be',
      atomicNumber: 4,
      block: ElementBlock.S,
      group: ElementGroup.ALKALINE_EARTH_METAL,
      column: PTColumn.COLUMN_2,
      period: PTPeriod.PERIOD_2,
      phase: Phase.SOLID,
      set: ElementSet.ALKALINE_EARTH_METAL,
      radioactive: false,
      synthetic: false,
      properties: [
        ElementProperty.NATURAL,
        ElementProperty.MONONUCLEIDE,
        ElementProperty.STABLE,
        ElementProperty.LIGHT_METAL
      ]
    },
    descriptive: {
      registry: {
        cas: '7440-41-7',
        cid: '5460467',
        chebi: 'CHEBI:30501',
        kegg: 'C16460',
        echa: '100.028.318',
        ec: '231-150-7',
        rtecs: 'RTECSDS1750000',
        unii: 'OW5102UV6N',
        wikidata: 'Q569'
      },
      structure: {
        inChI: 'InChI=1S/Be',
        inChIkey: 'ATBAMAFKBVZNFJ-UHFFFAOYSA-N',
        smiles: '[Be]',
        iupacName: 'beryllium'
      },
      names: {
        [ LangCode.LATIN ]: [ 'Beryllium' ],
        [ LangCode.ENGLISH ]: [ 'Beryllium' ],
        [ LangCode.GERMAN ]: [ 'Beryllium' ]
      }
    }
  }
} ) as const satisfies ElementFactory;
