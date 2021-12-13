/** @format */

//import randomBytes from './randomBytes.ts'
import crypto from 'https://deno.land/std@0.117.0/node/crypto.ts';
// Based on the java client 0.10.2
// https://github.com/apache/kafka/blob/0.10.2/clients/src/main/java/org/apache/kafka/clients/producer/internals/DefaultPartitioner.java

/**
 * A cheap way to deterministically convert a number to a positive value. When the input is
 * positive, the original value is returned. When the input number is negative, the returned
 * positive value is the original value bit AND against 0x7fffffff which is not its absolutely
 * value.
 */
const toPositive = (x: any) => x & 0x7fffffff;

/**
 * The default partitioning strategy:
 *  - If a partition is specified in the message, use it
 *  - If no partition is specified but a key is present choose a partition based on a hash of the key
 *  - If no partition or key is present choose a partition in a round-robin fashion
 */
export default (murmur2: any) => () => {
  let counter = crypto.randomBytes(32).readUInt32BE(0);

  return ({ topic, partitionMetadata, message }: any) => {
    const numPartitions = partitionMetadata.length;
    const availablePartitions = partitionMetadata.filter(
      (p: any) => p.leader >= 0
    );
    const numAvailablePartitions = availablePartitions.length;

    if (message.partition !== null && message.partition !== undefined) {
      return message.partition;
    }

    if (message.key !== null && message.key !== undefined) {
      return toPositive(murmur2(message.key)) % numPartitions;
    }

    if (numAvailablePartitions > 0) {
      const i = toPositive(++counter) % numAvailablePartitions;
      return availablePartitions[i].partitionId;
    }

    // no partitions are available, give a non-available partition
    return toPositive(++counter) % numPartitions;
  };
};
