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
import {AuthLog} from './AuthLog';

/**
 * The IPageAuthLog model module.
 * @module com.mn.sdk.model/IPageAuthLog
 * @version 1.0
 */
export class IPageAuthLog {
  /**
   * Constructs a new <code>IPageAuthLog</code>.
   * @alias module:com.mn.sdk.model/IPageAuthLog
   * @class
   * @param current {Number} 
   * @param hitCount {Boolean} 
   * @param pages {Number} 
   * @param records {Array.<module:com.mn.sdk.model/AuthLog>} 
   * @param searchCount {Boolean} 
   * @param size {Number} 
   * @param total {Number} 
   */
  constructor(current, hitCount, pages, records, searchCount, size, total) {
    this.current = current;
    this.hitCount = hitCount;
    this.pages = pages;
    this.records = records;
    this.searchCount = searchCount;
    this.size = size;
    this.total = total;
  }


    static constructFromList(list) {
        let array = [new IPageAuthLog()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(IPageAuthLog.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>IPageAuthLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/IPageAuthLog} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/IPageAuthLog} The populated <code>IPageAuthLog</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IPageAuthLog();
      if (Reflect.has(data, 'current'))
        obj.current = ApiClient.convertToType(data['current'], 'Number');
      if (Reflect.has(data, 'hitCount'))
        obj.hitCount = ApiClient.convertToType(data['hitCount'], 'Boolean');
      if (Reflect.has(data, 'pages'))
        obj.pages = ApiClient.convertToType(data['pages'], 'Number');
      if (Reflect.has(data, 'records'))
        obj.records = ApiClient.convertToType(data['records'], [AuthLog]);
      if (Reflect.has(data, 'searchCount'))
        obj.searchCount = ApiClient.convertToType(data['searchCount'], 'Boolean');
      if (Reflect.has(data, 'size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (Reflect.has(data, 'total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} current
 */
IPageAuthLog.prototype.current = undefined;

/**
 * @member {Boolean} hitCount
 */
IPageAuthLog.prototype.hitCount = undefined;

/**
 * @member {Number} pages
 */
IPageAuthLog.prototype.pages = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/AuthLog>} records
 */
IPageAuthLog.prototype.records = undefined;

/**
 * @member {Boolean} searchCount
 */
IPageAuthLog.prototype.searchCount = undefined;

/**
 * @member {Number} size
 */
IPageAuthLog.prototype.size = undefined;

/**
 * @member {Number} total
 */
IPageAuthLog.prototype.total = undefined;


