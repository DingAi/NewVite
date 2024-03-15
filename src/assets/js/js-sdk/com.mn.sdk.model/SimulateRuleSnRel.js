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
 * The SimulateRuleSnRel model module.
 * @module com.mn.sdk.model/SimulateRuleSnRel
 * @version 1.0
 */
export class SimulateRuleSnRel {
  /**
   * Constructs a new <code>SimulateRuleSnRel</code>.
   * 规则-序列号关联
   * @alias module:com.mn.sdk.model/SimulateRuleSnRel
   * @class
   * @param createdTime {Date} 创建时间
   * @param remark {String} 描述
   * @param ruleId {String} 规则id
   * @param serialNumber {String} 序列号
   * @param updatedTime {Date} 修改时间
   */
  constructor(createdTime, remark, ruleId, serialNumber, updatedTime) {
    this.createdTime = createdTime;
    this.remark = remark;
    this.ruleId = ruleId;
    this.serialNumber = serialNumber;
    this.updatedTime = updatedTime;
  }


    static constructFromList(list) {
        let array = [new SimulateRuleSnRel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(SimulateRuleSnRel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>SimulateRuleSnRel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/SimulateRuleSnRel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/SimulateRuleSnRel} The populated <code>SimulateRuleSnRel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SimulateRuleSnRel();
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'ruleId'))
        obj.ruleId = ApiClient.convertToType(data['ruleId'], 'String');
      if (Reflect.has(data, 'serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'String');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
    }
    return obj;
  }
}

/**
 * 创建时间
 * @member {Date} createdTime
 */
SimulateRuleSnRel.prototype.createdTime = undefined;

/**
 * 描述
 * @member {String} remark
 */
SimulateRuleSnRel.prototype.remark = undefined;

/**
 * 规则id
 * @member {String} ruleId
 */
SimulateRuleSnRel.prototype.ruleId = undefined;

/**
 * 序列号
 * @member {String} serialNumber
 */
SimulateRuleSnRel.prototype.serialNumber = undefined;

/**
 * 修改时间
 * @member {Date} updatedTime
 */
SimulateRuleSnRel.prototype.updatedTime = undefined;


