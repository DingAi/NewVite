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
 * The RegulationMessageGroupForm model module.
 * @module com.mn.sdk.model/RegulationMessageGroupForm
 * @version 1.0
 */
export class RegulationMessageGroupForm {
  /**
   * Constructs a new <code>RegulationMessageGroupForm</code>.
   * 查询推送规则的分组设置
   * @alias module:com.mn.sdk.model/RegulationMessageGroupForm
   * @class
   * @param flag {Boolean} 标识
   * @param index {Number} index
   * @param regulationId {String} 推送id
   */
  constructor(flag, index, regulationId) {
    this.flag = flag;
    this.index = index;
    this.regulationId = regulationId;
  }


    static constructFromList(list) {
        let array = [new RegulationMessageGroupForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(RegulationMessageGroupForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>RegulationMessageGroupForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/RegulationMessageGroupForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/RegulationMessageGroupForm} The populated <code>RegulationMessageGroupForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RegulationMessageGroupForm();
      if (Reflect.has(data, 'flag'))
        obj.flag = ApiClient.convertToType(data['flag'], 'Boolean');
      if (Reflect.has(data, 'index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (Reflect.has(data, 'regulationId'))
        obj.regulationId = ApiClient.convertToType(data['regulationId'], 'String');
    }
    return obj;
  }
}

/**
 * 标识
 * @member {Boolean} flag
 */
RegulationMessageGroupForm.prototype.flag = undefined;

/**
 * index
 * @member {Number} index
 */
RegulationMessageGroupForm.prototype.index = undefined;

/**
 * 推送id
 * @member {String} regulationId
 */
RegulationMessageGroupForm.prototype.regulationId = undefined;


