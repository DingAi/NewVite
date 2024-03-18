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
 * The ThirdDeviceVaribleGroupFrom model module.
 * @module com.mn.sdk.model/ThirdDeviceVaribleGroupFrom
 * @version 1.0
 */
export class ThirdDeviceVaribleGroupFrom {
  /**
   * Constructs a new <code>ThirdDeviceVaribleGroupFrom</code>.
   * 第三方设备变量分组的form
   * @alias module:com.mn.sdk.model/ThirdDeviceVaribleGroupFrom
   * @class
   * @param groupId {String} 第三方分组id
   * @param groupName {String} 第三方分组名称
   * @param thirdDeviceId {String} 第三方设备id
   */
  constructor(groupId, groupName, thirdDeviceId) {
    this.groupId = groupId;
    this.groupName = groupName;
    this.thirdDeviceId = thirdDeviceId;
  }


    static constructFromList(list) {
        let array = [new ThirdDeviceVaribleGroupFrom()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ThirdDeviceVaribleGroupFrom.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ThirdDeviceVaribleGroupFrom</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ThirdDeviceVaribleGroupFrom} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ThirdDeviceVaribleGroupFrom} The populated <code>ThirdDeviceVaribleGroupFrom</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ThirdDeviceVaribleGroupFrom();
      if (Reflect.has(data, 'groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (Reflect.has(data, 'groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (Reflect.has(data, 'thirdDeviceId'))
        obj.thirdDeviceId = ApiClient.convertToType(data['thirdDeviceId'], 'String');
    }
    return obj;
  }
}

/**
 * 第三方分组id
 * @member {String} groupId
 */
ThirdDeviceVaribleGroupFrom.prototype.groupId = undefined;

/**
 * 第三方分组名称
 * @member {String} groupName
 */
ThirdDeviceVaribleGroupFrom.prototype.groupName = undefined;

/**
 * 第三方设备id
 * @member {String} thirdDeviceId
 */
ThirdDeviceVaribleGroupFrom.prototype.thirdDeviceId = undefined;

