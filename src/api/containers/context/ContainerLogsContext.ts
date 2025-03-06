import { DockerModem } from "../../modem";

export class ContainerLogsContext {
  /**
   * Get stdout and stderr logs from a container.
   * Note: This endpoint works only for containers with the json-file or journald logging driver.
   */

  private modem: DockerModem;
  private endpoint: string;
  private query: { ps_args?: string } = {};

  constructor(modem: DockerModem, id: string) {
    this.modem = modem;
    this.endpoint = `/containers/${id}/logs`;
  }

  public args(value: string): this {
    this.query.ps_args = JSON.stringify(value);
    return this;
  }

  public async exec() {
    return await this.modem.request(this.endpoint, "GET", this.query);
  }
}
