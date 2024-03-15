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
 * The TemplateVo model module.
 * @module com.mn.sdk.model/TemplateVo
 * @version 1.0
 */
export class TemplateVo {
  /**
   * Constructs a new <code>TemplateVo</code>.
   * 模板返回Vo类
   * @alias module:com.mn.sdk.model/TemplateVo
   * @class
   * @param companyId {String} 企业Id
   * @param createdTime {Date} 模板创建时间 用于排序
   * @param deviceFrom {String} 模板设备来源  0：内部的设备，1：第三方的设备
   * @param id {String} 模板Id
   * @param name {String} 模板名称
   * @param remark {String} 模板备注
   */
  constructor(companyId, createdTime, deviceFrom, id, name, remark) {
    this.companyId = companyId;
    this.createdTime = createdTime;
    this.deviceFrom = deviceFrom;
    this.id = id;
    this.name = name;
    this.remark = remark;
  }


    static constructFromList(list) {
        let array = [new TemplateVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(TemplateVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>TemplateVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/TemplateVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/TemplateVo} The populated <code>TemplateVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateVo();
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'deviceFrom'))
        obj.deviceFrom = ApiClient.convertToType(data['deviceFrom'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
    }
    return obj;
  }
}

/**
 * 企业Id
 * @member {String} companyId
 */
TemplateVo.prototype.companyId = undefined;

/**
 * 模板创建时间 用于排序
 * @member {Date} createdTime
 */
TemplateVo.prototype.createdTime = undefined;

/**
 * 模板设备来源  0：内部的设备，1：第三方的设备
 * @member {String} deviceFrom
 */
TemplateVo.prototype.deviceFrom = undefined;

/**
 * 模板Id
 * @member {String} id
 */
TemplateVo.prototype.id = undefined;

/**
 * 模板名称
 * @member {String} name
 */
TemplateVo.prototype.name = undefined;

/**
 * 模板备注
 * @member {String} remark
 */
TemplateVo.prototype.remark = undefined;


