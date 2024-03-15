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
 * The UserAuthorizationProjectVo model module.
 * @module com.mn.sdk.model/UserAuthorizationProjectVo
 * @version 1.0
 */
export class UserAuthorizationProjectVo {
  /**
   * Constructs a new <code>UserAuthorizationProjectVo</code>.
   * 项目列表
   * @alias module:com.mn.sdk.model/UserAuthorizationProjectVo
   * @class
   * @param children {Array.<module:com.mn.sdk.model/UserAuthorizationProjectVo>} 子节点
   * @param companyId {String} 项目所属企业id
   * @param def {String} 
   * @param groupId {String} 项目组id
   * @param groupName {String} 项目所属组名称
   * @param projectId {String} 项目id
   * @param projectName {String} 项目名称
   * @param type {Number} 
   */
  constructor(children, companyId, def, groupId, groupName, projectId, projectName, type) {
    this.children = children;
    this.companyId = companyId;
    this.def = def;
    this.groupId = groupId;
    this.groupName = groupName;
    this.projectId = projectId;
    this.projectName = projectName;
    this.type = type;
  }


    static constructFromList(list) {
        let array = [new UserAuthorizationProjectVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UserAuthorizationProjectVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UserAuthorizationProjectVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UserAuthorizationProjectVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UserAuthorizationProjectVo} The populated <code>UserAuthorizationProjectVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserAuthorizationProjectVo();
      if (Reflect.has(data, 'children'))
        obj.children = ApiClient.convertToType(data['children'], [UserAuthorizationProjectVo]);
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'def'))
        obj.def = ApiClient.convertToType(data['def'], 'String');
      if (Reflect.has(data, 'groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (Reflect.has(data, 'groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'projectName'))
        obj.projectName = ApiClient.convertToType(data['projectName'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
    }
    return obj;
  }
}

/**
 * 子节点
 * @member {Array.<module:com.mn.sdk.model/UserAuthorizationProjectVo>} children
 */
UserAuthorizationProjectVo.prototype.children = undefined;

/**
 * 项目所属企业id
 * @member {String} companyId
 */
UserAuthorizationProjectVo.prototype.companyId = undefined;

/**
 * @member {String} def
 */
UserAuthorizationProjectVo.prototype.def = undefined;

/**
 * 项目组id
 * @member {String} groupId
 */
UserAuthorizationProjectVo.prototype.groupId = undefined;

/**
 * 项目所属组名称
 * @member {String} groupName
 */
UserAuthorizationProjectVo.prototype.groupName = undefined;

/**
 * 项目id
 * @member {String} projectId
 */
UserAuthorizationProjectVo.prototype.projectId = undefined;

/**
 * 项目名称
 * @member {String} projectName
 */
UserAuthorizationProjectVo.prototype.projectName = undefined;

/**
 * @member {Number} type
 */
UserAuthorizationProjectVo.prototype.type = undefined;


