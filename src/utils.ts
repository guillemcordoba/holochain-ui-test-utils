import type { AgentPubKey, Hash } from "@holochain/conductor-api";

export function randomByte() {
  return Math.floor(Math.random() * 1000) % 256;
}

export function randomEntryHash(): string {
  return `uhCEk${randomString(49)}`;
}

export function randomPubKey(): string {
  return `uhCAk${randomString(49)}`;
}

export function randomDnaHashRaw(): Hash {
  return {
    hash: Uint8Array.from(
      Array(35)
        .fill(false)
        .map((_) => randomByte())
    ) as any,
    hash_type: Uint8Array.from([132, 45, 36]) as any,
  };
}

export function randomPubKeyRaw(): AgentPubKey {
  return {
    hash: Uint8Array.from(
      Array(35)
        .fill(false)
        .map((_) => randomByte())
    ) as any,
    hash_type: Uint8Array.from([132, 32, 36]) as any,
  };
}

function randomString(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function hashToString(hash: AgentPubKey) {
  return hash.hash_type.toString("hex") + hash.hash.toString("hex");
}
