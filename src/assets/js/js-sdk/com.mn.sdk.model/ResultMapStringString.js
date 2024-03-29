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
 * The ResultMapStringString model module.
 * @module com.mn.sdk.model/ResultMapStringString
 * @version 1.0
 */
export class ResultMapStringString {
  /**
   * Constructs a new <code>ResultMapStringString</code>.
   * @alias module:com.mn.sdk.model/ResultMapStringString
   * @class
   * @param code {String} 响应码
   * @param data {Object.<String, String>} 响应数据
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
        let array = [new ResultMapStringString()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ResultMapStringString.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ResultMapStringString</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ResultMapStringString} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ResultMapStringString} The populated <code>ResultMapStringString</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResultMapStringString();
      if (Reflect.has(data, 'code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (Reflect.has(data, 'data'))
        obj.data = ApiClient.convertToType(data['data'], {'String': 'String'});
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
ResultMapStringString.prototype.code = undefined;

/**
 * 响应数据
 * @member {Object.<String, String>} data
 */
ResultMapStringString.prototype.data = undefined;

/**
 * 响应消息
 * @member {String} msg
 */
ResultMapStringString.prototype.msg = undefined;

/**
 * 响应时间
 * @member {Date} time
 */
ResultMapStringString.prototype.time = undefined;


