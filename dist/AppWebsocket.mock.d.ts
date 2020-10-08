import { AgentPubKey, CellId } from "@holochain/conductor-api";
export declare type MockedZomes = {
    [zome_name: string]: any;
};
export declare class AppWebsocketMock {
    protected dnaHash: AgentPubKey;
    protected zomes: MockedZomes;
    cell_data: (string | AgentPubKey[])[][];
    constructor(dnaHash: AgentPubKey, zomes: MockedZomes);
    appInfo(): Promise<{
        cell_data: (string | AgentPubKey[])[][];
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
