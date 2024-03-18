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
 * The AttentionStatusVo model module.
 * @module com.mn.sdk.model/AttentionStatusVo
 * @version 1.0
 */
export class AttentionStatusVo {
  /**
   * Constructs a new <code>AttentionStatusVo</code>.
   * @alias module:com.mn.sdk.model/AttentionStatusVo
   * @class
   * @param projectId {String} 项目id
   * @param status {String} 关注状态，0：未关注，1：已关注
   */
  constructor(projectId, status) {
    this.projectId = projectId;
    this.status = status;
  }


    static constructFromList(list) {
        let array = [new AttentionStatusVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AttentionStatusVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AttentionStatusVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AttentionStatusVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AttentionStatusVo} The populated <code>AttentionStatusVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AttentionStatusVo();
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * 项目id
 * @member {String} projectId
 */
AttentionStatusVo.prototype.projectId = undefined;

/**
 * 关注状态，0：未关注，1：已关注
 * @member {String} status
 */
AttentionStatusVo.prototype.status = undefined;

