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
 * The SimulateAlarmRule model module.
 * @module com.mn.sdk.model/SimulateAlarmRule
 * @version 1.0
 */
export class SimulateAlarmRule {
  /**
   * Constructs a new <code>SimulateAlarmRule</code>.
   * 模拟硬件的报警规则
   * @alias module:com.mn.sdk.model/SimulateAlarmRule
   * @class
   * @param alarmId {Number} 报警id
   * @param createdTime {Date} 创建时间
   * @param remark {String} 描述
   * @param ruleId {String} 规则ID
   * @param triggerInterval {Number} 报警模拟触发间隔,单位:分钟
   * @param updatedTime {Date} 修改时间
   */
  constructor(alarmId, createdTime, remark, ruleId, triggerInterval, updatedTime) {
    this.alarmId = alarmId;
    this.createdTime = createdTime;
    this.remark = remark;
    this.ruleId = ruleId;
    this.triggerInterval = triggerInterval;
    this.updatedTime = updatedTime;
  }


    static constructFromList(list) {
        let array = [new SimulateAlarmRule()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(SimulateAlarmRule.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>SimulateAlarmRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/SimulateAlarmRule} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/SimulateAlarmRule} The populated <code>SimulateAlarmRule</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SimulateAlarmRule();
      if (Reflect.has(data, 'alarmId'))
        obj.alarmId = ApiClient.convertToType(data['alarmId'], 'Number');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'ruleId'))
        obj.ruleId = ApiClient.convertToType(data['ruleId'], 'String');
      if (Reflect.has(data, 'triggerInterval'))
        obj.triggerInterval = ApiClient.convertToType(data['triggerInterval'], 'Number');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
    }
    return obj;
  }
}

/**
 * 报警id
 * @member {Number} alarmId
 */
SimulateAlarmRule.prototype.alarmId = undefined;

/**
 * 创建时间
 * @member {Date} createdTime
 */
SimulateAlarmRule.prototype.createdTime = undefined;

/**
 * 描述
 * @member {String} remark
 */
SimulateAlarmRule.prototype.remark = undefined;

/**
 * 规则ID
 * @member {String} ruleId
 */
SimulateAlarmRule.prototype.ruleId = undefined;

/**
 * 报警模拟触发间隔,单位:分钟
 * @member {Number} triggerInterval
 */
SimulateAlarmRule.prototype.triggerInterval = undefined;

/**
 * 修改时间
 * @member {Date} updatedTime
 */
SimulateAlarmRule.prototype.updatedTime = undefined;


