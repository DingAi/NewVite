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
 * The UpdateLiveVideoForm model module.
 * @module com.mn.sdk.model/UpdateLiveVideoForm
 * @version 1.0
 */
export class UpdateLiveVideoForm {
  /**
   * Constructs a new <code>UpdateLiveVideoForm</code>.
   * @alias module:com.mn.sdk.model/UpdateLiveVideoForm
   * @class
   * @param id {String} id
   * @param liveAddress {String} 直播地址
   * @param name {String} 直播视屏名称
   * @param remark {String} 备注
   * @param serialNumber {String} 设备序列号
   */
  constructor(id, liveAddress, name, remark, serialNumber) {
    this.id = id;
    this.liveAddress = liveAddress;
    this.name = name;
    this.remark = remark;
    this.serialNumber = serialNumber;
  }


    static constructFromList(list) {
        let array = [new UpdateLiveVideoForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UpdateLiveVideoForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UpdateLiveVideoForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UpdateLiveVideoForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UpdateLiveVideoForm} The populated <code>UpdateLiveVideoForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateLiveVideoForm();
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'liveAddress'))
        obj.liveAddress = ApiClient.convertToType(data['liveAddress'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'String');
    }
    return obj;
  }
}

/**
 * id
 * @member {String} id
 */
UpdateLiveVideoForm.prototype.id = undefined;

/**
 * 直播地址
 * @member {String} liveAddress
 */
UpdateLiveVideoForm.prototype.liveAddress = undefined;

/**
 * 直播视屏名称
 * @member {String} name
 */
UpdateLiveVideoForm.prototype.name = undefined;

/**
 * 备注
 * @member {String} remark
 */
UpdateLiveVideoForm.prototype.remark = undefined;

/**
 * 设备序列号
 * @member {String} serialNumber
 */
UpdateLiveVideoForm.prototype.serialNumber = undefined;

