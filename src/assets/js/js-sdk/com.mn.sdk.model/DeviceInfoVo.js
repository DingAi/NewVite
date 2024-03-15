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
import {DevicePropertiesVo} from './DevicePropertiesVo';

/**
 * The DeviceInfoVo model module.
 * @module com.mn.sdk.model/DeviceInfoVo
 * @version 1.0
 */
export class DeviceInfoVo {
  /**
   * Constructs a new <code>DeviceInfoVo</code>.
   * @alias module:com.mn.sdk.model/DeviceInfoVo
   * @class
   * @param cloudVersion {String} 配置版本号(云端)
   * @param deviceProperties {Object.<String, module:com.mn.sdk.model/DevicePropertiesVo>} Device信息 key:字段，DevicePropertiesPojo: 详情
   * @param id {String} Device的id
   * @param isGps {Boolean} 是否是GPS设备
   * @param isThirdDevice {Boolean} 是否是第三方设备
   * @param name {String} Device名称
   * @param serialNumber {String} Device序列号
   * @param thirdDeviceId {String} 第三方设备id
   */
  constructor(cloudVersion, deviceProperties, id, isGps, isThirdDevice, name, serialNumber, thirdDeviceId) {
    this.cloudVersion = cloudVersion;
    this.deviceProperties = deviceProperties;
    this.id = id;
    this.isGps = isGps;
    this.isThirdDevice = isThirdDevice;
    this.name = name;
    this.serialNumber = serialNumber;
    this.thirdDeviceId = thirdDeviceId;
  }


    static constructFromList(list) {
        let array = [new DeviceInfoVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(DeviceInfoVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>DeviceInfoVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/DeviceInfoVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/DeviceInfoVo} The populated <code>DeviceInfoVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceInfoVo();
      if (Reflect.has(data, 'cloudVersion'))
        obj.cloudVersion = ApiClient.convertToType(data['cloudVersion'], 'String');
      if (Reflect.has(data, 'deviceProperties'))
        obj.deviceProperties = ApiClient.convertToType(data['deviceProperties'], {'String': DevicePropertiesVo});
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'isGps'))
        obj.isGps = ApiClient.convertToType(data['isGps'], 'Boolean');
      if (Reflect.has(data, 'isThirdDevice'))
        obj.isThirdDevice = ApiClient.convertToType(data['isThirdDevice'], 'Boolean');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'String');
      if (Reflect.has(data, 'thirdDeviceId'))
        obj.thirdDeviceId = ApiClient.convertToType(data['thirdDeviceId'], 'String');
    }
    return obj;
  }
}

/**
 * 配置版本号(云端)
 * @member {String} cloudVersion
 */
DeviceInfoVo.prototype.cloudVersion = undefined;

/**
 * Device信息 key:字段，DevicePropertiesPojo: 详情
 * @member {Object.<String, module:com.mn.sdk.model/DevicePropertiesVo>} deviceProperties
 */
DeviceInfoVo.prototype.deviceProperties = undefined;

/**
 * Device的id
 * @member {String} id
 */
DeviceInfoVo.prototype.id = undefined;

/**
 * 是否是GPS设备
 * @member {Boolean} isGps
 */
DeviceInfoVo.prototype.isGps = undefined;

/**
 * 是否是第三方设备
 * @member {Boolean} isThirdDevice
 */
DeviceInfoVo.prototype.isThirdDevice = undefined;

/**
 * Device名称
 * @member {String} name
 */
DeviceInfoVo.prototype.name = undefined;

/**
 * Device序列号
 * @member {String} serialNumber
 */
DeviceInfoVo.prototype.serialNumber = undefined;

/**
 * 第三方设备id
 * @member {String} thirdDeviceId
 */
DeviceInfoVo.prototype.thirdDeviceId = undefined;


