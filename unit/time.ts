import type { Quantity } from '@pseinfo/database-schema/abstract/unit';
import { MetricSystem } from '@pseinfo/database-schema/enum/util';

export default ( {
  dimension: {
    symbol: 'T',
    name: 'time',
    si: true,
    vector: [ 0, 0, 1, 0, 0, 0, 0 ]
  },
  baseUnit: 's',
  units: {
    s: {
      symbol: 's',
      name: 'second',
      system: MetricSystem.METRIC,
      isBase: true,
      prefixable: true
    },
    min: {
      symbol: 'min',
      name: 'minute',
      system: MetricSystem.METRIC,
      isBase: false,
      prefixable: false,
      conversion: {
        factor: 60
      }
    },
    h: {
      symbol: 'h',
      name: 'hour',
      system: MetricSystem.METRIC,
      isBase: false,
      prefixable: false,
      conversion: {
        factor: 3600
      }
    },
    d: {
      symbol: 'd',
      name: 'day',
      system: MetricSystem.METRIC,
      isBase: false,
      prefixable: false,
      conversion: {
        factor: 86400
      }
    },
    a: {
      symbol: 'a',
      name: 'year',
      system: MetricSystem.METRIC,
      isBase: false,
      prefixable: false,
      conversion: {
        factor: 31557600
      }
    },
    't{P}': {
      symbol: 't{P}',
      name: 'Planck time',
      system: MetricSystem.METRIC,
      isBase: false,
      prefixable: false,
      conversion: {
        factor: 5.391247e-44
      }
    }
  }
} ) as const satisfies Quantity< 'time' >;
