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
import {AlarmModel} from './AlarmModel';

/**
 * The VariantModel model module.
 * @module com.mn.sdk.model/VariantModel
 * @version 1.0
 */
export class VariantModel {
  /**
   * Constructs a new <code>VariantModel</code>.
   * @alias module:com.mn.sdk.model/VariantModel
   * @class
   * @param addr {String} 
   * @param alarmModels {Array.<module:com.mn.sdk.model/AlarmModel>} 
   * @param dataType {String} 
   * @param deviceId {String} 
   * @param group {String} 
   * @param name {String} 
   * @param saveCountEveryDay {Number} 
   * @param saveMaxValue {Number} 
   * @param saveMinValue {Number} 
   * @param saveStartTime {String} 
   * @param saveStopTime {String} 
   * @param saveType {String} 
   * @param saveValue {String} 
   * @param variantId {Number} 
   */
  constructor(addr, alarmModels, dataType, deviceId, group, name, saveCountEveryDay, saveMaxValue, saveMinValue, saveStartTime, saveStopTime, saveType, saveValue, variantId) {
    this.addr = addr;
    this.alarmModels = alarmModels;
    this.dataType = dataType;
    this.deviceId = deviceId;
    this.group = group;
    this.name = name;
    this.saveCountEveryDay = saveCountEveryDay;
    this.saveMaxValue = saveMaxValue;
    this.saveMinValue = saveMinValue;
    this.saveStartTime = saveStartTime;
    this.saveStopTime = saveStopTime;
    this.saveType = saveType;
    this.saveValue = saveValue;
    this.variantId = variantId;
  }


    static constructFromList(list) {
        let array = [new VariantModel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(VariantModel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>VariantModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/VariantModel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/VariantModel} The populated <code>VariantModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariantModel();
      if (Reflect.has(data, 'addr'))
        obj.addr = ApiClient.convertToType(data['addr'], 'String');
      if (Reflect.has(data, 'alarmModels'))
        obj.alarmModels = ApiClient.convertToType(data['alarmModels'], [AlarmModel]);
      if (Reflect.has(data, 'dataType'))
        obj.dataType = ApiClient.convertToType(data['dataType'], 'String');
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'group'))
        obj.group = ApiClient.convertToType(data['group'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'saveCountEveryDay'))
        obj.saveCountEveryDay = ApiClient.convertToType(data['saveCountEveryDay'], 'Number');
      if (Reflect.has(data, 'saveMaxValue'))
        obj.saveMaxValue = ApiClient.convertToType(data['saveMaxValue'], 'Number');
      if (Reflect.has(data, 'saveMinValue'))
        obj.saveMinValue = ApiClient.convertToType(data['saveMinValue'], 'Number');
      if (Reflect.has(data, 'saveStartTime'))
        obj.saveStartTime = ApiClient.convertToType(data['saveStartTime'], 'String');
      if (Reflect.has(data, 'saveStopTime'))
        obj.saveStopTime = ApiClient.convertToType(data['saveStopTime'], 'String');
      if (Reflect.has(data, 'saveType'))
        obj.saveType = ApiClient.convertToType(data['saveType'], 'String');
      if (Reflect.has(data, 'saveValue'))
        obj.saveValue = ApiClient.convertToType(data['saveValue'], 'String');
      if (Reflect.has(data, 'variantId'))
        obj.variantId = ApiClient.convertToType(data['variantId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} addr
 */
VariantModel.prototype.addr = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/AlarmModel>} alarmModels
 */
VariantModel.prototype.alarmModels = undefined;

/**
 * @member {String} dataType
 */
VariantModel.prototype.dataType = undefined;

/**
 * @member {String} deviceId
 */
VariantModel.prototype.deviceId = undefined;

/**
 * @member {String} group
 */
VariantModel.prototype.group = undefined;

/**
 * @member {String} name
 */
VariantModel.prototype.name = undefined;

/**
 * @member {Number} saveCountEveryDay
 */
VariantModel.prototype.saveCountEveryDay = undefined;

/**
 * @member {Number} saveMaxValue
 */
VariantModel.prototype.saveMaxValue = undefined;

/**
 * @member {Number} saveMinValue
 */
VariantModel.prototype.saveMinValue = undefined;

/**
 * @member {String} saveStartTime
 */
VariantModel.prototype.saveStartTime = undefined;

/**
 * @member {String} saveStopTime
 */
VariantModel.prototype.saveStopTime = undefined;

/**
 * @member {String} saveType
 */
VariantModel.prototype.saveType = undefined;

/**
 * @member {String} saveValue
 */
VariantModel.prototype.saveValue = undefined;

/**
 * @member {Number} variantId
 */
VariantModel.prototype.variantId = undefined;


