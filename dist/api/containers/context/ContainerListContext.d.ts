import { DockerModem } from "../../modem";
export declare class ContainerListContext {
    /**
     * Returns a list of containers.
     */
    private modem;
    private query;
    private endpoint;
    constructor(modem: DockerModem);
    all(): this;
    limit(value: number | string): this;
    size(): this;
    filters(value: Record<string, any>): this;
    exec(): Promise<any[]>;
}
