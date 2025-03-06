"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerChangesFilesystemContext = void 0;
class ContainerChangesFilesystemContext {
    constructor(modem, id) {
        this.query = {};
        this.modem = modem;
        this.endpoint = `/containers/${id}/changes`;
    }
    args(value) {
        this.query.ps_args = JSON.stringify(value);
        return this;
    }
    async exec() {
        return await this.modem.request(this.endpoint, "GET", this.query);
    }
}
exports.ContainerChangesFilesystemContext = ContainerChangesFilesystemContext;
