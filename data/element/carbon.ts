import type { ElementFactory } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { EntityType, LangCode } from '@pseinfo/database-schema/enum/util';

export default ( {
  type: EntityType.ELEMENT,
  element: ElementSymbol.C,
  data: {
    classification: {
      symbol: 'C',
      atomicNumber: 6,
      block: ElementBlock.P,
      group: ElementGroup.CARBON_GROUP,
      column: PTColumn.COLUMN_14,
      period: PTPeriod.PERIOD_2,
      phase: Phase.SOLID,
      set: ElementSet.NON_METAL,
      radioactive: false,
      synthetic: false,
      properties: [
        ElementProperty.NATURAL,
        ElementProperty.NATIVE,
        ElementProperty.VITAL,
        ElementProperty.STABLE,
        ElementProperty.SEMICONDUCTOR,
        ElementProperty.ANTIQUITY
      ]
    },
    descriptive: {
      registry: {
        cas: '7440-44-0',
        cid: '5462310',
        chemspider: '4575370',
        chebi: 'CHEBI:33415',
        kegg: 'C06265',
        echa: '100.028.321',
        ec: '231-153-3',
        rtecs: 'RTECSHL4158550',
        unii: '4XYU5U00C4',
        drugbank: 'DB09278',
        wikidata: 'Q623'
      },
      structure: {
        inChI: 'InChI=1S/C',
        inChIkey: 'OKTJSMMVPCPJKN-UHFFFAOYSA-N',
        smiles: 'C',
        iupacName: 'carbon'
      },
      names: {
        [ LangCode.LATIN ]: [ 'Carbo' ],
        [ LangCode.ENGLISH ]: [ 'Carbon' ],
        [ LangCode.GERMAN ]: [ 'Kohlenstoff' ]
      }
    }
  }
} ) as const satisfies ElementFactory;
