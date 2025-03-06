import { DockerModem } from "../../modem";
export declare class ContainerInspectContext {
    /**
     * Return low-level information about a container.
     */
    private modem;
    private query;
    private endpoint;
    constructor(modem: DockerModem, id: string);
    size(): this;
    exec(): Promise<any[]>;
}
