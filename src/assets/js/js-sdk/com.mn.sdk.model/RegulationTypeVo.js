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
 * The RegulationTypeVo model module.
 * @module com.mn.sdk.model/RegulationTypeVo
 * @version 1.0
 */
export class RegulationTypeVo {
  /**
   * Constructs a new <code>RegulationTypeVo</code>.
   * 推送消息类型
   * @alias module:com.mn.sdk.model/RegulationTypeVo
   * @class
   * @param flag {Boolean} 推送管理标识
   * @param messageTypeId {String} 消息类型id
   * @param name {String} 消息类型名称
   * @param pushway {String} 消息推送方式
   * @param subject {String} 消息主题
   */
  constructor(flag, messageTypeId, name, pushway, subject) {
    this.flag = flag;
    this.messageTypeId = messageTypeId;
    this.name = name;
    this.pushway = pushway;
    this.subject = subject;
  }


    static constructFromList(list) {
        let array = [new RegulationTypeVo()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(RegulationTypeVo.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>RegulationTypeVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/RegulationTypeVo} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/RegulationTypeVo} The populated <code>RegulationTypeVo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RegulationTypeVo();
      if (Reflect.has(data, 'flag'))
        obj.flag = ApiClient.convertToType(data['flag'], 'Boolean');
      if (Reflect.has(data, 'messageTypeId'))
        obj.messageTypeId = ApiClient.convertToType(data['messageTypeId'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'pushway'))
        obj.pushway = ApiClient.convertToType(data['pushway'], 'String');
      if (Reflect.has(data, 'subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
    }
    return obj;
  }
}

/**
 * 推送管理标识
 * @member {Boolean} flag
 */
RegulationTypeVo.prototype.flag = undefined;

/**
 * 消息类型id
 * @member {String} messageTypeId
 */
RegulationTypeVo.prototype.messageTypeId = undefined;

/**
 * 消息类型名称
 * @member {String} name
 */
RegulationTypeVo.prototype.name = undefined;

/**
 * 消息推送方式
 * @member {String} pushway
 */
RegulationTypeVo.prototype.pushway = undefined;

/**
 * 消息主题
 * @member {String} subject
 */
RegulationTypeVo.prototype.subject = undefined;


