"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerProcessContext = void 0;
class ContainerProcessContext {
    constructor(modem, id) {
        this.query = {};
        this.modem = modem;
        this.endpoint = `/containers/${id}/top`;
    }
    args(value) {
        this.query.ps_args = JSON.stringify(value);
        return this;
    }
    async exec() {
        return await this.modem.request(this.endpoint, "GET", this.query);
    }
}
exports.ContainerProcessContext = ContainerProcessContext;
