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
 * The StorageStrategyConfigParam model module.
 * @module com.mn.sdk.model/StorageStrategyConfigParam
 * @version 1.0
 */
export class StorageStrategyConfigParam {
  /**
   * Constructs a new <code>StorageStrategyConfigParam</code>.
   * @alias module:com.mn.sdk.model/StorageStrategyConfigParam
   * @class
   * @param status {String} 报警数据储存周期状态  关闭0, 开启1
   * @param type {String} 历史数据储存周期状态 0报警，1历史数据
   * @param value {Number} 时间(月)，值为2，代表2个月自动删除
   */
  constructor(status, type, value) {
    this.status = status;
    this.type = type;
    this.value = value;
  }


    static constructFromList(list) {
        let array = [new StorageStrategyConfigParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(StorageStrategyConfigParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>StorageStrategyConfigParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/StorageStrategyConfigParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/StorageStrategyConfigParam} The populated <code>StorageStrategyConfigParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StorageStrategyConfigParam();
      if (Reflect.has(data, 'status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (Reflect.has(data, 'value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * 报警数据储存周期状态  关闭0, 开启1
 * @member {String} status
 */
StorageStrategyConfigParam.prototype.status = undefined;

/**
 * 历史数据储存周期状态 0报警，1历史数据
 * @member {String} type
 */
StorageStrategyConfigParam.prototype.type = undefined;

/**
 * 时间(月)，值为2，代表2个月自动删除
 * @member {Number} value
 */
StorageStrategyConfigParam.prototype.value = undefined;


