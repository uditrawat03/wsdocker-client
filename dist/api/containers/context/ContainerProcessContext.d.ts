import { DockerModem } from "../../modem";
export declare class ContainerProcessContext {
    /**
     * This endpoint is not supported in windows
     * kindly use it only in linux/unix environment
     * This will only run on running container on exited
     * and stopped containers it'll give status 4**
     */
    private modem;
    private endpoint;
    private query;
    constructor(modem: DockerModem, id: string);
    args(value: string): this;
    exec(): Promise<any>;
}
