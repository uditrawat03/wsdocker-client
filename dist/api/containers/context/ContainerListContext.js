"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modem.request(this.endpoint, "GET", this.query);
        });
    }
}
exports.ContainerListContext = ContainerListContext;
