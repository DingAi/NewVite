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
import {MessagePushRecord} from './MessagePushRecord';

/**
 * The IPageMessagePushRecord model module.
 * @module com.mn.sdk.model/IPageMessagePushRecord
 * @version 1.0
 */
export class IPageMessagePushRecord {
  /**
   * Constructs a new <code>IPageMessagePushRecord</code>.
   * @alias module:com.mn.sdk.model/IPageMessagePushRecord
   * @class
   * @param current {Number} 
   * @param hitCount {Boolean} 
   * @param pages {Number} 
   * @param records {Array.<module:com.mn.sdk.model/MessagePushRecord>} 
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
        let array = [new IPageMessagePushRecord()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(IPageMessagePushRecord.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>IPageMessagePushRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/IPageMessagePushRecord} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/IPageMessagePushRecord} The populated <code>IPageMessagePushRecord</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IPageMessagePushRecord();
      if (Reflect.has(data, 'current'))
        obj.current = ApiClient.convertToType(data['current'], 'Number');
      if (Reflect.has(data, 'hitCount'))
        obj.hitCount = ApiClient.convertToType(data['hitCount'], 'Boolean');
      if (Reflect.has(data, 'pages'))
        obj.pages = ApiClient.convertToType(data['pages'], 'Number');
      if (Reflect.has(data, 'records'))
        obj.records = ApiClient.convertToType(data['records'], [MessagePushRecord]);
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
IPageMessagePushRecord.prototype.current = undefined;

/**
 * @member {Boolean} hitCount
 */
IPageMessagePushRecord.prototype.hitCount = undefined;

/**
 * @member {Number} pages
 */
IPageMessagePushRecord.prototype.pages = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/MessagePushRecord>} records
 */
IPageMessagePushRecord.prototype.records = undefined;

/**
 * @member {Boolean} searchCount
 */
IPageMessagePushRecord.prototype.searchCount = undefined;

/**
 * @member {Number} size
 */
IPageMessagePushRecord.prototype.size = undefined;

/**
 * @member {Number} total
 */
IPageMessagePushRecord.prototype.total = undefined;


