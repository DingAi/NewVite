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
 * The AddProjectPropertiesEnum model module.
 * @module com.mn.sdk.model/AddProjectPropertiesEnum
 * @version 1.0
 */
export class AddProjectPropertiesEnum {
  /**
   * Constructs a new <code>AddProjectPropertiesEnum</code>.
   * 新增项目属性枚举Form类
   * @alias module:com.mn.sdk.model/AddProjectPropertiesEnum
   * @class
   * @param enumName {String} 枚举名称
   * @param propertiesId {String} 项目属性Id
   * @param remark {String} 枚举属性备注
   * @param sort {Number} 枚举属性排序号
   */
  constructor(enumName, propertiesId, remark, sort) {
    this.enumName = enumName;
    this.propertiesId = propertiesId;
    this.remark = remark;
    this.sort = sort;
  }


    static constructFromList(list) {
        let array = [new AddProjectPropertiesEnum()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddProjectPropertiesEnum.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddProjectPropertiesEnum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddProjectPropertiesEnum} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddProjectPropertiesEnum} The populated <code>AddProjectPropertiesEnum</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddProjectPropertiesEnum();
      if (Reflect.has(data, 'enumName'))
        obj.enumName = ApiClient.convertToType(data['enumName'], 'String');
      if (Reflect.has(data, 'propertiesId'))
        obj.propertiesId = ApiClient.convertToType(data['propertiesId'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
    }
    return obj;
  }
}

/**
 * 枚举名称
 * @member {String} enumName
 */
AddProjectPropertiesEnum.prototype.enumName = undefined;

/**
 * 项目属性Id
 * @member {String} propertiesId
 */
AddProjectPropertiesEnum.prototype.propertiesId = undefined;

/**
 * 枚举属性备注
 * @member {String} remark
 */
AddProjectPropertiesEnum.prototype.remark = undefined;

/**
 * 枚举属性排序号
 * @member {Number} sort
 */
AddProjectPropertiesEnum.prototype.sort = undefined;


