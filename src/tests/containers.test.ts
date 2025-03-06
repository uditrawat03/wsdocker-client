import { DockerModem } from "../api/modem";
import { Container } from "../api/containers/containers";
import {
  ContainerChangesFilesystemContext,
  ContainerInspectContext,
  ContainerListContext,
  ContainerLogsContext,
  ContainerProcessContext,
  ContainerStatsContext,
} from "../api/containers/context";

describe("Container", () => {
  let modem: DockerModem;
  let container: Container;

  beforeEach(() => {
    const socketPath = "/var/run/docker.sock";
    modem = new DockerModem({ socketPath, host: "localhost" });
    container = new Container(modem);
  });

  test("should create an instance of Container", () => {
    expect(container).toBeInstanceOf(Container);
  });

  test("list() should return an instance of ContainerListContext", () => {
    const result = container.list();
    expect(result).toBeInstanceOf(ContainerListContext);
  });

  test("inspect() should return an instance of ContainerInspectContext", () => {
    const containerID = "test-container-id";
    const result = container.inspect(containerID);
    expect(result).toBeInstanceOf(ContainerInspectContext);
  });

  test("processes() should return an instance of ContainerProcessContext", () => {
    const containerID = "test-container-id";
    const result = container.processes(containerID);
    expect(result).toBeInstanceOf(ContainerProcessContext);
  });

  test("stats() should return an instance of ContainerStatsContext", () => {
    const containerID = "test-container-id";
    const result = container.stats(containerID);
    expect(result).toBeInstanceOf(ContainerStatsContext);
  });

  test("changes() should return an instance of ContainerChangesFilesystemContext", () => {
    const containerID = "test-container-id";
    const result = container.changes(containerID);
    expect(result).toBeInstanceOf(ContainerChangesFilesystemContext);
  });

  test("logs() should return an instance of ContainerLogsContext", () => {
    const containerID = "test-container-id";
    const result = container.logs(containerID);
    expect(result).toBeInstanceOf(ContainerLogsContext);
  });
});
