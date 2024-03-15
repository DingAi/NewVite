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
 * The MenuForm model module.
 * @module com.mn.sdk.model/MenuForm
 * @version 1.0
 */
export class MenuForm {
  /**
   * Constructs a new <code>MenuForm</code>.
   * 菜单表单信息
   * @alias module:com.mn.sdk.model/MenuForm
   * @class
   * @param businessType {Number} 1系统菜单，2项目菜单，3仅授权可见
   * @param certification {Number} 认证类型:0(super)用户的菜单，所有用户可用的菜单,2系统认证相关（需要通过权限控制的用户菜单）3 企业管理相关的菜单
   * @param customMenuType {Number} 菜单类型, 0: 默认vue页面, 1: 分类节点, 2: iframe嵌入, 3: 和平台代码混合开发, 4: 自定义, 开发者来维护菜单元素
   * @param enabled {Number} 是否启用菜单, 0:禁用, 1:启用
   * @param icon {String} 图标
   * @param id {String} 菜单id
   * @param moduleId {String} 菜单对应模块id
   * @param name {String} 菜单名称
   * @param parentId {String} 父id
   * @param remark {String} 备注
   * @param resourceValue {String} 资源值
   * @param sort {Number} 排序
   * @param source {Number} 来源, 1系统内置, 2开发者添加
   * @param type {Number} 类型,1目录,2权限,3按钮
   * @param unsafeMode {Number} 不安全模式, 开启后所有接口都可以调用, 0:不开启 1:开启
   * @param url {String} 前台页面url
   * @param urlPath {String} 前台path
   */
  constructor(businessType, certification, customMenuType, enabled, icon, id, moduleId, name, parentId, remark, resourceValue, sort, source, type, unsafeMode, url, urlPath) {
    this.businessType = businessType;
    this.certification = certification;
    this.customMenuType = customMenuType;
    this.enabled = enabled;
    this.icon = icon;
    this.id = id;
    this.moduleId = moduleId;
    this.name = name;
    this.parentId = parentId;
    this.remark = remark;
    this.resourceValue = resourceValue;
    this.sort = sort;
    this.source = source;
    this.type = type;
    this.unsafeMode = unsafeMode;
    this.url = url;
    this.urlPath = urlPath;
  }


    static constructFromList(list) {
        let array = [new MenuForm()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(MenuForm.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>MenuForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/MenuForm} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/MenuForm} The populated <code>MenuForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MenuForm();
      if (Reflect.has(data, 'businessType'))
        obj.businessType = ApiClient.convertToType(data['businessType'], 'Number');
      if (Reflect.has(data, 'certification'))
        obj.certification = ApiClient.convertToType(data['certification'], 'Number');
      if (Reflect.has(data, 'customMenuType'))
        obj.customMenuType = ApiClient.convertToType(data['customMenuType'], 'Number');
      if (Reflect.has(data, 'enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Number');
      if (Reflect.has(data, 'icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'moduleId'))
        obj.moduleId = ApiClient.convertToType(data['moduleId'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'resourceValue'))
        obj.resourceValue = ApiClient.convertToType(data['resourceValue'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
      if (Reflect.has(data, 'source'))
        obj.source = ApiClient.convertToType(data['source'], 'Number');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (Reflect.has(data, 'unsafeMode'))
        obj.unsafeMode = ApiClient.convertToType(data['unsafeMode'], 'Number');
      if (Reflect.has(data, 'url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (Reflect.has(data, 'urlPath'))
        obj.urlPath = ApiClient.convertToType(data['urlPath'], 'String');
    }
    return obj;
  }
}

/**
 * 1系统菜单，2项目菜单，3仅授权可见
 * @member {Number} businessType
 */
MenuForm.prototype.businessType = undefined;

/**
 * 认证类型:0(super)用户的菜单，所有用户可用的菜单,2系统认证相关（需要通过权限控制的用户菜单）3 企业管理相关的菜单
 * @member {Number} certification
 */
MenuForm.prototype.certification = undefined;

/**
 * 菜单类型, 0: 默认vue页面, 1: 分类节点, 2: iframe嵌入, 3: 和平台代码混合开发, 4: 自定义, 开发者来维护菜单元素
 * @member {Number} customMenuType
 */
MenuForm.prototype.customMenuType = undefined;

/**
 * 是否启用菜单, 0:禁用, 1:启用
 * @member {Number} enabled
 */
MenuForm.prototype.enabled = undefined;

/**
 * 图标
 * @member {String} icon
 */
MenuForm.prototype.icon = undefined;

/**
 * 菜单id
 * @member {String} id
 */
MenuForm.prototype.id = undefined;

/**
 * 菜单对应模块id
 * @member {String} moduleId
 */
MenuForm.prototype.moduleId = undefined;

/**
 * 菜单名称
 * @member {String} name
 */
MenuForm.prototype.name = undefined;

/**
 * 父id
 * @member {String} parentId
 */
MenuForm.prototype.parentId = undefined;

/**
 * 备注
 * @member {String} remark
 */
MenuForm.prototype.remark = undefined;

/**
 * 资源值
 * @member {String} resourceValue
 */
MenuForm.prototype.resourceValue = undefined;

/**
 * 排序
 * @member {Number} sort
 */
MenuForm.prototype.sort = undefined;

/**
 * 来源, 1系统内置, 2开发者添加
 * @member {Number} source
 */
MenuForm.prototype.source = undefined;

/**
 * 类型,1目录,2权限,3按钮
 * @member {Number} type
 */
MenuForm.prototype.type = undefined;

/**
 * 不安全模式, 开启后所有接口都可以调用, 0:不开启 1:开启
 * @member {Number} unsafeMode
 */
MenuForm.prototype.unsafeMode = undefined;

/**
 * 前台页面url
 * @member {String} url
 */
MenuForm.prototype.url = undefined;

/**
 * 前台path
 * @member {String} urlPath
 */
MenuForm.prototype.urlPath = undefined;


