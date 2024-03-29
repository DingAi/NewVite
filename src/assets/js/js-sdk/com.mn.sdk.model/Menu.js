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
import {MenuInterfaceRel} from './MenuInterfaceRel';

/**
 * The Menu model module.
 * @module com.mn.sdk.model/Menu
 * @version 1.0
 */
export class Menu {
  /**
   * Constructs a new <code>Menu</code>.
   * 菜单
   * @alias module:com.mn.sdk.model/Menu
   * @class
   * @param businessType {Number} 1系统菜单，2项目菜单，3仅授权可见
   * @param certification {Number} 认证类型:0(super)用户的菜单，所有用户可用的菜单,2系统认证相关（需要通过权限控制的用户菜单）3 企业管理相关的菜单
   * @param children {Array.<module:com.mn.sdk.model/Menu>} 
   * @param createdBy {String} 创建人
   * @param createdTime {Date} 创建时间
   * @param customMenuType {Number} 菜单类型, 0: 默认vue页面, 1: 分类节点, 2: iframe嵌入, 3: 和平台代码混合开发, 4: 自定义, 开发者来维护菜单元素
   * @param disabled {Boolean} 
   * @param enabled {Number} 是否启用菜单, 0:禁用, 1:启用
   * @param icon {String} 图标
   * @param id {String} 主键
   * @param interfaceIds {Array.<String>} 
   * @param interfaceRels {Array.<module:com.mn.sdk.model/MenuInterfaceRel>} 
   * @param menuIds {Array.<String>} 
   * @param menuOrInterface {String} 
   * @param moduleId {String} 菜单对应模块id
   * @param name {String} 菜单名称
   * @param parentId {String} 父标识
   * @param remark {String} 备注
   * @param resourceTitle {String} 
   * @param resourceValue {String} 资源值
   * @param roleCode {String} 
   * @param roleId {String} 
   * @param sort {Number} 排序
   * @param source {Number} 来源, 1系统内置, 2开发者添加
   * @param type {Number} 类型,1目录,2权限,3按钮
   * @param unsafeMode {Number} 不安全模式, 开启后所有接口都可以调用, 0:不开启 1:开启
   * @param updatedTime {Date} 修改时间
   * @param url {String} 前台页面url
   * @param urlPath {String} 前台path
   */
  constructor(businessType, certification, children, createdBy, createdTime, customMenuType, disabled, enabled, icon, id, interfaceIds, interfaceRels, menuIds, menuOrInterface, moduleId, name, parentId, remark, resourceTitle, resourceValue, roleCode, roleId, sort, source, type, unsafeMode, updatedTime, url, urlPath) {
    this.businessType = businessType;
    this.certification = certification;
    this.children = children;
    this.createdBy = createdBy;
    this.createdTime = createdTime;
    this.customMenuType = customMenuType;
    this.disabled = disabled;
    this.enabled = enabled;
    this.icon = icon;
    this.id = id;
    this.interfaceIds = interfaceIds;
    this.interfaceRels = interfaceRels;
    this.menuIds = menuIds;
    this.menuOrInterface = menuOrInterface;
    this.moduleId = moduleId;
    this.name = name;
    this.parentId = parentId;
    this.remark = remark;
    this.resourceTitle = resourceTitle;
    this.resourceValue = resourceValue;
    this.roleCode = roleCode;
    this.roleId = roleId;
    this.sort = sort;
    this.source = source;
    this.type = type;
    this.unsafeMode = unsafeMode;
    this.updatedTime = updatedTime;
    this.url = url;
    this.urlPath = urlPath;
  }


    static constructFromList(list) {
        let array = [new Menu()];
        array.splice(0, array.length);

        if (!(list instanceof Array)) {
            return array;
        }

        for (const obj of list) {
            array.push(Menu.constructFromObject(obj));
        }

        return array;
    }


  /**
   * Constructs a <code>Menu</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.mn.sdk.model/Menu} obj Optional instance to populate.
   * @return {module:com.mn.sdk.model/Menu} The populated <code>Menu</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Menu();
      if (Reflect.has(data, 'businessType'))
        obj.businessType = ApiClient.convertToType(data['businessType'], 'Number');
      if (Reflect.has(data, 'certification'))
        obj.certification = ApiClient.convertToType(data['certification'], 'Number');
      if (Reflect.has(data, 'children'))
        obj.children = ApiClient.convertToType(data['children'], [Menu]);
      if (Reflect.has(data, 'createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (Reflect.has(data, 'createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'Date');
      if (Reflect.has(data, 'customMenuType'))
        obj.customMenuType = ApiClient.convertToType(data['customMenuType'], 'Number');
      if (Reflect.has(data, 'disabled'))
        obj.disabled = ApiClient.convertToType(data['disabled'], 'Boolean');
      if (Reflect.has(data, 'enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Number');
      if (Reflect.has(data, 'icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'String');
      if (Reflect.has(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (Reflect.has(data, 'interfaceIds'))
        obj.interfaceIds = ApiClient.convertToType(data['interfaceIds'], ['String']);
      if (Reflect.has(data, 'interfaceRels'))
        obj.interfaceRels = ApiClient.convertToType(data['interfaceRels'], [MenuInterfaceRel]);
      if (Reflect.has(data, 'menuIds'))
        obj.menuIds = ApiClient.convertToType(data['menuIds'], ['String']);
      if (Reflect.has(data, 'menuOrInterface'))
        obj.menuOrInterface = ApiClient.convertToType(data['menuOrInterface'], 'String');
      if (Reflect.has(data, 'moduleId'))
        obj.moduleId = ApiClient.convertToType(data['moduleId'], 'String');
      if (Reflect.has(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Reflect.has(data, 'parentId'))
        obj.parentId = ApiClient.convertToType(data['parentId'], 'String');
      if (Reflect.has(data, 'remark'))
        obj.remark = ApiClient.convertToType(data['remark'], 'String');
      if (Reflect.has(data, 'resourceTitle'))
        obj.resourceTitle = ApiClient.convertToType(data['resourceTitle'], 'String');
      if (Reflect.has(data, 'resourceValue'))
        obj.resourceValue = ApiClient.convertToType(data['resourceValue'], 'String');
      if (Reflect.has(data, 'roleCode'))
        obj.roleCode = ApiClient.convertToType(data['roleCode'], 'String');
      if (Reflect.has(data, 'roleId'))
        obj.roleId = ApiClient.convertToType(data['roleId'], 'String');
      if (Reflect.has(data, 'sort'))
        obj.sort = ApiClient.convertToType(data['sort'], 'Number');
      if (Reflect.has(data, 'source'))
        obj.source = ApiClient.convertToType(data['source'], 'Number');
      if (Reflect.has(data, 'type'))
        obj.type = ApiClient.convertToType(data['type'], 'Number');
      if (Reflect.has(data, 'unsafeMode'))
        obj.unsafeMode = ApiClient.convertToType(data['unsafeMode'], 'Number');
      if (Reflect.has(data, 'updatedTime'))
        obj.updatedTime = ApiClient.convertToType(data['updatedTime'], 'Date');
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
Menu.prototype.businessType = undefined;

/**
 * 认证类型:0(super)用户的菜单，所有用户可用的菜单,2系统认证相关（需要通过权限控制的用户菜单）3 企业管理相关的菜单
 * @member {Number} certification
 */
Menu.prototype.certification = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/Menu>} children
 */
Menu.prototype.children = undefined;

/**
 * 创建人
 * @member {String} createdBy
 */
Menu.prototype.createdBy = undefined;

/**
 * 创建时间
 * @member {Date} createdTime
 */
Menu.prototype.createdTime = undefined;

/**
 * 菜单类型, 0: 默认vue页面, 1: 分类节点, 2: iframe嵌入, 3: 和平台代码混合开发, 4: 自定义, 开发者来维护菜单元素
 * @member {Number} customMenuType
 */
Menu.prototype.customMenuType = undefined;

/**
 * @member {Boolean} disabled
 */
Menu.prototype.disabled = undefined;

/**
 * 是否启用菜单, 0:禁用, 1:启用
 * @member {Number} enabled
 */
Menu.prototype.enabled = undefined;

/**
 * 图标
 * @member {String} icon
 */
Menu.prototype.icon = undefined;

/**
 * 主键
 * @member {String} id
 */
Menu.prototype.id = undefined;

/**
 * @member {Array.<String>} interfaceIds
 */
Menu.prototype.interfaceIds = undefined;

/**
 * @member {Array.<module:com.mn.sdk.model/MenuInterfaceRel>} interfaceRels
 */
Menu.prototype.interfaceRels = undefined;

/**
 * @member {Array.<String>} menuIds
 */
Menu.prototype.menuIds = undefined;

/**
 * @member {String} menuOrInterface
 */
Menu.prototype.menuOrInterface = undefined;

/**
 * 菜单对应模块id
 * @member {String} moduleId
 */
Menu.prototype.moduleId = undefined;

/**
 * 菜单名称
 * @member {String} name
 */
Menu.prototype.name = undefined;

/**
 * 父标识
 * @member {String} parentId
 */
Menu.prototype.parentId = undefined;

/**
 * 备注
 * @member {String} remark
 */
Menu.prototype.remark = undefined;

/**
 * @member {String} resourceTitle
 */
Menu.prototype.resourceTitle = undefined;

/**
 * 资源值
 * @member {String} resourceValue
 */
Menu.prototype.resourceValue = undefined;

/**
 * @member {String} roleCode
 */
Menu.prototype.roleCode = undefined;

/**
 * @member {String} roleId
 */
Menu.prototype.roleId = undefined;

/**
 * 排序
 * @member {Number} sort
 */
Menu.prototype.sort = undefined;

/**
 * 来源, 1系统内置, 2开发者添加
 * @member {Number} source
 */
Menu.prototype.source = undefined;

/**
 * 类型,1目录,2权限,3按钮
 * @member {Number} type
 */
Menu.prototype.type = undefined;

/**
 * 不安全模式, 开启后所有接口都可以调用, 0:不开启 1:开启
 * @member {Number} unsafeMode
 */
Menu.prototype.unsafeMode = undefined;

/**
 * 修改时间
 * @member {Date} updatedTime
 */
Menu.prototype.updatedTime = undefined;

/**
 * 前台页面url
 * @member {String} url
 */
Menu.prototype.url = undefined;

/**
 * 前台path
 * @member {String} urlPath
 */
Menu.prototype.urlPath = undefined;


