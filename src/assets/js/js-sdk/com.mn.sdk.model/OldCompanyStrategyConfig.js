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
 * The OldCompanyStrategyConfig model module.
 * @module com.mn.sdk.model/OldCompanyStrategyConfig
 * @version 1.0
 */
export class OldCompanyStrategyConfig {
  /**
   * Constructs a new <code>OldCompanyStrategyConfig</code>.
   * @alias module:com.mn.sdk.model/OldCompanyStrategyConfig
   * @class
   * @param checked {String} 0:关闭老企业策略，1：开启老企业策略
   * @param endTime {String} 过度结束时间
   * @param startTime {String} 过度开始时间
   * @param strategyStatus {String} 策略状态,0:未触发可以修改策略，1：已经触发，不可修改策略
   */
  constructor(checked, endTime, startTime, strategyStatus) {
    this.checked = checked;
    this.endTime = endTime;
    this.startTime = startTime;
    this.strategyStatus = strategyStatus;
  }


    static constructFromList(list) {
        let array = [new OldCompanyStrategyConfig()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(OldCompanyStrategyConfig.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>OldCompanyStrategyConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/OldCompanyStrategyConfig} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/OldCompanyStrategyConfig} The populated <code>OldCompanyStrategyConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OldCompanyStrategyConfig();
      if (Reflect.has(data, 'checked'))
        obj.checked = ApiClient.convertToType(data['checked'], 'String');
      if (Reflect.has(data, 'endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
      if (Reflect.has(data, 'startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (Reflect.has(data, 'strategyStatus'))
        obj.strategyStatus = ApiClient.convertToType(data['strategyStatus'], 'String');
    }
    return obj;
  }
}

/**
 * 0:关闭老企业策略，1：开启老企业策略
 * @member {String} checked
 */
OldCompanyStrategyConfig.prototype.checked = undefined;

/**
 * 过度结束时间
 * @member {String} endTime
 */
OldCompanyStrategyConfig.prototype.endTime = undefined;

/**
 * 过度开始时间
 * @member {String} startTime
 */
OldCompanyStrategyConfig.prototype.startTime = undefined;

/**
 * 策略状态,0:未触发可以修改策略，1：已经触发，不可修改策略
 * @member {String} strategyStatus
 */
OldCompanyStrategyConfig.prototype.strategyStatus = undefined;


