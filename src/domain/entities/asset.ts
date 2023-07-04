import { Entity, parseToBigInt, UnknownObject } from '@alien-worlds/api-core';

/**
 * Represents a `Asset` object.
 *
 * @class
 */
export class Asset implements Entity {
  /**
   * Constructs a new instance of the `Asset` class.
   *
   * @public
   * @constructor
   * @param bigint value
   * @param string symbol
   * @returns `Asset` - An instance of the `Asset` class.
   */
  public constructor(public value: bigint, public symbol: string) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Asset` class to a JSON object.
   *
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      value: this.value.toString(),
      symbol: this.symbol,
    };
  }

  /**
   * Creates an instance of the `Asset` class.
   *
   * @static
   * @public
   * @returns `Asset` An instance of the `Asset` class.
   */
  public static create(
    value: number | bigint,
    symbol: string,
    rest?: UnknownObject
  ): Asset {
    const entity = new Asset(parseToBigInt(value), symbol);
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Asset {
    return new Asset(0n, '');
  }
}
