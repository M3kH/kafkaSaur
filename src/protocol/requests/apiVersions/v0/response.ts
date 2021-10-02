/** @format */

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'Decoder'.
import Decoder from '../../../decoder.ts';
import {
  failure,
  createErrorFromCode,
  failIfVersionNotSupported,
} from '../../../error.ts';

/**
 * ApiVersionResponse => ApiVersions
 *   ErrorCode = INT16
 *   ApiVersions = [ApiVersion]
 *     ApiVersion = ApiKey MinVersion MaxVersion
 *       ApiKey = INT16
 *       MinVersion = INT16
 *       MaxVersion = INT16
 */

const apiVersion = (decoder: any) => ({
  apiKey: decoder.readInt16(),
  minVersion: decoder.readInt16(),
  maxVersion: decoder.readInt16(),
});

const decode = async (rawData: any) => {
  const decoder = new Decoder(rawData);
  const errorCode = decoder.readInt16();

  failIfVersionNotSupported(errorCode);

  return {
    errorCode,
    apiVersions: decoder.readArray(apiVersion),
  };
};

const parse = async (data: any) => {
  if (failure(data.errorCode)) {
    throw createErrorFromCode(data.errorCode);
  }

  return data;
};

export default { decode, parse };
