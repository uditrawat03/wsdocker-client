import { DockerModem } from "../../modem";
export declare class ContainerInspectContext {
    private modem;
    private query;
    private endpoint;
    constructor(modem: DockerModem, id: string);
    size(): this;
    exec(): Promise<any[]>;
}
