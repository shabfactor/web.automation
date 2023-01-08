import { World, setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";

export class CustomWorld<T> extends World {
  customContext: WorldContext<T>;
  customParameters: CustomParameters;
  constructor({ parameters }: IWorldOptions) {
    super(parameters);
    this.customParameters = <CustomParameters> parameters;
    this.customContext = new WorldContext<T>();
  }
}

class CustomParameters {
  api: string;
  constructor(api: string) {
    this.api = api;
  }
}

class WorldContext<T> {
  service: T;
}

setWorldConstructor(CustomWorld);

