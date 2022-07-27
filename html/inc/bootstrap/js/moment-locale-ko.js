//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ko = moment.defineLocale('ko', {
    months : '1��_2��_3��_4��_5��_6��_7��_8��_9��_10��_11��_12��'.split('_'),
    monthsShort : '1��_2��_3��_4��_5��_6��_7��_8��_9��_10��_11��_12��'.split('_'),
    weekdays : '�Ͽ���_������_ȭ����_������_�����_�ݿ���_�����'.split('_'),
    weekdaysShort : '��_��_ȭ_��_��_��_��'.split('_'),
    weekdaysMin : '��_��_ȭ_��_��_��_��'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'YYYY.MM.DD',
        LL : 'YYYY�� MMMM D��',
        LLL : 'YYYY�� MMMM D�� A h:mm',
        LLLL : 'YYYY�� MMMM D�� dddd A h:mm',
        l : 'YYYY.MM.DD',
        ll : 'YYYY�� MMMM D��',
        lll : 'YYYY�� MMMM D�� A h:mm',
        llll : 'YYYY�� MMMM D�� dddd A h:mm'
    },
    calendar : {
        sameDay : '���� LT',
        nextDay : '���� LT',
        nextWeek : 'dddd LT',
        lastDay : '���� LT',
        lastWeek : '������ dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ��',
        past : '%s ��',
        s : '�� ��',
        ss : '%d��',
        m : '1��',
        mm : '%d��',
        h : '�� �ð�',
        hh : '%d�ð�',
        d : '�Ϸ�',
        dd : '%d��',
        M : '�� ��',
        MM : '%d��',
        y : '�� ��',
        yy : '%d��'
    },
    dayOfMonthOrdinalParse : /\d{1,2}��/,
    ordinal : '%d��',
    meridiemParse : /����|����/,
    isPM : function (token) {
        return token === '����';
    },
    meridiem : function (hour, minute, isUpper) {
        return hour < 12 ? '����' : '����';
    }
});

return ko;

})));
