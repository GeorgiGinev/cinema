export class JsonResource {
  public data: any = {};

  /**
   * Fill attributes to data
   *
   * @param passedData object
   */
  public fillAttributes(passedData: any) {
    Object.keys(passedData).forEach((passedKey: string) => {
      const foundAttribute = Boolean(Object.keys(this.data).find((key: string) => key === passedKey));

      if(!foundAttribute) {
        return;
      }

      this.data[passedKey] = passedData[passedKey];
    });
  }
}
