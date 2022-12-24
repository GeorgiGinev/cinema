export interface JsonResourceInterface {
  data: any;
  id: string;
}

export class JsonResource {
  public data: any = {};
  public id: string = '';

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
