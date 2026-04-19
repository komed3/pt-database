import type { ElementFactory } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { EntityType, LangCode } from '@pseinfo/database-schema/enum/util';

export default ( {
  type: EntityType.ELEMENT,
  element: ElementSymbol.He,
  data: {
    classification: {
      symbol: 'He',
      atomicNumber: 2,
      block: ElementBlock.S,
      group: ElementGroup.NOBLE_GAS,
      column: PTColumn.COLUMN_18,
      period: PTPeriod.PERIOD_1,
      phase: Phase.GASEOUS,
      set: ElementSet.NOBLE_GAS,
      radioactive: false,
      synthetic: false,
      properties: [
        ElementProperty.NATURAL,
        ElementProperty.STABLE
      ]
    },
    descriptive: {
      registry: {
        cas: '7440-59-7',
        cid: '23987',
        chebi: 'CHEBI:33681',
        chembl: 'CHEMBL1796997',
        kegg: 'D04420',
        echa: '100.028.334',
        ec: '275-187-7',
        rtecs: 'RTECSMH6520000',
        unii: '206GF3GB41',
        drugbank: 'DB09155',
        wikidata: 'Q560'
      },
      structure: {
        inChI: 'InChI=1S/He',
        inChIkey: 'SWQJXJOGLNCZEY-UHFFFAOYSA-N',
        smiles: '[He]',
        iupacName: 'helium'
      },
      names: {
        [ LangCode.LATIN ]: [ 'Helium' ],
        [ LangCode.ENGLISH ]: [ 'Helium' ],
        [ LangCode.GERMAN ]: [ 'Helium' ]
      }
    }
  }
} ) as const satisfies ElementFactory;
