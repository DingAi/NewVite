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
 * The DevicePropertiesVo model module.
 * @module com.mn.sdk.model/DevicePropertiesVo
 * @version 1.0
 */
export class DevicePropertiesVo {
  /**
   * Constructs a new <code>DevicePropertiesVo</code>.
   * @alias module:com.mn.sdk.model/DevicePropertiesVo
   * @class
   * @param createdTime {Date} 创建时间
   * @param name {String} 属性名称(如卡号/ip/版本等等)
   * @param serialNumber {Number} 设备序列号,12位数字
   * @param updatedTime {Date} 更新时间
   * @param value {String} 属性值
   */
  constructor(createdTime, name, serialNumber, updatedTime, value) {
    this.createdTime = createdTime;
    this.name = name;
    this.serialNumber = serialNumber;
    this.updatedTime = updatedTime;
    this.value = value;
  }


    static constructFromList(list) {
        let array = [new DevicePropertiesVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(DevicePropertiesVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>DevicePropertiesVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/DevicePropertiesVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/DevicePropertiesVo} The populated <code>DevicePropertiesVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DevicePropertiesVo();
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'Number');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
      if (Reflect.has(data, 'value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * 创建时间
 * @member {Date} createdTime
 */
DevicePropertiesVo.prototype.createdTime = undefined;

/**
 * 属性名称(如卡号/ip/版本等等)
 * @member {String} name
 */
DevicePropertiesVo.prototype.name = undefined;

/**
 * 设备序列号,12位数字
 * @member {Number} serialNumber
 */
DevicePropertiesVo.prototype.serialNumber = undefined;

/**
 * 更新时间
 * @member {Date} updatedTime
 */
DevicePropertiesVo.prototype.updatedTime = undefined;

/**
 * 属性值
 * @member {String} value
 */
DevicePropertiesVo.prototype.value = undefined;


