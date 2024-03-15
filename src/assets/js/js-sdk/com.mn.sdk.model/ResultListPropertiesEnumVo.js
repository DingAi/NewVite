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
import {PropertiesEnumVo} from './PropertiesEnumVo';

/**
 * The ResultListPropertiesEnumVo model module.
 * @module com.mn.sdk.model/ResultListPropertiesEnumVo
 * @version 1.0
 */
export class ResultListPropertiesEnumVo {
  /**
   * Constructs a new <code>ResultListPropertiesEnumVo</code>.
   * @alias module:com.mn.sdk.model/ResultListPropertiesEnumVo
   * @class
   * @param code {String} 响应码
   * @param data {Array.<module:com.mn.sdk.model/PropertiesEnumVo>} 响应数据
   * @param msg {String} 响应消息
   * @param time {Date} 响应时间
   */
  constructor(code, data, msg, time) {
    this.code = code;
    this.data = data;
    this.msg = msg;
    this.time = time;
  }


    static constructFromList(list) {
        let array = [new ResultListPropertiesEnumVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ResultListPropertiesEnumVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ResultListPropertiesEnumVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ResultListPropertiesEnumVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ResultListPropertiesEnumVo} The populated <code>ResultListPropertiesEnumVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResultListPropertiesEnumVo();
      if (Reflect.has(data, 'code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (Reflect.has(data, 'data'))
        obj.data = ApiClient.convertToType(data['data'], [PropertiesEnumVo]);
      if (Reflect.has(data, 'msg'))
        obj.msg = ApiClient.convertToType(data['msg'], 'String');
      if (Reflect.has(data, 'time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
    }
    return obj;
  }
}

/**
 * 响应码
 * @member {String} code
 */
ResultListPropertiesEnumVo.prototype.code = undefined;

/**
 * 响应数据
 * @member {Array.<module:com.mn.sdk.model/PropertiesEnumVo>} data
 */
ResultListPropertiesEnumVo.prototype.data = undefined;

/**
 * 响应消息
 * @member {String} msg
 */
ResultListPropertiesEnumVo.prototype.msg = undefined;

/**
 * 响应时间
 * @member {Date} time
 */
ResultListPropertiesEnumVo.prototype.time = undefined;


