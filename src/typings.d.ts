import React from "react";

declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;

/**
 * 分页信息
 */
interface PageInfo<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}

/**
 * 分页请求
 */
interface PageRequest {
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend';
}

/**
 * 删除请求
 */
interface DeleteRequest {
  id: string | number;
}

/**
 * 返回封装
 */
interface BaseResponse<T> {
  code: number;
  data: T;
  message?: string;
}

/**
 * 全局初始化状态
 */
interface InitialState {
  currentUser?: API.LoginUserVO;
  token?: string;
}

interface CryptoConfig
{
  base64Key: string; // BASE64编码的密钥
  base64Iv: string; // BASE64编码的初始化向量
  mode?: CryptoJS.mode.Mode;
}

interface ColumnsParams<T>
{
  setCurrentRow?: React.Dispatch<React.SetStateAction<T>>;
  setUpdateModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete?: (record: T, actionRef ?: React.Ref<any>) => void;
}


interface OptionProps<T>
{
  value: T;
  label: string;
}

type OptionArray<T> = OptionProps<T>[];
