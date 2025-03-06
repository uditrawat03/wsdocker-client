"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modem_1 = require("../api/modem");
const containers_1 = require("../api/containers/containers");
const context_1 = require("../api/containers/context");
describe("Container", () => {
    let modem;
    let container;
    beforeEach(() => {
        const socketPath = "/var/run/docker.sock";
        modem = new modem_1.DockerModem({ socketPath, host: "localhost" });
        container = new containers_1.Container(modem);
    });
    test("should create an instance of Container", () => {
        expect(container).toBeInstanceOf(containers_1.Container);
    });
    test("list() should return an instance of ContainerListContext", () => {
        const result = container.list();
        expect(result).toBeInstanceOf(context_1.ContainerListContext);
    });
    test("inspect() should return an instance of ContainerInspectContext", () => {
        const containerID = "test-container-id";
        const result = container.inspect(containerID);
        expect(result).toBeInstanceOf(context_1.ContainerInspectContext);
    });
    test("processes() should return an instance of ContainerProcessContext", () => {
        const containerID = "test-container-id";
        const result = container.processes(containerID);
        expect(result).toBeInstanceOf(context_1.ContainerProcessContext);
    });
    test("stats() should return an instance of ContainerStatsContext", () => {
        const containerID = "test-container-id";
        const result = container.stats(containerID);
        expect(result).toBeInstanceOf(context_1.ContainerStatsContext);
    });
    test("changes() should return an instance of ContainerChangesFilesystemContext", () => {
        const containerID = "test-container-id";
        const result = container.changes(containerID);
        expect(result).toBeInstanceOf(context_1.ContainerChangesFilesystemContext);
    });
    test("logs() should return an instance of ContainerLogsContext", () => {
        const containerID = "test-container-id";
        const result = container.logs(containerID);
        expect(result).toBeInstanceOf(context_1.ContainerLogsContext);
    });
});
