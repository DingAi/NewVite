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
 * The PersonalPhoneForm model module.
 * @module com.mn.sdk.model/PersonalPhoneForm
 * @version 1.0
 */
export class PersonalPhoneForm {
  /**
   * Constructs a new <code>PersonalPhoneForm</code>.
   * 个人的手机号表单信息
   * @alias module:com.mn.sdk.model/PersonalPhoneForm
   * @class
   * @param phone {String} 手机号
   * @param phoneCode {String} 手机验证码
   */
  constructor(phone, phoneCode) {
    this.phone = phone;
    this.phoneCode = phoneCode;
  }


    static constructFromList(list) {
        let array = [new PersonalPhoneForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(PersonalPhoneForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>PersonalPhoneForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/PersonalPhoneForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/PersonalPhoneForm} The populated <code>PersonalPhoneForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PersonalPhoneForm();
      if (Reflect.has(data, 'phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (Reflect.has(data, 'phoneCode'))
        obj.phoneCode = ApiClient.convertToType(data['phoneCode'], 'String');
    }
    return obj;
  }
}

/**
 * 手机号
 * @member {String} phone
 */
PersonalPhoneForm.prototype.phone = undefined;

/**
 * 手机验证码
 * @member {String} phoneCode
 */
PersonalPhoneForm.prototype.phoneCode = undefined;

