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
 * The UpdateEnumPropertiesForm model module.
 * @module com.mn.sdk.model/UpdateEnumPropertiesForm
 * @version 1.0
 */
export class UpdateEnumPropertiesForm {
  /**
   * Constructs a new <code>UpdateEnumPropertiesForm</code>.
   * 修改枚举属性From
   * @alias module:com.mn.sdk.model/UpdateEnumPropertiesForm
   * @class
   * @param id {String} 枚举属性值Id
   * @param name {String} 枚举属性值名称
   * @param remark {String} 枚举备注
   * @param sort {Number} 排序号
   */
  constructor(id, name, remark, sort) {
    this.id = id;
    this.name = name;
    this.remark = remark;
    this.sort = sort;
  }


    static constructFromList(list) {
        let array = [new UpdateEnumPropertiesForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UpdateEnumPropertiesForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UpdateEnumPropertiesForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UpdateEnumPropertiesForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UpdateEnumPropertiesForm} The populated <code>UpdateEnumPropertiesForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateEnumPropertiesForm();
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
    }
    return obj;
  }
}

/**
 * 枚举属性值Id
 * @member {String} id
 */
UpdateEnumPropertiesForm.prototype.id = undefined;

/**
 * 枚举属性值名称
 * @member {String} name
 */
UpdateEnumPropertiesForm.prototype.name = undefined;

/**
 * 枚举备注
 * @member {String} remark
 */
UpdateEnumPropertiesForm.prototype.remark = undefined;

/**
 * 排序号
 * @member {Number} sort
 */
UpdateEnumPropertiesForm.prototype.sort = undefined;


