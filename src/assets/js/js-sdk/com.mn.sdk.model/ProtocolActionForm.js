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
 * The ProtocolActionForm model module.
 * @module com.mn.sdk.model/ProtocolActionForm
 * @version 1.0
 */
export class ProtocolActionForm {
  /**
   * Constructs a new <code>ProtocolActionForm</code>.
   * @alias module:com.mn.sdk.model/ProtocolActionForm
   * @class
   * @param customDesc {String} 
   * @param customId {String} 
   * @param customName {String} 
   * @param payload {String} 
   * @param protocolId {String} 
   * @param topic {String} 
   */
  constructor(customDesc, customId, customName, payload, protocolId, topic) {
    this.customDesc = customDesc;
    this.customId = customId;
    this.customName = customName;
    this.payload = payload;
    this.protocolId = protocolId;
    this.topic = topic;
  }


    static constructFromList(list) {
        let array = [new ProtocolActionForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProtocolActionForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProtocolActionForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProtocolActionForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProtocolActionForm} The populated <code>ProtocolActionForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProtocolActionForm();
      if (Reflect.has(data, 'customDesc'))
        obj.customDesc = ApiClient.convertToType(data['customDesc'], 'String');
      if (Reflect.has(data, 'customId'))
        obj.customId = ApiClient.convertToType(data['customId'], 'String');
      if (Reflect.has(data, 'customName'))
        obj.customName = ApiClient.convertToType(data['customName'], 'String');
      if (Reflect.has(data, 'payload'))
        obj.payload = ApiClient.convertToType(data['payload'], 'String');
      if (Reflect.has(data, 'protocolId'))
        obj.protocolId = ApiClient.convertToType(data['protocolId'], 'String');
      if (Reflect.has(data, 'topic'))
        obj.topic = ApiClient.convertToType(data['topic'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} customDesc
 */
ProtocolActionForm.prototype.customDesc = undefined;

/**
 * @member {String} customId
 */
ProtocolActionForm.prototype.customId = undefined;

/**
 * @member {String} customName
 */
ProtocolActionForm.prototype.customName = undefined;

/**
 * @member {String} payload
 */
ProtocolActionForm.prototype.payload = undefined;

/**
 * @member {String} protocolId
 */
ProtocolActionForm.prototype.protocolId = undefined;

/**
 * @member {String} topic
 */
ProtocolActionForm.prototype.topic = undefined;


