"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const context_1 = require("./context");
class Container {
    constructor(modem) {
        this.modem = modem;
    }
    list() {
        return new context_1.ContainerListContext(this.modem);
    }
    inspect(containerID) {
        return new context_1.ContainerInspectContext(this.modem, containerID);
    }
    processes(containerID) {
        return new context_1.ContainerProcessContext(this.modem, containerID);
    }
    stats(containerID) {
        return new context_1.ContainerStatsContext(this.modem, containerID);
    }
    changes(containerID) {
        return new context_1.ContainerChangesFilesystemContext(this.modem, containerID);
    }
    logs(containerID) {
        return new context_1.ContainerLogsContext(this.modem, containerID);
    }
}
exports.Container = Container;
