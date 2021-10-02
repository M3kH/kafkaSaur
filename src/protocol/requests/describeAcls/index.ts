import requestV0 from './v0/request.ts'
import responseV0 from './v0/response.ts'

import requestV1 from './v1/request.ts'
import responseV1 from './v1/response.ts'

const versions = {
  0: ({
    resourceType,
    resourceName,
    principal,
    host,
    operation,
    permissionType
  }: any) => {
    const request = requestV0
    const response =responseV0
    return {
      request: request({ resourceType, resourceName, principal, host, operation, permissionType }),
      response,
    }
  },
  1: ({
    resourceType,
    resourceName,
    resourcePatternType,
    principal,
    host,
    operation,
    permissionType
  }: any) => {
    const request = requestV1
    const response =responseV1 
    return {
      request: request({
        resourceType,
        resourceName,
        resourcePatternType,
        principal,
        host,
        operation,
        permissionType,
      }),
      response,
    }
  },
}

export default{
  versions: Object.keys(versions),
  protocol: ({
    version
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  }: any) => versions[version],
}
