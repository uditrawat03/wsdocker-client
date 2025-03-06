import { Docker } from "../docker";
import { DockerModem } from "../api/modem";
import { Container } from "../api";

jest.mock("../api");
jest.mock("../api/modem");

describe("Docker", () => {
  const socketPath = "/var/run/docker.sock";
  let docker: Docker;

  beforeEach(() => {
    (DockerModem as jest.Mock).mockClear();
    (Container as jest.Mock).mockClear();
    docker = new Docker(socketPath);
  });
  
  it("should create an instance of Docker", () => {
    expect(docker).toBeDefined();
  });

  it("should create a new Container instance when container method is called", () => {
    const container = docker.container();
    expect(Container).toHaveBeenCalledWith(docker["modem"]);
    expect(container).toBeInstanceOf(Container);
  });
});
