import * as http from "http";
import * as https from "https";
import * as qs from "qs";

interface DockerModemProps {
  socketPath?: string;
  host?: string;
  port?: number;
  protocol?: "http" | "https";
}

export class DockerModem {
  private socketPath: string;
  private host: string;
  private port: number;
  private protocol: "http" | "https";

  constructor(props: DockerModemProps) {
    this.socketPath = props.socketPath || "/var/run/docker.sock";
    this.host = props.host || "localhost";
    this.port = props.port || 2375;
    this.protocol = props.protocol || "http";
  }

  public async request(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    queryParams: Record<string, any>
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = queryParams ? qs.stringify(queryParams) : undefined;
      const path = query ? `${endpoint}?${query}` : endpoint;
      const options = {
        socketPath: this.socketPath,
        path,
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const requestModule = this.protocol === "https" ? https : http;

      const req = requestModule.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            try {
              resolve(JSON.parse(data)); // Parse JSON response
            } catch (err) {
              reject(`Failed to parse JSON: ${err}`);
            }
          } else {
            reject(`Request failed with status code: ${res.statusCode}`);
          }
        });
      });

      req.on("error", (err) => {
        reject(`Request error: ${err.message}`);
      });

      req.end();
    });
  }
}
