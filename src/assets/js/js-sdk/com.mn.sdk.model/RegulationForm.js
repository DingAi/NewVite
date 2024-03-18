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
 * The RegulationForm model module.
 * @module com.mn.sdk.model/RegulationForm
 * @version 1.0
 */
export class RegulationForm {
  /**
   * Constructs a new <code>RegulationForm</code>.
   * 推送规则Form
   * @alias module:com.mn.sdk.model/RegulationForm
   * @class
   * @param id {String} 规则ID,修改时required
   * @param name {String} 规则名称
   * @param type {String} 规则类型0表示新增，1表示修改
   */
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }


    static constructFromList(list) {
        let array = [new RegulationForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(RegulationForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>RegulationForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/RegulationForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/RegulationForm} The populated <code>RegulationForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RegulationForm();
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * 规则ID,修改时required
 * @member {String} id
 */
RegulationForm.prototype.id = undefined;

/**
 * 规则名称
 * @member {String} name
 */
RegulationForm.prototype.name = undefined;

/**
 * 规则类型0表示新增，1表示修改
 * @member {String} type
 */
RegulationForm.prototype.type = undefined;

