"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docker_1 = require("../docker");
const modem_1 = require("../api/modem");
const api_1 = require("../api");
jest.mock("../api");
jest.mock("../api/modem");
describe("Docker", () => {
    const socketPath = "/var/run/docker.sock";
    let docker;
    beforeEach(() => {
        modem_1.DockerModem.mockClear();
        api_1.Container.mockClear();
        docker = new docker_1.Docker(socketPath);
    });
    it("should create an instance of Docker", () => {
        expect(docker).toBeDefined();
    });
    it("should create a new Container instance when container method is called", () => {
        const container = docker.container();
        expect(api_1.Container).toHaveBeenCalledWith(docker["modem"]);
        expect(container).toBeInstanceOf(api_1.Container);
    });
});
