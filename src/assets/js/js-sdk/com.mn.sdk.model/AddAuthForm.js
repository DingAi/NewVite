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
 * The AddAuthForm model module.
 * @module com.mn.sdk.model/AddAuthForm
 * @version 1.0
 */
export class AddAuthForm {
  /**
   * Constructs a new <code>AddAuthForm</code>.
   * 添加授权Form
   * @alias module:com.mn.sdk.model/AddAuthForm
   * @class
   * @param ids {Array.<String>} 被授予的id(项目或者权限组)
   * @param roleId {String} 角色ID
   * @param userId {String} 被授权者用户ID
   */
  constructor(ids, roleId, userId) {
    this.ids = ids;
    this.roleId = roleId;
    this.userId = userId;
  }


    static constructFromList(list) {
        let array = [new AddAuthForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AddAuthForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AddAuthForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AddAuthForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AddAuthForm} The populated <code>AddAuthForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddAuthForm();
      if (Reflect.has(data, 'ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (Reflect.has(data, 'roleId'))
        obj.roleId = ApiClient.convertToType(data['roleId'], 'String');
      if (Reflect.has(data, 'userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
    }
    return obj;
  }
}

/**
 * 被授予的id(项目或者权限组)
 * @member {Array.<String>} ids
 */
AddAuthForm.prototype.ids = undefined;

/**
 * 角色ID
 * @member {String} roleId
 */
AddAuthForm.prototype.roleId = undefined;

/**
 * 被授权者用户ID
 * @member {String} userId
 */
AddAuthForm.prototype.userId = undefined;


