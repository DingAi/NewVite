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
 * The QueryVariantHistoryParam model module.
 * @module com.mn.sdk.model/QueryVariantHistoryParam
 * @version 1.0
 */
export class QueryVariantHistoryParam {
  /**
   * Constructs a new <code>QueryVariantHistoryParam</code>.
   * 查询变量历史数据Param
   * @alias module:com.mn.sdk.model/QueryVariantHistoryParam
   * @class
   * @param endTime {String} 结束时间
   * @param startTime {String} 开始时间
   * @param variantList {Array.<String>} 变量集合 格式[deviceId:variantId,...]
   */
  constructor(endTime, startTime, variantList) {
    this.endTime = endTime;
    this.startTime = startTime;
    this.variantList = variantList;
  }


    static constructFromList(list) {
        let array = [new QueryVariantHistoryParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(QueryVariantHistoryParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>QueryVariantHistoryParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/QueryVariantHistoryParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/QueryVariantHistoryParam} The populated <code>QueryVariantHistoryParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QueryVariantHistoryParam();
      if (Reflect.has(data, 'endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
      if (Reflect.has(data, 'startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (Reflect.has(data, 'variantList'))
        obj.variantList = ApiClient.convertToType(data['variantList'], ['String']);
    }
    return obj;
  }
}

/**
 * 结束时间
 * @member {String} endTime
 */
QueryVariantHistoryParam.prototype.endTime = undefined;

/**
 * 开始时间
 * @member {String} startTime
 */
QueryVariantHistoryParam.prototype.startTime = undefined;

/**
 * 变量集合 格式[deviceId:variantId,...]
 * @member {Array.<String>} variantList
 */
QueryVariantHistoryParam.prototype.variantList = undefined;


