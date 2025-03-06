interface DockerModemProps {
    socketPath?: string;
    host?: string;
    port?: number;
    protocol?: "http" | "https";
}
export declare class DockerModem {
    private socketPath;
    private host;
    private port;
    private protocol;
    constructor(props: DockerModemProps);
    request(endpoint: string, method: "GET" | "POST" | "PUT" | "DELETE", queryParams: Record<string, any>): Promise<any>;
}
export {};
