import { DockerModem } from "../../modem";

export class ContainerChangesFilesystemContext {
  /**
   * This endpoint returns a live stream of a container’s resource usage statistics.
   * https://docs.docker.com/reference/api/engine/version/v1.47/#tag/Container/operation/ContainerStats
   */

  private modem: DockerModem;
  private endpoint: string;
  private query: { ps_args?: string } = {};

  constructor(modem: DockerModem, id: string) {
    this.modem = modem;
    this.endpoint = `/containers/${id}/changes`;
  }

  public args(value: string): this {
    this.query.ps_args = JSON.stringify(value);
    return this;
  }

  public async exec() {
    return await this.modem.request(this.endpoint, "GET", this.query);
  }
}
