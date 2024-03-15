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
import {AddThirdDeviceInfoForm} from './AddThirdDeviceInfoForm';

/**
 * The AddThirdDeviceForm model module.
 * @module com.mn.sdk.model/AddThirdDeviceForm
 * @version 1.0
 */
export class AddThirdDeviceForm {
  /**
   * Constructs a new <code>AddThirdDeviceForm</code>.
   * @alias module:com.mn.sdk.model/AddThirdDeviceForm
   * @class
   * @param addDeviceAuthType {String} 
   * @param addDeviceFrom {String} 
   * @param addDeviceGroup {String} 
   * @param addDeviceProtocol {String} 
   * @param addDeviceTlsEnabled {String} 
   * @param deviceList {Array.<module:com.mn.sdk.model/AddThirdDeviceInfoForm>} 
   */
  constructor(addDeviceAuthType, addDeviceFrom, addDeviceGroup, addDeviceProtocol, addDeviceTlsEnabled, deviceList) {
    this.addDeviceAuthType = addDeviceAuthType;
    this.addDeviceFrom = addDeviceFrom;
    this.addDeviceGroup = addDeviceGroup;
    this.addDeviceProtocol = addDeviceProtocol;
    this.addDeviceTlsEnabled = addDeviceTlsEnabled;
    this.deviceList = deviceList;
  }


    static constructFromList(list) {
        let array = [new AddThirdDeviceForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddThirdDeviceForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddThirdDeviceForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddThirdDeviceForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddThirdDeviceForm} The populated <code>AddThirdDeviceForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddThirdDeviceForm();
      if (Reflect.has(data, 'addDeviceAuthType'))
        obj.addDeviceAuthType = ApiClient.convertToType(data['addDeviceAuthType'], 'String');
      if (Reflect.has(data, 'addDeviceFrom'))
        obj.addDeviceFrom = ApiClient.convertToType(data['addDeviceFrom'], 'String');
      if (Reflect.has(data, 'addDeviceGroup'))
        obj.addDeviceGroup = ApiClient.convertToType(data['addDeviceGroup'], 'String');
      if (Reflect.has(data, 'addDeviceProtocol'))
        obj.addDeviceProtocol = ApiClient.convertToType(data['addDeviceProtocol'], 'String');
      if (Reflect.has(data, 'addDeviceTlsEnabled'))
        obj.addDeviceTlsEnabled = ApiClient.convertToType(data['addDeviceTlsEnabled'], 'String');
      if (Reflect.has(data, 'deviceList'))
        obj.deviceList = ApiClient.convertToType(data['deviceList'], [AddThirdDeviceInfoForm]);
    }
    return obj;
  }
}

/**
 * @member {String} addDeviceAuthType
 */
AddThirdDeviceForm.prototype.addDeviceAuthType = undefined;

/**
 * @member {String} addDeviceFrom
 */
AddThirdDeviceForm.prototype.addDeviceFrom = undefined;

/**
 * @member {String} addDeviceGroup
 */
AddThirdDeviceForm.prototype.addDeviceGroup = undefined;

/**
 * @member {String} addDeviceProtocol
 */
AddThirdDeviceForm.prototype.addDeviceProtocol = undefined;

/**
 * @member {String} addDeviceTlsEnabled
 */
AddThirdDeviceForm.prototype.addDeviceTlsEnabled = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/AddThirdDeviceInfoForm>} deviceList
 */
AddThirdDeviceForm.prototype.deviceList = undefined;


