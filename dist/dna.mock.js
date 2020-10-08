import { hashToString, randomHash } from "./utils";
export class DnaMock {
    constructor(zomes) {
        this.zomes = zomes;
        this.dnaHash = hashToString(randomHash());
    }
    async callZome(args) {
        return this.zomes[args.zome_name][args.fn_name](args.payload, args.provenance);
    }
}
//# sourceMappingURL=dna.mock.js.map