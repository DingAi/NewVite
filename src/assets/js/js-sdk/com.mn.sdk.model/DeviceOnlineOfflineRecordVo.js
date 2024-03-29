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
 * The DeviceOnlineOfflineRecordVo model module.
 * @module com.mn.sdk.model/DeviceOnlineOfflineRecordVo
 * @version 1.0
 */
export class DeviceOnlineOfflineRecordVo {
  /**
   * Constructs a new <code>DeviceOnlineOfflineRecordVo</code>.
   * @alias module:com.mn.sdk.model/DeviceOnlineOfflineRecordVo
   * @class
   * @param createdTime {Date} 
   * @param id {String} plc的ud
   * @param offlineTime {Date} 
   * @param onlineCount {String} 在线时长
   * @param onlineTime {Date} 
   * @param plcName {String} plc名称
   */
  constructor(createdTime, id, offlineTime, onlineCount, onlineTime, plcName) {
    this.createdTime = createdTime;
    this.id = id;
    this.offlineTime = offlineTime;
    this.onlineCount = onlineCount;
    this.onlineTime = onlineTime;
    this.plcName = plcName;
  }


    static constructFromList(list) {
        let array = [new DeviceOnlineOfflineRecordVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(DeviceOnlineOfflineRecordVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>DeviceOnlineOfflineRecordVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/DeviceOnlineOfflineRecordVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/DeviceOnlineOfflineRecordVo} The populated <code>DeviceOnlineOfflineRecordVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceOnlineOfflineRecordVo();
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'offlineTime'))
        obj.offlineTime = ApiClient.convertToType(data['offlineTime'], 'Date');
      if (Reflect.has(data, 'onlineCount'))
        obj.onlineCount = ApiClient.convertToType(data['onlineCount'], 'String');
      if (Reflect.has(data, 'onlineTime'))
        obj.onlineTime = ApiClient.convertToType(data['onlineTime'], 'Date');
      if (Reflect.has(data, 'plcName'))
        obj.plcName = ApiClient.convertToType(data['plcName'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdTime
 */
DeviceOnlineOfflineRecordVo.prototype.createdTime = undefined;

/**
 * plc的ud
 * @member {String} id
 */
DeviceOnlineOfflineRecordVo.prototype.id = undefined;

/**
 * @member {Date} offlineTime
 */
DeviceOnlineOfflineRecordVo.prototype.offlineTime = undefined;

/**
 * 在线时长
 * @member {String} onlineCount
 */
DeviceOnlineOfflineRecordVo.prototype.onlineCount = undefined;

/**
 * @member {Date} onlineTime
 */
DeviceOnlineOfflineRecordVo.prototype.onlineTime = undefined;

/**
 * plc名称
 * @member {String} plcName
 */
DeviceOnlineOfflineRecordVo.prototype.plcName = undefined;


