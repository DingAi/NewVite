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
import {RouteVo} from './RouteVo';

/**
 * The LoginUserVo model module.
 * @module com.mn.sdk.model/LoginUserVo
 * @version 1.0
 */
export class LoginUserVo {
  /**
   * Constructs a new <code>LoginUserVo</code>.
   * 登录用户Vo
   * @alias module:com.mn.sdk.model/LoginUserVo
   * @class
   * @param avatar {String} 头像地址
   * @param companyId {String} 企业id
   * @param departmentId {String} 部门id
   * @param id {String} 用户id
   * @param nickname {String} 昵称
   * @param permissionCodes {Array.<String>} 资源
   * @param phone {String} 手机号码
   * @param routeMenu {Array.<module:com.mn.sdk.model/RouteVo>} 路由菜单
   * @param type {Number} 类型(0超级管理员(super),1超级企业管理员2企业管理员,3企业用户,4部门管理员5部门用户,6个人开发者)
   * @param username {String} 用户名
   */
  constructor(avatar, companyId, departmentId, id, nickname, permissionCodes, phone, routeMenu, type, username) {
    this.avatar = avatar;
    this.companyId = companyId;
    this.departmentId = departmentId;
    this.id = id;
    this.nickname = nickname;
    this.permissionCodes = permissionCodes;
    this.phone = phone;
    this.routeMenu = routeMenu;
    this.type = type;
    this.username = username;
  }


    static constructFromList(list) {
        let array = [new LoginUserVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(LoginUserVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>LoginUserVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/LoginUserVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/LoginUserVo} The populated <code>LoginUserVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LoginUserVo();
      if (Reflect.has(data, 'avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'departmentId'))
        obj.departmentId = ApiClient.convertToType(data['departmentId'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'nickname'))
        obj.nickname = ApiClient.convertToType(data['nickname'], 'String');
      if (Reflect.has(data, 'permissionCodes'))
        obj.permissionCodes = ApiClient.convertToType(data['permissionCodes'], ['String']);
      if (Reflect.has(data, 'phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (Reflect.has(data, 'routeMenu'))
        obj.routeMenu = ApiClient.convertToType(data['routeMenu'], [RouteVo]);
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (Reflect.has(data, 'username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }
}

/**
 * 头像地址
 * @member {String} avatar
 */
LoginUserVo.prototype.avatar = undefined;

/**
 * 企业id
 * @member {String} companyId
 */
LoginUserVo.prototype.companyId = undefined;

/**
 * 部门id
 * @member {String} departmentId
 */
LoginUserVo.prototype.departmentId = undefined;

/**
 * 用户id
 * @member {String} id
 */
LoginUserVo.prototype.id = undefined;

/**
 * 昵称
 * @member {String} nickname
 */
LoginUserVo.prototype.nickname = undefined;

/**
 * 资源
 * @member {Array.<String>} permissionCodes
 */
LoginUserVo.prototype.permissionCodes = undefined;

/**
 * 手机号码
 * @member {String} phone
 */
LoginUserVo.prototype.phone = undefined;

/**
 * 路由菜单
 * @member {Array.<module:com.mn.sdk.model/RouteVo>} routeMenu
 */
LoginUserVo.prototype.routeMenu = undefined;

/**
 * 类型(0超级管理员(super),1超级企业管理员2企业管理员,3企业用户,4部门管理员5部门用户,6个人开发者)
 * @member {Number} type
 */
LoginUserVo.prototype.type = undefined;

/**
 * 用户名
 * @member {String} username
 */
LoginUserVo.prototype.username = undefined;


