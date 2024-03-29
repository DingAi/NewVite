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
import {PlcModel} from './PlcModel';

/**
 * The DeviceModel model module.
 * @module com.mn.sdk.model/DeviceModel
 * @version 1.0
 */
export class DeviceModel {
  /**
   * Constructs a new <code>DeviceModel</code>.
   * @alias module:com.mn.sdk.model/DeviceModel
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param plcModels {Array.<module:com.mn.sdk.model/PlcModel>} 
   */
  constructor(id, name, plcModels) {
    this.id = id;
    this.name = name;
    this.plcModels = plcModels;
  }


    static constructFromList(list) {
        let array = [new DeviceModel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(DeviceModel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>DeviceModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/DeviceModel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/DeviceModel} The populated <code>DeviceModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceModel();
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'plcModels'))
        obj.plcModels = ApiClient.convertToType(data['plcModels'], [PlcModel]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
DeviceModel.prototype.id = undefined;

/**
 * @member {String} name
 */
DeviceModel.prototype.name = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/PlcModel>} plcModels
 */
DeviceModel.prototype.plcModels = undefined;


