import type { ReferenceFactory } from '@pseinfo/database-schema/abstract/reference';
import { ReferenceType } from '@pseinfo/database-schema/enum/util';

export default ( {
  refId: 'dewiki:265555462',
  path: 'refs',
  data: {
    type: ReferenceType.MISC,
    accessed: '2026-04-18T16:13:00.000Z',
    url: 'https://de.wikipedia.org/w/index.php?title=Wasserstoff&oldid=265555462',
    author: 'Wikipedia',
    note: '[Online; Stand 18. April 2026]',
    title: 'Wasserstoff --- Wikipedia{,} die freie Enzyklopädie',
    year: '2026'
  }
} ) as const satisfies ReferenceFactory;
