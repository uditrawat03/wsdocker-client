import { Docker } from "./docker";


const docker = new Docker('/var/run/docker.sock')
const id = '438d70829d5bb49fd09c9d2c97789ba0501243986e4a7415c20edf00848de586';
docker.container().stats(id).exec().then(res => {
    console.log(res);
});


export { Docker };
