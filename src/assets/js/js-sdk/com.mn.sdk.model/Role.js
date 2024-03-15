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
 * The Role model module.
 * @module com.mn.sdk.model/Role
 * @version 1.0
 */
export class Role {
  /**
   * Constructs a new <code>Role</code>.
   * 系统角色
   * @alias module:com.mn.sdk.model/Role
   * @class
   * @param areaId {Array.<String>} 
   * @param companyId {String} 企业标识
   * @param controlTypeId {Array.<String>} 
   * @param createdBy {String} 创建人
   * @param createdTime {Date} 创建时间
   * @param def {Number} 是否默认:0否,1是
   * @param disabled {Boolean} 
   * @param id {String} 主键id
   * @param name {String} 角色名
   * @param remark {String} 备注信息
   * @param type {Number} 类型:0系统角色，1项目角色
   * @param updatedTime {Date} 修改时间
   * @param userId {String} 
   */
  constructor(areaId, companyId, controlTypeId, createdBy, createdTime, def, disabled, id, name, remark, type, updatedTime, userId) {
    this.areaId = areaId;
    this.companyId = companyId;
    this.controlTypeId = controlTypeId;
    this.createdBy = createdBy;
    this.createdTime = createdTime;
    this.def = def;
    this.disabled = disabled;
    this.id = id;
    this.name = name;
    this.remark = remark;
    this.type = type;
    this.updatedTime = updatedTime;
    this.userId = userId;
  }


    static constructFromList(list) {
        let array = [new Role()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(Role.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/Role} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/Role} The populated <code>Role</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Role();
      if (Reflect.has(data, 'areaId'))
        obj.areaId = ApiClient.convertToType(data['areaId'], ['String']);
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'controlTypeId'))
        obj.controlTypeId = ApiClient.convertToType(data['controlTypeId'], ['String']);
      if (Reflect.has(data, 'createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'def'))
        obj.def = ApiClient.convertToType(data['def'], 'Number');
      if (Reflect.has(data, 'disabled'))
        obj.disabled = ApiClient.convertToType(data['disabled'], 'Boolean');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
      if (Reflect.has(data, 'userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} areaId
 */
Role.prototype.areaId = undefined;

/**
 * 企业标识
 * @member {String} companyId
 */
Role.prototype.companyId = undefined;

/**
 * @member {Array.<String>} controlTypeId
 */
Role.prototype.controlTypeId = undefined;

/**
 * 创建人
 * @member {String} createdBy
 */
Role.prototype.createdBy = undefined;

/**
 * 创建时间
 * @member {Date} createdTime
 */
Role.prototype.createdTime = undefined;

/**
 * 是否默认:0否,1是
 * @member {Number} def
 */
Role.prototype.def = undefined;

/**
 * @member {Boolean} disabled
 */
Role.prototype.disabled = undefined;

/**
 * 主键id
 * @member {String} id
 */
Role.prototype.id = undefined;

/**
 * 角色名
 * @member {String} name
 */
Role.prototype.name = undefined;

/**
 * 备注信息
 * @member {String} remark
 */
Role.prototype.remark = undefined;

/**
 * 类型:0系统角色，1项目角色
 * @member {Number} type
 */
Role.prototype.type = undefined;

/**
 * 修改时间
 * @member {Date} updatedTime
 */
Role.prototype.updatedTime = undefined;

/**
 * @member {String} userId
 */
Role.prototype.userId = undefined;


