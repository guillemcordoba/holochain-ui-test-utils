import { AgentPubKey, CellId } from "@holochain/conductor-api";
import { DnaMock } from "./dna.mock";
export declare class AppWebsocketMock {
    protected dnasToMock: DnaMock[];
    agentPubKey: AgentPubKey;
    cells: Array<{
        cell_id: CellId;
        dna: DnaMock;
    }>;
    constructor(dnasToMock: DnaMock[]);
    appInfo(): Promise<{
        cell_data: (string | CellId)[][];
    }>;
    callZome(args: {
        cap: void;
        cell_id: CellId;
        zome_name: string;
        fn_name: string;
        payload: any;
        provenance: AgentPubKey;
    }): Promise<any>;
}
