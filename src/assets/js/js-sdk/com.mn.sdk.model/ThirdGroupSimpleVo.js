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
 * The ThirdGroupSimpleVo model module.
 * @module com.mn.sdk.model/ThirdGroupSimpleVo
 * @version 1.0
 */
export class ThirdGroupSimpleVo {
  /**
   * Constructs a new <code>ThirdGroupSimpleVo</code>.
   * 简单得第三方设备分组信息
   * @alias module:com.mn.sdk.model/ThirdGroupSimpleVo
   * @class
   * @param groupDesc {String} 分组描述
   * @param id {String} 分组id
   * @param name {String} 分组名称
   */
  constructor(groupDesc, id, name) {
    this.groupDesc = groupDesc;
    this.id = id;
    this.name = name;
  }


    static constructFromList(list) {
        let array = [new ThirdGroupSimpleVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ThirdGroupSimpleVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ThirdGroupSimpleVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ThirdGroupSimpleVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ThirdGroupSimpleVo} The populated <code>ThirdGroupSimpleVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ThirdGroupSimpleVo();
      if (Reflect.has(data, 'groupDesc'))
        obj.groupDesc = ApiClient.convertToType(data['groupDesc'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * 分组描述
 * @member {String} groupDesc
 */
ThirdGroupSimpleVo.prototype.groupDesc = undefined;

/**
 * 分组id
 * @member {String} id
 */
ThirdGroupSimpleVo.prototype.id = undefined;

/**
 * 分组名称
 * @member {String} name
 */
ThirdGroupSimpleVo.prototype.name = undefined;


