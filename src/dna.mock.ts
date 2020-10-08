import { AgentPubKey } from "@holochain/conductor-api";
import { hashToString, randomHash } from "./utils";

export type MockedZomes = {
  [zome_name: string]: any;
};

export class DnaMock {
  dnaHash: string = hashToString(randomHash());
  constructor(protected zomes: MockedZomes) {}

  async callZome(args: {
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
