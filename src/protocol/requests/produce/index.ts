import requestV0 from "./v0/request.ts"
import responseV0 from "./v0/response.ts"
import requestV1 from "./v1/request.ts"
import responseV1 from "./v1/response.ts"
import requestV2 from "./v2/request.ts"
import responseV2 from "./v2/response.ts"
import requestV3 from "./v3/request.ts"
import responseV3 from "./v3/response.ts"
import requestV4 from "./v4/request.ts"
import responseV4 from "./v4/response.ts"
import requestV5 from "./v5/request.ts"
import responseV5 from "./v5/response.ts"
import requestV6 from "./v6/request.ts"
import responseV6 from "./v6/response.ts"
import requestV7 from "./v7/request.ts"
import responseV7 from "./v7/response.ts"

const versions: Record<number, any> = {
  0: ({
    acks,
    timeout,
    topicData
  }: any) => {
    const request = requestV0;
    const response = responseV0;
    return { request: request({ acks, timeout, topicData }), response }
  },
  1: ({
    acks,
    timeout,
    topicData
  }: any) => {
    const request = requestV1;
    const response = responseV1;
    return { request: request({ acks, timeout, topicData }), response }
  },
  2: ({
    acks,
    timeout,
    topicData,
    compression
  }: any) => {
    const request = requestV2;
    const response = responseV2;
    return { request: request({ acks, timeout, compression, topicData }), response }
  },
  3: ({
    acks,
    timeout,
    compression,
    topicData,
    transactionalId,
    producerId,
    producerEpoch
  }: any) => {
    const request = requestV3
    const response = responseV3
    return {
      request: request({
        acks,
        timeout,
        compression,
        topicData,
        transactionalId,
        producerId,
        producerEpoch,
      }),
      response,
    }
  },
  4: ({
    acks,
    timeout,
    compression,
    topicData,
    transactionalId,
    producerId,
    producerEpoch
  }: any) => {
    const request = requestV4;
    const response = responseV4;
    return {
      request: request({
        acks,
        timeout,
        compression,
        topicData,
        transactionalId,
        producerId,
        producerEpoch,
      }),
      response,
    }
  },
  5: ({
    acks,
    timeout,
    compression,
    topicData,
    transactionalId,
    producerId,
    producerEpoch
  }: any) => {
    const request = requestV5
    const response = responseV5
    return {
      request: request({
        acks,
        timeout,
        compression,
        topicData,
        transactionalId,
        producerId,
        producerEpoch,
      }),
      response,
    }
  },
  6: ({
    acks,
    timeout,
    compression,
    topicData,
    transactionalId,
    producerId,
    producerEpoch
  }: any) => {
    
    const request = requestV6
    const response = responseV6
    return {
      request: request({
        acks,
        timeout,
        compression,
        topicData,
        transactionalId,
        producerId,
        producerEpoch,
      }),
      response,
    }
  },
  7: ({
    acks,
    timeout,
    compression,
    topicData,
    transactionalId,
    producerId,
    producerEpoch
  }: any) => {
    const request = requestV7;
    const response = responseV7
    return {
      request: request({
        acks,
        timeout,
        compression,
        topicData,
        transactionalId,
        producerId,
        producerEpoch,
      }),
      response,
    }
  },
}

export default {
  versions: Object.keys(versions),
  protocol: ({
    version
  }: any) => versions[version],
}
