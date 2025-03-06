import { DockerModem } from "../modem";
import { ContainerChangesFilesystemContext, ContainerInspectContext, ContainerListContext, ContainerLogsContext, ContainerProcessContext, ContainerStatsContext } from "./context";
export declare class Container {
    private modem;
    constructor(modem: DockerModem);
    list(): ContainerListContext;
    inspect(containerID: string): ContainerInspectContext;
    processes(containerID: string): ContainerProcessContext;
    stats(containerID: string): ContainerStatsContext;
    changes(containerID: string): ContainerChangesFilesystemContext;
    logs(containerID: string): ContainerLogsContext;
}
