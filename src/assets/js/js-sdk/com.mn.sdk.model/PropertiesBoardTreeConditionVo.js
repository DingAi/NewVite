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
 * The PropertiesBoardTreeConditionVo model module.
 * @module com.mn.sdk.model/PropertiesBoardTreeConditionVo
 * @version 1.0
 */
export class PropertiesBoardTreeConditionVo {
  /**
   * Constructs a new <code>PropertiesBoardTreeConditionVo</code>.
   * 树看板 分类条件VO
   * @alias module:com.mn.sdk.model/PropertiesBoardTreeConditionVo
   * @class
   * @param propertiesId {String} 属性Id  当类型属于 属性时
   * @param type {String} 属性类型:= 0:省、 1:市、 2:区、 3:客户、 4:年、 5:月、 6:项目属性
   * @param value {String} 对应类型的值
   */
  constructor(propertiesId, type, value) {
    this.propertiesId = propertiesId;
    this.type = type;
    this.value = value;
  }


    static constructFromList(list) {
        let array = [new PropertiesBoardTreeConditionVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(PropertiesBoardTreeConditionVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>PropertiesBoardTreeConditionVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/PropertiesBoardTreeConditionVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/PropertiesBoardTreeConditionVo} The populated <code>PropertiesBoardTreeConditionVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PropertiesBoardTreeConditionVo();
      if (Reflect.has(data, 'propertiesId'))
        obj.propertiesId = ApiClient.convertToType(data['propertiesId'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (Reflect.has(data, 'value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * 属性Id  当类型属于 属性时
 * @member {String} propertiesId
 */
PropertiesBoardTreeConditionVo.prototype.propertiesId = undefined;

/**
 * 属性类型:= 0:省、 1:市、 2:区、 3:客户、 4:年、 5:月、 6:项目属性
 * @member {String} type
 */
PropertiesBoardTreeConditionVo.prototype.type = undefined;

/**
 * 对应类型的值
 * @member {String} value
 */
PropertiesBoardTreeConditionVo.prototype.value = undefined;

