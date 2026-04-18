import type { ElementData } from '@pseinfo/database-schema/entity/element';
import { ElementBlock, ElementGroup, ElementProperty, ElementSet, PTColumn, PTPeriod } from '@pseinfo/database-schema/enum/element';
import { Phase } from '@pseinfo/database-schema/enum/physics';
import { LangCode } from '@pseinfo/database-schema/enum/util';

export default ( {
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
    registry: {},
    structure: {},
    names: {
      [ LangCode.LATIN ]: [ 'Hydrogenium' ],
      [ LangCode.ENGLISH ]: [ 'Hydrogen' ],
      [ LangCode.GERMAN ]: [ 'Wasserstoff' ]
    }
  }
} ) as const satisfies ElementData;
