"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerListContext = void 0;
class ContainerListContext {
    constructor(modem) {
        this.query = {};
        this.endpoint = "/containers/json";
        this.modem = modem;
    }
    all() {
        this.query.all = "1";
        return this;
    }
    limit(value) {
        this.query.limit = value.toString();
        return this;
    }
    size() {
        this.query.size = "1";
        return this;
    }
    filters(value) {
        this.query.filters = JSON.stringify(value);
        return this;
    }
    async exec() {
        return await this.modem.request(this.endpoint, "GET", this.query);
    }
}
exports.ContainerListContext = ContainerListContext;
