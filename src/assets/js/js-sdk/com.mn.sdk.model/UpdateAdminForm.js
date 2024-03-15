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
 * The UpdateAdminForm model module.
 * @module com.mn.sdk.model/UpdateAdminForm
 * @version 1.0
 */
export class UpdateAdminForm {
  /**
   * Constructs a new <code>UpdateAdminForm</code>.
   * 更换超管Form
   * @alias module:com.mn.sdk.model/UpdateAdminForm
   * @class
   * @param phoneCode {String} 手机验证码
   * @param userId {String} 用户标识
   */
  constructor(phoneCode, userId) {
    this.phoneCode = phoneCode;
    this.userId = userId;
  }


    static constructFromList(list) {
        let array = [new UpdateAdminForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UpdateAdminForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UpdateAdminForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UpdateAdminForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UpdateAdminForm} The populated <code>UpdateAdminForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateAdminForm();
      if (Reflect.has(data, 'phoneCode'))
        obj.phoneCode = ApiClient.convertToType(data['phoneCode'], 'String');
      if (Reflect.has(data, 'userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
    }
    return obj;
  }
}

/**
 * 手机验证码
 * @member {String} phoneCode
 */
UpdateAdminForm.prototype.phoneCode = undefined;

/**
 * 用户标识
 * @member {String} userId
 */
UpdateAdminForm.prototype.userId = undefined;


