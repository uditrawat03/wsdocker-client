"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerLogsContext = void 0;
class ContainerLogsContext {
    constructor(modem, id) {
        this.query = {};
        this.modem = modem;
        this.endpoint = `/containers/${id}/logs`;
    }
    args(value) {
        this.query.ps_args = JSON.stringify(value);
        return this;
    }
    async exec() {
        return await this.modem.request(this.endpoint, "GET", this.query);
    }
}
exports.ContainerLogsContext = ContainerLogsContext;
