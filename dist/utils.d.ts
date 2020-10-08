/// <reference types="node" />
import type { AgentPubKey } from "@holochain/conductor-api";
export declare function randomByte(): number;
export declare function randomHash(): {
    hash: Buffer;
    hash_type: Buffer;
};
export declare function hashToString(hash: AgentPubKey): string;
