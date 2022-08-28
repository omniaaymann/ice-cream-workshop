export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: { constructor: { name: string } }) {
    if (targetModule) {
      throw new Error(
        `${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`
      );
    }
  }
}
