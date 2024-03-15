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
 * The MessageAlarmGroupVo model module.
 * @module com.mn.sdk.model/MessageAlarmGroupVo
 * @version 1.0
 */
export class MessageAlarmGroupVo {
  /**
   * Constructs a new <code>MessageAlarmGroupVo</code>.
   * 报警消息分组
   * @alias module:com.mn.sdk.model/MessageAlarmGroupVo
   * @class
   * @param flag {Boolean} 标记
   * @param index {Number} 位置
   * @param status {Boolean} 状态
   */
  constructor(flag, index, status) {
    this.flag = flag;
    this.index = index;
    this.status = status;
  }


    static constructFromList(list) {
        let array = [new MessageAlarmGroupVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(MessageAlarmGroupVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>MessageAlarmGroupVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/MessageAlarmGroupVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/MessageAlarmGroupVo} The populated <code>MessageAlarmGroupVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MessageAlarmGroupVo();
      if (Reflect.has(data, 'flag'))
        obj.flag = ApiClient.convertToType(data['flag'], 'Boolean');
      if (Reflect.has(data, 'index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (Reflect.has(data, 'status'))
        obj.status = ApiClient.convertToType(data['status'], 'Boolean');
    }
    return obj;
  }
}

/**
 * 标记
 * @member {Boolean} flag
 */
MessageAlarmGroupVo.prototype.flag = undefined;

/**
 * 位置
 * @member {Number} index
 */
MessageAlarmGroupVo.prototype.index = undefined;

/**
 * 状态
 * @member {Boolean} status
 */
MessageAlarmGroupVo.prototype.status = undefined;


