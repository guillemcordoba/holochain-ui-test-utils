import * as Buffer from "buffer";
export function randomByte() {
    return Math.floor(Math.random() * 1000) % 256;
}
export function randomEntryHash() {
    return `uhCEk${randomString(49)}`;
}
export function randomPubKey() {
    return `uhCAk${randomString(49)}`;
}
export function randomHash() {
    return {
        hash: Buffer.Buffer.from(Array(35)
            .fill(false)
            .map((_) => randomByte())),
        hash_type: Buffer.Buffer.from(Array(3)
            .fill(false)
            .map((_) => randomByte())),
    };
}
function randomString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export function hashToString(hash) {
    return hash.hash_type.toString("hex") + hash.hash.toString("hex");
}
//# sourceMappingURL=utils.js.map