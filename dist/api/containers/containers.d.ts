import { DockerModem } from "../modem";
import { ContainerInspectContext, ContainerListContext, ContainerProcessContext } from "./context";
export declare class Container {
    private modem;
    constructor(modem: DockerModem);
    list(): ContainerListContext;
    inspect(containerID: string): ContainerInspectContext;
    processes(containerID: string): ContainerProcessContext;
}
