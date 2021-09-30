// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Encoder'.
import Encoder from '../../../encoder'
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'apiKey'.
import { ApiVersions as apiKey } from '../../apiKeys'

/**
 * ApiVersionRequest => ApiKeys
 */

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
export default() => ({
  apiKey,
  apiVersion: 0,
  apiName: 'ApiVersions',
  encode: async () => new Encoder(),
})
