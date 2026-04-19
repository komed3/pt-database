import type { ElementFactory } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { EntityType, LangCode } from '@pseinfo/database-schema/enum/util';

export default ( {
  type: EntityType.ELEMENT,
  element: ElementSymbol.B,
  data: {
    classification: {
      symbol: 'B',
      atomicNumber: 5,
      block: ElementBlock.P,
      group: ElementGroup.BORON_GROUP,
      column: PTColumn.COLUMN_13,
      period: PTPeriod.PERIOD_2,
      phase: Phase.SOLID,
      set: ElementSet.METALLOID,
      radioactive: false,
      synthetic: false,
      properties: [
        ElementProperty.NATURAL,
        ElementProperty.STABLE,
        ElementProperty.SEMICONDUCTOR
      ]
    },
    descriptive: {
      registry: {
        cas: '7440-42-8',
        cid: '5462311',
        chebi: 'CHEBI:27560',
        echa: '100.028.319',
        ec: '231-151-2',
        rtecs: 'RTECSED7350000',
        unii: 'N9E3X5056Q',
        drugbank: 'DB11203',
        wikidata: 'Q618'
      },
      structure: {
        inChI: 'InChI=1S/B',
        inChIkey: 'ZOXJGFHDIHLPTG-UHFFFAOYSA-N',
        smiles: '[B]',
        iupacName: 'boron'
      },
      names: {
        [ LangCode.LATIN ]: [ 'Boron' ],
        [ LangCode.ENGLISH ]: [ 'Boron' ],
        [ LangCode.GERMAN ]: [ 'Bor' ]
      }
    }
  }
} ) as const satisfies ElementFactory;
