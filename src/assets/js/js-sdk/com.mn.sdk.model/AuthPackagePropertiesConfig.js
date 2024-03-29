/*
 * 系统接口
 * 系统接口文档
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 4.0.0
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The AuthPackagePropertiesConfig model module.
 * @module com.mn.sdk.model/AuthPackagePropertiesConfig
 * @version 1.0
 */
export class AuthPackagePropertiesConfig {
  /**
   * Constructs a new <code>AuthPackagePropertiesConfig</code>.
   * @alias module:com.mn.sdk.model/AuthPackagePropertiesConfig
   * @class
   * @param defaultLimit {Number} 属性的默认数量
   * @param id {String} id
   * @param name {String} 名称
   * @param _number {Number} 数量，和价格对应，例如：1元10个)
   * @param packageProperties {Number} 0:不是套餐属性，1：是套餐属性
   * @param price {Number} 价格（RMB)
   * @param properties {String} 套餐的属性
   * @param sort {Number} 排序号
   * @param type {Number} 会否是系统额度0：不是，1是
   * @param unit {String} 单位
   */
  constructor(defaultLimit, id, name, _number, packageProperties, price, properties, sort, type, unit) {
    this.defaultLimit = defaultLimit;
    this.id = id;
    this.name = name;
    this._number = _number;
    this.packageProperties = packageProperties;
    this.price = price;
    this.properties = properties;
    this.sort = sort;
    this.type = type;
    this.unit = unit;
  }


    static constructFromList(list) {
        let array = [new AuthPackagePropertiesConfig()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AuthPackagePropertiesConfig.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AuthPackagePropertiesConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AuthPackagePropertiesConfig} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AuthPackagePropertiesConfig} The populated <code>AuthPackagePropertiesConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthPackagePropertiesConfig();
      if (Reflect.has(data, 'defaultLimit'))
        obj.defaultLimit = ApiClient.convertToType(data['defaultLimit'], 'Number');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (Reflect.has(data, 'packageProperties'))
        obj.packageProperties = ApiClient.convertToType(data['packageProperties'], 'Number');
      if (Reflect.has(data, 'price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (Reflect.has(data, 'properties'))
        obj.properties = ApiClient.convertToType(data['properties'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (Reflect.has(data, 'unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
    }
    return obj;
  }
}

/**
 * 属性的默认数量
 * @member {Number} defaultLimit
 */
AuthPackagePropertiesConfig.prototype.defaultLimit = undefined;

/**
 * id
 * @member {String} id
 */
AuthPackagePropertiesConfig.prototype.id = undefined;

/**
 * 名称
 * @member {String} name
 */
AuthPackagePropertiesConfig.prototype.name = undefined;

/**
 * 数量，和价格对应，例如：1元10个)
 * @member {Number} _number
 */
AuthPackagePropertiesConfig.prototype._number = undefined;

/**
 * 0:不是套餐属性，1：是套餐属性
 * @member {Number} packageProperties
 */
AuthPackagePropertiesConfig.prototype.packageProperties = undefined;

/**
 * 价格（RMB)
 * @member {Number} price
 */
AuthPackagePropertiesConfig.prototype.price = undefined;

/**
 * 套餐的属性
 * @member {String} properties
 */
AuthPackagePropertiesConfig.prototype.properties = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
AuthPackagePropertiesConfig.prototype.sort = undefined;

/**
 * 会否是系统额度0：不是，1是
 * @member {Number} type
 */
AuthPackagePropertiesConfig.prototype.type = undefined;

/**
 * 单位
 * @member {String} unit
 */
AuthPackagePropertiesConfig.prototype.unit = undefined;


