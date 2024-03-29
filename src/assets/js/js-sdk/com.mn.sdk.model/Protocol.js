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
 * The Protocol model module.
 * @module com.mn.sdk.model/Protocol
 * @version 1.0
 */
export class Protocol {
  /**
   * Constructs a new <code>Protocol</code>.
   * @alias module:com.mn.sdk.model/Protocol
   * @class
   * @param companyId {String} 
   * @param createdBy {String} 
   * @param createdTime {String} 
   * @param disabledReason {String} 
   * @param disabledState {String} 
   * @param id {String} 
   * @param name {String} 
   * @param remark {String} 
   * @param source {String} 
   * @param type {String} 
   */
  constructor(companyId, createdBy, createdTime, disabledReason, disabledState, id, name, remark, source, type) {
    this.companyId = companyId;
    this.createdBy = createdBy;
    this.createdTime = createdTime;
    this.disabledReason = disabledReason;
    this.disabledState = disabledState;
    this.id = id;
    this.name = name;
    this.remark = remark;
    this.source = source;
    this.type = type;
  }


    static constructFromList(list) {
        let array = [new Protocol()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(Protocol.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>Protocol</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/Protocol} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/Protocol} The populated <code>Protocol</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Protocol();
      if (Reflect.has(data, 'companyId'))
        obj.companyId = ApiClient.convertToType(data['companyId'], 'String');
      if (Reflect.has(data, 'createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'String');
      if (Reflect.has(data, 'disabledReason'))
        obj.disabledReason = ApiClient.convertToType(data['disabledReason'], 'String');
      if (Reflect.has(data, 'disabledState'))
        obj.disabledState = ApiClient.convertToType(data['disabledState'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} companyId
 */
Protocol.prototype.companyId = undefined;

/**
 * @member {String} createdBy
 */
Protocol.prototype.createdBy = undefined;

/**
 * @member {String} createdTime
 */
Protocol.prototype.createdTime = undefined;

/**
 * @member {String} disabledReason
 */
Protocol.prototype.disabledReason = undefined;

/**
 * @member {String} disabledState
 */
Protocol.prototype.disabledState = undefined;

/**
 * @member {String} id
 */
Protocol.prototype.id = undefined;

/**
 * @member {String} name
 */
Protocol.prototype.name = undefined;

/**
 * @member {String} remark
 */
Protocol.prototype.remark = undefined;

/**
 * @member {String} source
 */
Protocol.prototype.source = undefined;

/**
 * @member {String} type
 */
Protocol.prototype.type = undefined;


