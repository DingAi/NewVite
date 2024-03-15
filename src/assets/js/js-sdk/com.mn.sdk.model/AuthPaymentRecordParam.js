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
 * The AuthPaymentRecordParam model module.
 * @module com.mn.sdk.model/AuthPaymentRecordParam
 * @version 1.0
 */
export class AuthPaymentRecordParam {
  /**
   * Constructs a new <code>AuthPaymentRecordParam</code>.
   * @alias module:com.mn.sdk.model/AuthPaymentRecordParam
   * @class
   * @param currentPage {Number} 页码
   * @param endTime {String} 搜索结束时间
   * @param keyword {String} 关键字
   * @param orderType {String} 订单类型 0短信,1天气,2定位,3邮件,4流量,5语音
   * @param pageSize {Number} 查询数量
   * @param startTime {String} 搜索开始时间
   */
  constructor(currentPage, endTime, keyword, orderType, pageSize, startTime) {
    this.currentPage = currentPage;
    this.endTime = endTime;
    this.keyword = keyword;
    this.orderType = orderType;
    this.pageSize = pageSize;
    this.startTime = startTime;
  }


    static constructFromList(list) {
        let array = [new AuthPaymentRecordParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AuthPaymentRecordParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AuthPaymentRecordParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AuthPaymentRecordParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AuthPaymentRecordParam} The populated <code>AuthPaymentRecordParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthPaymentRecordParam();
      if (Reflect.has(data, 'currentPage'))
        obj.currentPage = ApiClient.convertToType(data['currentPage'], 'Number');
      if (Reflect.has(data, 'endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
      if (Reflect.has(data, 'keyword'))
        obj.keyword = ApiClient.convertToType(data['keyword'], 'String');
      if (Reflect.has(data, 'orderType'))
        obj.orderType = ApiClient.convertToType(data['orderType'], 'String');
      if (Reflect.has(data, 'pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (Reflect.has(data, 'startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
    }
    return obj;
  }
}

/**
 * 页码
 * @member {Number} currentPage
 */
AuthPaymentRecordParam.prototype.currentPage = undefined;

/**
 * 搜索结束时间
 * @member {String} endTime
 */
AuthPaymentRecordParam.prototype.endTime = undefined;

/**
 * 关键字
 * @member {String} keyword
 */
AuthPaymentRecordParam.prototype.keyword = undefined;

/**
 * 订单类型 0短信,1天气,2定位,3邮件,4流量,5语音
 * @member {String} orderType
 */
AuthPaymentRecordParam.prototype.orderType = undefined;

/**
 * 查询数量
 * @member {Number} pageSize
 */
AuthPaymentRecordParam.prototype.pageSize = undefined;

/**
 * 搜索开始时间
 * @member {String} startTime
 */
AuthPaymentRecordParam.prototype.startTime = undefined;


