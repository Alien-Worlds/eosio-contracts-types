import { Bytes } from './bytes';
import { ExtensionStruct } from '../../data';

export class Extension {
  public static fromStruct(struct: ExtensionStruct): Extension {
    const { type, data } = struct;
    return new Extension(type, Bytes.fromStruct(data));
  }

  protected constructor(public readonly type: number, public readonly data: Bytes) { }

  public toStruct(): ExtensionStruct {
    const { type, data } = this;
    return {
      type,
      data: data.toStruct(),
    };
  }
}
