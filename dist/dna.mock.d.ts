import { AgentPubKey, Hash } from "@holochain/conductor-api";
export declare type MockedZomes = {
    [zome_name: string]: any;
};
export declare class DnaMock {
    protected zomes: MockedZomes;
    dnaHash: Hash;
    constructor(zomes: MockedZomes);
    callZome(args: {
        zome_name: string;
        fn_name: string;
        payload: any;
        provenance: AgentPubKey;
    }): Promise<any>;
}
