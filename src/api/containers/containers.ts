import { DockerModem } from "../modem";
import {
  ContainerChangesFilesystemContext,
  ContainerInspectContext,
  ContainerListContext,
  ContainerLogsContext,
  ContainerProcessContext,
  ContainerStatsContext,
} from "./context";

export class Container {
  //endpoint: '/containers/json'
  private modem: DockerModem;

  constructor(modem: DockerModem) {
    this.modem = modem;
  }

  public list(): ContainerListContext {
    return new ContainerListContext(this.modem);
  }

  public inspect(containerID: string): ContainerInspectContext {
    return new ContainerInspectContext(this.modem, containerID);
  }

  public processes(containerID: string): ContainerProcessContext {
    return new ContainerProcessContext(this.modem, containerID);
  }

  public stats(containerID: string): ContainerStatsContext {
    return new ContainerStatsContext(this.modem, containerID);
  }

  public changes(containerID: string): ContainerChangesFilesystemContext {
    return new ContainerChangesFilesystemContext(this.modem, containerID);
  }

  public logs(containerID: string): ContainerLogsContext {
    return new ContainerLogsContext(this.modem, containerID);
  }
}
