import { DockerModem } from "../../modem";
export declare class ContainerChangesFilesystemContext {
    /**
     * This endpoint returns a live stream of a container’s resource usage statistics.
     * https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStats
     */
    private modem;
    private endpoint;
    private query;
    constructor(modem: DockerModem, id: string);
    args(value: string): this;
    exec(): Promise<any>;
}
