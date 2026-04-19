import type { ElementFactory } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { EntityType, LangCode } from '@pseinfo/database-schema/enum/util';

export default ( {
  type: EntityType.ELEMENT,
  element: ElementSymbol.Li,
  data: {
    classification: {
      symbol: 'Li',
      atomicNumber: 3,
      block: ElementBlock.S,
      group: ElementGroup.ALKALI_METAL,
      column: PTColumn.COLUMN_1,
      period: PTPeriod.PERIOD_2,
      phase: Phase.SOLID,
      set: ElementSet.ALKALI_METAL,
      radioactive: false,
      synthetic: false,
      properties: [
        ElementProperty.NATURAL,
        ElementProperty.STABLE,
        ElementProperty.LIGHT_METAL
      ]
    },
    descriptive: {
      registry: {
        cas: '7439-93-2',
        cid: '3028194',
        chebi: 'CHEBI:30145',
        chembl: 'CHEMBL1201333',
        kegg: 'D08133',
        echa: '100.028.274',
        ec: '231-102-5',
        rtecs: 'RTECSOJ5540000',
        unii: '9FN79X2M3F',
        wikidata: 'Q568'
      },
      structure: {
        inChI: 'InChI=1S/Li',
        inChIkey: 'WHXSMMKQMYFTQS-UHFFFAOYSA-N',
        smiles: '[Li]',
        iupacName: 'lithium'
      },
      names: {
        [ LangCode.LATIN ]: [ 'Lithium' ],
        [ LangCode.ENGLISH ]: [ 'Lithium' ],
        [ LangCode.GERMAN ]: [ 'Lithium' ]
      }
    }
  }
} ) as const satisfies ElementFactory;
