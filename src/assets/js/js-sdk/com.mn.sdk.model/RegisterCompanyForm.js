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
 * The RegisterCompanyForm model module.
 * @module com.mn.sdk.model/RegisterCompanyForm
 * @version 1.0
 */
export class RegisterCompanyForm {
  /**
   * Constructs a new <code>RegisterCompanyForm</code>.
   * 注册公司表单信息
   * @alias module:com.mn.sdk.model/RegisterCompanyForm
   * @class
   * @param companyName {String} 公司名称
   * @param email {String} 邮箱地址
   * @param flag {Number} 标识 0:普通注册 1:客户管理注册企业 2:super添加企业
   * @param nickname {String} 用户昵称
   * @param password {String} 密码
   * @param phone {String} 手机号
   * @param phoneCode {String} 手机验证码
   * @param remark {String} 备注
   * @param username {String} 账号
   */
  constructor(companyName, email, flag, nickname, password, phone, phoneCode, remark, username) {
    this.companyName = companyName;
    this.email = email;
    this.flag = flag;
    this.nickname = nickname;
    this.password = password;
    this.phone = phone;
    this.phoneCode = phoneCode;
    this.remark = remark;
    this.username = username;
  }


    static constructFromList(list) {
        let array = [new RegisterCompanyForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(RegisterCompanyForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>RegisterCompanyForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/RegisterCompanyForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/RegisterCompanyForm} The populated <code>RegisterCompanyForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RegisterCompanyForm();
      if (Reflect.has(data, 'companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (Reflect.has(data, 'email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (Reflect.has(data, 'flag'))
        obj.flag = ApiClient.convertToType(data['flag'], 'Number');
      if (Reflect.has(data, 'nickname'))
        obj.nickname = ApiClient.convertToType(data['nickname'], 'String');
      if (Reflect.has(data, 'password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (Reflect.has(data, 'phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (Reflect.has(data, 'phoneCode'))
        obj.phoneCode = ApiClient.convertToType(data['phoneCode'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }
}

/**
 * 公司名称
 * @member {String} companyName
 */
RegisterCompanyForm.prototype.companyName = undefined;

/**
 * 邮箱地址
 * @member {String} email
 */
RegisterCompanyForm.prototype.email = undefined;

/**
 * 标识 0:普通注册 1:客户管理注册企业 2:super添加企业
 * @member {Number} flag
 */
RegisterCompanyForm.prototype.flag = undefined;

/**
 * 用户昵称
 * @member {String} nickname
 */
RegisterCompanyForm.prototype.nickname = undefined;

/**
 * 密码
 * @member {String} password
 */
RegisterCompanyForm.prototype.password = undefined;

/**
 * 手机号
 * @member {String} phone
 */
RegisterCompanyForm.prototype.phone = undefined;

/**
 * 手机验证码
 * @member {String} phoneCode
 */
RegisterCompanyForm.prototype.phoneCode = undefined;

/**
 * 备注
 * @member {String} remark
 */
RegisterCompanyForm.prototype.remark = undefined;

/**
 * 账号
 * @member {String} username
 */
RegisterCompanyForm.prototype.username = undefined;


