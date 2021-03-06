/**
 * @desc webpack打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')

const getCookie = require('./cookie/getCookie')
const removeCookie = require('./cookie/removeCookie')
const setCookie = require('./cookie/setCookie')

const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')
const versionCompare = require('./device/versionCompare')

const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')
const windowResize = require('./dom/windowResize')
const inViewPort = require('./dom/inViewPort')

const debounce = require('./function/debounce')
const throttle = require('./function/throttle')

const getKeyName = require('./keycode/getKeyName')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')

const digitUppercase = require('./string/digitUppercase')

const isSupportWebP = require('./support/isSupportWebP')

const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')
const isSameDay = require('./time/isSameDay')
const formatFixedDate = require('./time/formatFixedDate')
const formatCount = require('./time/formatCount')
const formatPlayTime = require('./time/formatPlayTime')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')
const getUrlParam = require('./url/getUrlParam')
const deleteUrlParam = require('./url/deleteUrlParam')


module.exports = {
    arrayEqual,

    addClass,
    hasClass,
    removeClass,

    getCookie,
    removeCookie,
    setCookie,

    getOS,
    getExplore,
    versionCompare,

    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,
    windowResize,
    inViewPort,

    debounce,
    throttle,

    getKeyName,

    deepClone,
    isEmptyObject,

    randomColor,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,

    digitUppercase,

    isSupportWebP,

    formatPassTime,
    formatRemainTime,
    isSameDay,
    formatFixedDate,
    formatCount,

    parseQueryString,
    stringfyQueryString,
    getUrlParam,
    deleteUrlParam
}