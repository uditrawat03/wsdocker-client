import { DockerModem } from "../../modem";
export declare class ContainerLogsContext {
    /**
     * Get stdout and stderr logs from a container.
     * Note: This endpoint works only for containers with the json-file or journald logging driver.
     */
    private modem;
    private endpoint;
    private query;
    constructor(modem: DockerModem, id: string);
    args(value: string): this;
    exec(): Promise<any>;
}
