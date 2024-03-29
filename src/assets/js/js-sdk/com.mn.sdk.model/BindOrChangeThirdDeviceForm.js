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
 * The BindOrChangeThirdDeviceForm model module.
 * @module com.mn.sdk.model/BindOrChangeThirdDeviceForm
 * @version 1.0
 */
export class BindOrChangeThirdDeviceForm {
  /**
   * Constructs a new <code>BindOrChangeThirdDeviceForm</code>.
   * @alias module:com.mn.sdk.model/BindOrChangeThirdDeviceForm
   * @class
   * @param deviceId {String} 
   * @param thirdDeviceId {String} 
   */
  constructor(deviceId, thirdDeviceId) {
    this.deviceId = deviceId;
    this.thirdDeviceId = thirdDeviceId;
  }


    static constructFromList(list) {
        let array = [new BindOrChangeThirdDeviceForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(BindOrChangeThirdDeviceForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>BindOrChangeThirdDeviceForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/BindOrChangeThirdDeviceForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/BindOrChangeThirdDeviceForm} The populated <code>BindOrChangeThirdDeviceForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BindOrChangeThirdDeviceForm();
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'thirdDeviceId'))
        obj.thirdDeviceId = ApiClient.convertToType(data['thirdDeviceId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} deviceId
 */
BindOrChangeThirdDeviceForm.prototype.deviceId = undefined;

/**
 * @member {String} thirdDeviceId
 */
BindOrChangeThirdDeviceForm.prototype.thirdDeviceId = undefined;


