"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerStatsContext = void 0;
class ContainerStatsContext {
    constructor(modem, id) {
        this.query = {};
        this.modem = modem;
        this.endpoint = `/containers/${id}/stats`;
    }
    args(value) {
        this.query.ps_args = JSON.stringify(value);
        return this;
    }
    async exec() {
        return await this.modem.request(this.endpoint, "GET", this.query);
    }
}
exports.ContainerStatsContext = ContainerStatsContext;
