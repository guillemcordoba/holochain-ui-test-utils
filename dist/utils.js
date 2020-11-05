export function randomByte() {
    return Math.floor(Math.random() * 1000) % 256;
}
export function randomEntryHash() {
    return `uhCEk${randomString(49)}`;
}
export function randomPubKey() {
    return `uhCAk${randomString(49)}`;
}
export function randomDnaHashRaw() {
    return {
        hash: Uint8Array.from(Array(35)
            .fill(false)
            .map((_) => randomByte())),
        hash_type: Uint8Array.from([132, 45, 36]),
    };
}
export function randomPubKeyRaw() {
    return {
        hash: Uint8Array.from(Array(35)
            .fill(false)
            .map((_) => randomByte())),
        hash_type: Uint8Array.from([132, 32, 36]),
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