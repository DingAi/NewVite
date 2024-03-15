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
 * The AlarmQueryParam model module.
 * @module com.mn.sdk.model/AlarmQueryParam
 * @version 1.0
 */
export class AlarmQueryParam {
  /**
   * Constructs a new <code>AlarmQueryParam</code>.
   * 用于查询报警 Param类
   * @alias module:com.mn.sdk.model/AlarmQueryParam
   * @class
   * @param alarmLevel {String} 报警级别0：一般，1：重要，2：紧急
   * @param currentPage {Number} 分页页码
   * @param deviceId {String} 设备ID
   * @param endTime {String} 结束时间 yyyy-MM-dd hh:mm:ss
   * @param keyword {String} 条件搜索
   * @param pageSize {Number} 每页大小
   * @param projectId {String} 项目ID
   * @param startTime {String} 开始时间 yyyy-MM-dd hh:mm:ss
   */
  constructor(alarmLevel, currentPage, deviceId, endTime, keyword, pageSize, projectId, startTime) {
    this.alarmLevel = alarmLevel;
    this.currentPage = currentPage;
    this.deviceId = deviceId;
    this.endTime = endTime;
    this.keyword = keyword;
    this.pageSize = pageSize;
    this.projectId = projectId;
    this.startTime = startTime;
  }


    static constructFromList(list) {
        let array = [new AlarmQueryParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AlarmQueryParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AlarmQueryParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AlarmQueryParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AlarmQueryParam} The populated <code>AlarmQueryParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlarmQueryParam();
      if (Reflect.has(data, 'alarmLevel'))
        obj.alarmLevel = ApiClient.convertToType(data['alarmLevel'], 'String');
      if (Reflect.has(data, 'currentPage'))
        obj.currentPage = ApiClient.convertToType(data['currentPage'], 'Number');
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
      if (Reflect.has(data, 'keyword'))
        obj.keyword = ApiClient.convertToType(data['keyword'], 'String');
      if (Reflect.has(data, 'pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
    }
    return obj;
  }
}

/**
 * 报警级别0：一般，1：重要，2：紧急
 * @member {String} alarmLevel
 */
AlarmQueryParam.prototype.alarmLevel = undefined;

/**
 * 分页页码
 * @member {Number} currentPage
 */
AlarmQueryParam.prototype.currentPage = undefined;

/**
 * 设备ID
 * @member {String} deviceId
 */
AlarmQueryParam.prototype.deviceId = undefined;

/**
 * 结束时间 yyyy-MM-dd hh:mm:ss
 * @member {String} endTime
 */
AlarmQueryParam.prototype.endTime = undefined;

/**
 * 条件搜索
 * @member {String} keyword
 */
AlarmQueryParam.prototype.keyword = undefined;

/**
 * 每页大小
 * @member {Number} pageSize
 */
AlarmQueryParam.prototype.pageSize = undefined;

/**
 * 项目ID
 * @member {String} projectId
 */
AlarmQueryParam.prototype.projectId = undefined;

/**
 * 开始时间 yyyy-MM-dd hh:mm:ss
 * @member {String} startTime
 */
AlarmQueryParam.prototype.startTime = undefined;


