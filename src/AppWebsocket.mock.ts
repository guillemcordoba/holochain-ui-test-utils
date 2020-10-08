import { AgentPubKey, CellId } from "@holochain/conductor-api";
import { randomHash } from "./utils";

export type MockedZomes = {
  [zome_name: string]: any;
};

export class AppWebsocketMock {
  cell_data = [[[this.dnaHash, randomHash()], "mock-nick"]];

  constructor(protected dnaHash: AgentPubKey, protected zomes: MockedZomes) {}

  async appInfo() {
    return {
      cell_data: this.cell_data,
    };
  }

  async callZome(args: {
    cap: void;
    cell_id: CellId;
    zome_name: string;
    fn_name: string;
    payload: any;
    provenance: AgentPubKey;
  }) {
    return this.zomes[args.zome_name][args.fn_name](
      args.payload,
      args.provenance
    );
  }
}
