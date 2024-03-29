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
 * The QueryVariantGroupParam model module.
 * @module com.mn.sdk.model/QueryVariantGroupParam
 * @version 1.0
 */
export class QueryVariantGroupParam {
  /**
   * Constructs a new <code>QueryVariantGroupParam</code>.
   * 查询变量分组数据Param
   * @alias module:com.mn.sdk.model/QueryVariantGroupParam
   * @class
   * @param resourceId {String} 资源id
   * @param resourceType {String} 指定资源id的类型。可选[project,template]
   */
  constructor(resourceId, resourceType) {
    this.resourceId = resourceId;
    this.resourceType = resourceType;
  }


    static constructFromList(list) {
        let array = [new QueryVariantGroupParam()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(QueryVariantGroupParam.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>QueryVariantGroupParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/QueryVariantGroupParam} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/QueryVariantGroupParam} The populated <code>QueryVariantGroupParam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QueryVariantGroupParam();
      if (Reflect.has(data, 'resourceId'))
        obj.resourceId = ApiClient.convertToType(data['resourceId'], 'String');
      if (Reflect.has(data, 'resourceType'))
        obj.resourceType = ApiClient.convertToType(data['resourceType'], 'String');
    }
    return obj;
  }
}

/**
 * 资源id
 * @member {String} resourceId
 */
QueryVariantGroupParam.prototype.resourceId = undefined;

/**
 * 指定资源id的类型。可选[project,template]
 * @member {String} resourceType
 */
QueryVariantGroupParam.prototype.resourceType = undefined;


