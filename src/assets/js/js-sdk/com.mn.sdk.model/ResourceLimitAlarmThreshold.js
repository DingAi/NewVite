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
 * The ResourceLimitAlarmThreshold model module.
 * @module com.mn.sdk.model/ResourceLimitAlarmThreshold
 * @version 1.0
 */
export class ResourceLimitAlarmThreshold {
  /**
   * Constructs a new <code>ResourceLimitAlarmThreshold</code>.
   * @alias module:com.mn.sdk.model/ResourceLimitAlarmThreshold
   * @class
   * @param companyId {String} 企业id
   * @param limitThreshold {String} 额度阈值的开启状态 关闭0，开启 1
   * @param limitThresholdSize {Number} 额度阈值比列10-90
   */
  constructor(companyId, limitThreshold, limitThresholdSize) {
    this.companyId = companyId;
    this.limitThreshold = limitThreshold;
    this.limitThresholdSize = limitThresholdSize;
  }


    static constructFromList(list) {
        let array = [new ResourceLimitAlarmThreshold()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ResourceLimitAlarmThreshold.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ResourceLimitAlarmThreshold</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ResourceLimitAlarmThreshold} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ResourceLimitAlarmThreshold} The populated <code>ResourceLimitAlarmThreshold</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResourceLimitAlarmThreshold();
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'limitThreshold'))
        obj.limitThreshold = ApiClient.convertToType(data['limitThreshold'], 'String');
      if (Reflect.has(data, 'limitThresholdSize'))
        obj.limitThresholdSize = ApiClient.convertToType(data['limitThresholdSize'], 'Number');
    }
    return obj;
  }
}

/**
 * 企业id
 * @member {String} companyId
 */
ResourceLimitAlarmThreshold.prototype.companyId = undefined;

/**
 * 额度阈值的开启状态 关闭0，开启 1
 * @member {String} limitThreshold
 */
ResourceLimitAlarmThreshold.prototype.limitThreshold = undefined;

/**
 * 额度阈值比列10-90
 * @member {Number} limitThresholdSize
 */
ResourceLimitAlarmThreshold.prototype.limitThresholdSize = undefined;


