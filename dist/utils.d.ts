import type { AgentPubKey, Hash } from "@holochain/conductor-api";
export declare function randomByte(): number;
export declare function randomEntryHash(): string;
export declare function randomPubKey(): string;
export declare function randomHash(): Hash;
export declare function hashToString(hash: AgentPubKey): string;
