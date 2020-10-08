import { randomHash } from "./utils";
export class AppWebsocketMock {
    constructor(dnaHash, zomes) {
        this.dnaHash = dnaHash;
        this.zomes = zomes;
        this.cell_data = [[[this.dnaHash, randomHash()], "mock-nick"]];
    }
    async appInfo() {
        return {
            cell_data: this.cell_data,
        };
    }
    async callZome(args) {
        return this.zomes[args.zome_name][args.fn_name](args.payload, args.provenance);
    }
}
//# sourceMappingURL=AppWebsocket.mock.js.map