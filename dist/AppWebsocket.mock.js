import { randomHash } from "./utils";
import { isEqual } from "lodash-es";
export class AppWebsocketMock {
    constructor(dnasToMock) {
        this.dnasToMock = dnasToMock;
        this.agentPubKey = randomHash();
        this.cells = [];
        this.cells = dnasToMock.map((dnaToMock) => ({
            cell_id: [dnaToMock.dnaHash, this.agentPubKey],
            dna: dnaToMock,
        }));
    }
    async appInfo() {
        return {
            cell_data: this.cells.map((cell) => [cell.cell_id, "mock-nick"]),
        };
    }
    async callZome(args) {
        const cell = this.cells.find((cell) => isEqual(cell.cell_id, args.cell_id));
        if (!cell)
            throw new Error(`Could not find cell for cellId ${JSON.stringify(args.cell_id)}`);
        return cell.dna.callZome({
            zome_name: args.zome_name,
            fn_name: args.fn_name,
            payload: args.payload,
            provenance: args.provenance,
        });
    }
}
//# sourceMappingURL=AppWebsocket.mock.js.map