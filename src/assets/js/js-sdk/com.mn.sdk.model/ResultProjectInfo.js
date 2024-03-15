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
import {ProjectInfo} from './ProjectInfo';

/**
 * The ResultProjectInfo model module.
 * @module com.mn.sdk.model/ResultProjectInfo
 * @version 1.0
 */
export class ResultProjectInfo {
  /**
   * Constructs a new <code>ResultProjectInfo</code>.
   * @alias module:com.mn.sdk.model/ResultProjectInfo
   * @class
   * @param code {String} 响应码
   * @param data {module:com.mn.sdk.model/ProjectInfo} 响应数据
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
        let array = [new ResultProjectInfo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ResultProjectInfo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ResultProjectInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ResultProjectInfo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ResultProjectInfo} The populated <code>ResultProjectInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResultProjectInfo();
      if (Reflect.has(data, 'code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (Reflect.has(data, 'data'))
        obj.data = ProjectInfo.constructFromObject(data['data']);
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
ResultProjectInfo.prototype.code = undefined;

/**
 * 响应数据
 * @member {module:com.mn.sdk.model/ProjectInfo} data
 */
ResultProjectInfo.prototype.data = undefined;

/**
 * 响应消息
 * @member {String} msg
 */
ResultProjectInfo.prototype.msg = undefined;

/**
 * 响应时间
 * @member {Date} time
 */
ResultProjectInfo.prototype.time = undefined;


