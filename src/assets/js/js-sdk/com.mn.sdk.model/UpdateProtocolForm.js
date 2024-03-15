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
 * The UpdateProtocolForm model module.
 * @module com.mn.sdk.model/UpdateProtocolForm
 * @version 1.0
 */
export class UpdateProtocolForm {
  /**
   * Constructs a new <code>UpdateProtocolForm</code>.
   * @alias module:com.mn.sdk.model/UpdateProtocolForm
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param remark {String} 
   */
  constructor(id, name, remark) {
    this.id = id;
    this.name = name;
    this.remark = remark;
  }


    static constructFromList(list) {
        let array = [new UpdateProtocolForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(UpdateProtocolForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>UpdateProtocolForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/UpdateProtocolForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/UpdateProtocolForm} The populated <code>UpdateProtocolForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateProtocolForm();
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
 * @member {String} id
 */
UpdateProtocolForm.prototype.id = undefined;

/**
 * @member {String} name
 */
UpdateProtocolForm.prototype.name = undefined;

/**
 * @member {String} remark
 */
UpdateProtocolForm.prototype.remark = undefined;


