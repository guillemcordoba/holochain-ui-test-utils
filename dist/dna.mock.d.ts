import { AgentPubKey } from "@holochain/conductor-api";
export declare type MockedZomes = {
    [zome_name: string]: any;
};
export declare class DnaMock {
    protected zomes: MockedZomes;
    dnaHash: string;
    constructor(zomes: MockedZomes);
    callZome(args: {
        zome_name: string;
        fn_name: string;
        payload: any;
        provenance: AgentPubKey;
    }): Promise<any>;
}
