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
 * The MessageCenterForm model module.
 * @module com.mn.sdk.model/MessageCenterForm
 * @version 1.0
 */
export class MessageCenterForm {
  /**
   * Constructs a new <code>MessageCenterForm</code>.
   * 消息查询
   * @alias module:com.mn.sdk.model/MessageCenterForm
   * @class
   * @param currentPage {Number} 当前页
   * @param endTime {String} 结束时间范围
   * @param msgType {String} 消息类型(报警、报修、维保、服务)||值可选【alarmMsg,faultMsg,mainTainMsg,serviceMsg】
   * @param pageSize {Number} 当前页数量
   * @param readStatus {String} 消息读取状态[0:未读，1，已读]
   * @param startTime {String} 开始时间范围
   */
  constructor(currentPage, endTime, msgType, pageSize, readStatus, startTime) {
    this.currentPage = currentPage;
    this.endTime = endTime;
    this.msgType = msgType;
    this.pageSize = pageSize;
    this.readStatus = readStatus;
    this.startTime = startTime;
  }


    static constructFromList(list) {
        let array = [new MessageCenterForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(MessageCenterForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>MessageCenterForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/MessageCenterForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/MessageCenterForm} The populated <code>MessageCenterForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MessageCenterForm();
      if (Reflect.has(data, 'currentPage'))
        obj.currentPage = ApiClient.convertToType(data['currentPage'], 'Number');
      if (Reflect.has(data, 'endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
      if (Reflect.has(data, 'msgType'))
        obj.msgType = ApiClient.convertToType(data['msgType'], 'String');
      if (Reflect.has(data, 'pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (Reflect.has(data, 'readStatus'))
        obj.readStatus = ApiClient.convertToType(data['readStatus'], 'String');
      if (Reflect.has(data, 'startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
    }
    return obj;
  }
}

/**
 * 当前页
 * @member {Number} currentPage
 */
MessageCenterForm.prototype.currentPage = undefined;

/**
 * 结束时间范围
 * @member {String} endTime
 */
MessageCenterForm.prototype.endTime = undefined;

/**
 * 消息类型(报警、报修、维保、服务)||值可选【alarmMsg,faultMsg,mainTainMsg,serviceMsg】
 * @member {String} msgType
 */
MessageCenterForm.prototype.msgType = undefined;

/**
 * 当前页数量
 * @member {Number} pageSize
 */
MessageCenterForm.prototype.pageSize = undefined;

/**
 * 消息读取状态[0:未读，1，已读]
 * @member {String} readStatus
 */
MessageCenterForm.prototype.readStatus = undefined;

/**
 * 开始时间范围
 * @member {String} startTime
 */
MessageCenterForm.prototype.startTime = undefined;

