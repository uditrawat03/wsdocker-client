"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerInspectContext = void 0;
class ContainerInspectContext {
    constructor(modem, id) {
        this.query = {};
        this.endpoint = `/containers/${id}/json`;
        this.modem = modem;
    }
    size() {
        this.query.size = "1";
        return this;
    }
    async exec() {
        return await this.modem.request(this.endpoint, "GET", this.query);
    }
}
exports.ContainerInspectContext = ContainerInspectContext;
