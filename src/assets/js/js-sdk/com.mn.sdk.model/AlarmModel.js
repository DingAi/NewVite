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
 * The AlarmModel model module.
 * @module com.mn.sdk.model/AlarmModel
 * @version 1.0
 */
export class AlarmModel {
  /**
   * Constructs a new <code>AlarmModel</code>.
   * @alias module:com.mn.sdk.model/AlarmModel
   * @class
   */
  constructor() {
  }


    static constructFromList(list) {
        let array = [new AlarmModel()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(AlarmModel.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>AlarmModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/AlarmModel} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/AlarmModel} The populated <code>AlarmModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlarmModel();
    }
    return obj;
  }
}

