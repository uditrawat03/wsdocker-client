"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docker = void 0;
const docker_1 = require("./docker");
Object.defineProperty(exports, "Docker", { enumerable: true, get: function () { return docker_1.Docker; } });
const docker = new docker_1.Docker('/var/run/docker.sock');
const id = '438d70829d5bb49fd09c9d2c97789ba0501243986e4a7415c20edf00848de586';
docker.container().stats(id).exec().then(res => {
    console.log(res);
});
