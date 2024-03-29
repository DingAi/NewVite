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
 * The VariableBindingTagParam model module.
 * @module com.mn.sdk.model/VariableBindingTagParam
 * @version 1.0
 */
export class VariableBindingTagParam {
  /**
   * Constructs a new <code>VariableBindingTagParam</code>.
   * 变量绑定标签Param类
   * @alias module:com.mn.sdk.model/VariableBindingTagParam
   * @class
   * @param deviceId {String} 设备Id
   * @param resourceId {String} 项目/模板Id
   * @param resourceType {String} template/project(项目/模板变量 绑定标签)
   * @param variantId {Number} 变量Id
   * @param variantTagId {String} 变量标签Id
   */
  constructor(deviceId, resourceId, resourceType, variantId, variantTagId) {
    this.deviceId = deviceId;
    this.resourceId = resourceId;
    this.resourceType = resourceType;
    this.variantId = variantId;
    this.variantTagId = variantTagId;
  }


    static constructFromList(list) {
        let array = [new VariableBindingTagParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(VariableBindingTagParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>VariableBindingTagParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/VariableBindingTagParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/VariableBindingTagParam} The populated <code>VariableBindingTagParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariableBindingTagParam();
      if (Reflect.has(data, 'deviceId'))
        obj.deviceId = ApiClient.convertToType(data['deviceId'], 'String');
      if (Reflect.has(data, 'resourceId'))
        obj.resourceId = ApiClient.convertToType(data['resourceId'], 'String');
      if (Reflect.has(data, 'resourceType'))
        obj.resourceType = ApiClient.convertToType(data['resourceType'], 'String');
      if (Reflect.has(data, 'variantId'))
        obj.variantId = ApiClient.convertToType(data['variantId'], 'Number');
      if (Reflect.has(data, 'variantTagId'))
        obj.variantTagId = ApiClient.convertToType(data['variantTagId'], 'String');
    }
    return obj;
  }
}

/**
 * 设备Id
 * @member {String} deviceId
 */
VariableBindingTagParam.prototype.deviceId = undefined;

/**
 * 项目/模板Id
 * @member {String} resourceId
 */
VariableBindingTagParam.prototype.resourceId = undefined;

/**
 * template/project(项目/模板变量 绑定标签)
 * @member {String} resourceType
 */
VariableBindingTagParam.prototype.resourceType = undefined;

/**
 * 变量Id
 * @member {Number} variantId
 */
VariableBindingTagParam.prototype.variantId = undefined;

/**
 * 变量标签Id
 * @member {String} variantTagId
 */
VariableBindingTagParam.prototype.variantTagId = undefined;


