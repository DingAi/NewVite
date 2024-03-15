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
 * The ProtocolScriptForm model module.
 * @module com.mn.sdk.model/ProtocolScriptForm
 * @version 1.0
 */
export class ProtocolScriptForm {
  /**
   * Constructs a new <code>ProtocolScriptForm</code>.
   * @alias module:com.mn.sdk.model/ProtocolScriptForm
   * @class
   * @param protocolId {String} 
   * @param scriptData {String} 
   */
  constructor(protocolId, scriptData) {
    this.protocolId = protocolId;
    this.scriptData = scriptData;
  }


    static constructFromList(list) {
        let array = [new ProtocolScriptForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(ProtocolScriptForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>ProtocolScriptForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/ProtocolScriptForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/ProtocolScriptForm} The populated <code>ProtocolScriptForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProtocolScriptForm();
      if (Reflect.has(data, 'protocolId'))
        obj.protocolId = ApiClient.convertToType(data['protocolId'], 'String');
      if (Reflect.has(data, 'scriptData'))
        obj.scriptData = ApiClient.convertToType(data['scriptData'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} protocolId
 */
ProtocolScriptForm.prototype.protocolId = undefined;

/**
 * @member {String} scriptData
 */
ProtocolScriptForm.prototype.scriptData = undefined;


