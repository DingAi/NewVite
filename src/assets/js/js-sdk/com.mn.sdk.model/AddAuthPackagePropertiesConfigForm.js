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
 * The AddAuthPackagePropertiesConfigForm model module.
 * @module com.mn.sdk.model/AddAuthPackagePropertiesConfigForm
 * @version 1.0
 */
export class AddAuthPackagePropertiesConfigForm {
  /**
   * Constructs a new <code>AddAuthPackagePropertiesConfigForm</code>.
   * @alias module:com.mn.sdk.model/AddAuthPackagePropertiesConfigForm
   * @class
   * @param defaultLimit {Number} 套餐属性的默认数量,即套餐，企业的的默认数量
   * @param name {String} 名称
   * @param _number {Number} 数量，和价格对应，例如：1元10个)
   * @param price {Number} 价格（RMB)
   * @param properties {String} 套餐的属性
   * @param sort {Number} 排序号
   * @param unit {String} 单位
   */
  constructor(defaultLimit, name, _number, price, properties, sort, unit) {
    this.defaultLimit = defaultLimit;
    this.name = name;
    this._number = _number;
    this.price = price;
    this.properties = properties;
    this.sort = sort;
    this.unit = unit;
  }


    static constructFromList(list) {
        let array = [new AddAuthPackagePropertiesConfigForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddAuthPackagePropertiesConfigForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddAuthPackagePropertiesConfigForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddAuthPackagePropertiesConfigForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddAuthPackagePropertiesConfigForm} The populated <code>AddAuthPackagePropertiesConfigForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddAuthPackagePropertiesConfigForm();
      if (Reflect.has(data, 'defaultLimit'))
        obj.defaultLimit = ApiClient.convertToType(data['defaultLimit'], 'Number');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (Reflect.has(data, 'price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (Reflect.has(data, 'properties'))
        obj.properties = ApiClient.convertToType(data['properties'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
      if (Reflect.has(data, 'unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
    }
    return obj;
  }
}

/**
 * 套餐属性的默认数量,即套餐，企业的的默认数量
 * @member {Number} defaultLimit
 */
AddAuthPackagePropertiesConfigForm.prototype.defaultLimit = undefined;

/**
 * 名称
 * @member {String} name
 */
AddAuthPackagePropertiesConfigForm.prototype.name = undefined;

/**
 * 数量，和价格对应，例如：1元10个)
 * @member {Number} _number
 */
AddAuthPackagePropertiesConfigForm.prototype._number = undefined;

/**
 * 价格（RMB)
 * @member {Number} price
 */
AddAuthPackagePropertiesConfigForm.prototype.price = undefined;

/**
 * 套餐的属性
 * @member {String} properties
 */
AddAuthPackagePropertiesConfigForm.prototype.properties = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
AddAuthPackagePropertiesConfigForm.prototype.sort = undefined;

/**
 * 单位
 * @member {String} unit
 */
AddAuthPackagePropertiesConfigForm.prototype.unit = undefined;


