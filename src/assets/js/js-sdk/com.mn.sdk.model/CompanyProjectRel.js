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
 * The CompanyProjectRel model module.
 * @module com.mn.sdk.model/CompanyProjectRel
 * @version 1.0
 */
export class CompanyProjectRel {
  /**
   * Constructs a new <code>CompanyProjectRel</code>.
   * 企业项目关联
   * @alias module:com.mn.sdk.model/CompanyProjectRel
   * @class
   * @param authCompanyId {String} 项目为被授权项目时不为空，表示授权者企业的企业id
   * @param clientName {String} 客户名称
   * @param companyId {String} 公司ID
   * @param createdTime {Date} 创建时间
   * @param id {String} id
   * @param projectId {String} 项目ID
   * @param projectRole {String} 角色ID（rel_type为1，即被授权项目，才会有项目角色）
   * @param relType {Number} 关联类型 0自己项目|1被授权项目
   * @param remark {String} 描述
   * @param updatedTime {Date} 更新时间
   */
  constructor(authCompanyId, clientName, companyId, createdTime, id, projectId, projectRole, relType, remark, updatedTime) {
    this.authCompanyId = authCompanyId;
    this.clientName = clientName;
    this.companyId = companyId;
    this.createdTime = createdTime;
    this.id = id;
    this.projectId = projectId;
    this.projectRole = projectRole;
    this.relType = relType;
    this.remark = remark;
    this.updatedTime = updatedTime;
  }


    static constructFromList(list) {
        let array = [new CompanyProjectRel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(CompanyProjectRel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>CompanyProjectRel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/CompanyProjectRel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/CompanyProjectRel} The populated <code>CompanyProjectRel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CompanyProjectRel();
      if (Reflect.has(data, 'authCompanyId'))
        obj.authCompanyId = ApiClient.convertToType(data['authCompanyId'], 'String');
      if (Reflect.has(data, 'clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'String');
      if (Reflect.has(data, 'projectRole'))
        obj.projectRole = ApiClient.convertToType(data['projectRole'], 'String');
      if (Reflect.has(data, 'relType'))
        obj.relType = ApiClient.convertToType(data['relType'], 'Number');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
    }
    return obj;
  }
}

/**
 * 项目为被授权项目时不为空，表示授权者企业的企业id
 * @member {String} authCompanyId
 */
CompanyProjectRel.prototype.authCompanyId = undefined;

/**
 * 客户名称
 * @member {String} clientName
 */
CompanyProjectRel.prototype.clientName = undefined;

/**
 * 公司ID
 * @member {String} companyId
 */
CompanyProjectRel.prototype.companyId = undefined;

/**
 * 创建时间
 * @member {Date} createdTime
 */
CompanyProjectRel.prototype.createdTime = undefined;

/**
 * id
 * @member {String} id
 */
CompanyProjectRel.prototype.id = undefined;

/**
 * 项目ID
 * @member {String} projectId
 */
CompanyProjectRel.prototype.projectId = undefined;

/**
 * 角色ID（rel_type为1，即被授权项目，才会有项目角色）
 * @member {String} projectRole
 */
CompanyProjectRel.prototype.projectRole = undefined;

/**
 * 关联类型 0自己项目|1被授权项目
 * @member {Number} relType
 */
CompanyProjectRel.prototype.relType = undefined;

/**
 * 描述
 * @member {String} remark
 */
CompanyProjectRel.prototype.remark = undefined;

/**
 * 更新时间
 * @member {Date} updatedTime
 */
CompanyProjectRel.prototype.updatedTime = undefined;

