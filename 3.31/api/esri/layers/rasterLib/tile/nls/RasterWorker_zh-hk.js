// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_zh-hk",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000T","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"\u975e\u6578\u503c",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",
currencyFormat:"\u00a4#,##0.00;(\u00a4#,##0.00)",perMille:"\u2030",group:",",percentFormat:"#,##0%","decimalFormat-long":"000\u5146",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"E",$locale:"zh-hant-hk",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E a h:mm","days-standAlone-short":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),"months-format-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
"field-second-relative+0":"\u73fe\u5728","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"\u9031\u5929","dateFormatItem-yQQQ":"y\u5e74QQQ","dateFormatItem-yMEd":"y/M/d\uff08E\uff09","field-wed-relative+0":"\u672c\u9031\u4e09","field-wed-relative+1":"\u4e0b\u9031\u4e09","dateFormatItem-GyMMMEd":"Gy\u5e74M\u6708d\u65e5 E","dateFormatItem-MMMEd":"M\u6708d\u65e5E",eraNarrow:["\u897f\u5143\u524d","\u897f\u5143"],"field-tue-relative+-1":"\u4e0a\u9031\u4e8c","days-format-short":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"y\u5e74M\u6708d\u65e5","field-fri-relative+-1":"\u4e0a\u9031\u4e94","field-wed-relative+-1":"\u4e0a\u9031\u4e09","months-format-wide":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"\u4e0b\u5348","dateFormat-full":"y\u5e74M\u6708d\u65e5EEEE","field-thu-relative+-1":"\u4e0a\u9031\u56db","dateFormatItem-Md":"M/d",
"dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"\u4e2d\u5348","dateFormatItem-yMd":"y/M/d","field-era":"\u5e74\u4ee3","dateFormatItem-yM":"y\u5e74M\u6708","months-standAlone-wide":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"timeFormat-short":"ah:mm","quarters-format-wide":["\u7b2c1\u5b63","\u7b2c2\u5b63","\u7b2c3\u5b63","\u7b2c4\u5b63"],"dateFormatItem-yQQQQ":"y\u5e74QQQQ",
"timeFormat-long":"ah:mm:ss [z]","field-year":"\u5e74","dateFormatItem-yMMM":"y\u5e74M\u6708","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"\u5c0f\u6642","months-format-abbr":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"field-sat-relative+0":"\u672c\u9031\u516d","field-sat-relative+1":"\u4e0b\u9031\u516d","timeFormat-full":"ah:mm:ss [zzzz]","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"\u4eca\u5929",
"field-thu-relative+0":"\u672c\u9031\u56db","field-day-relative+1":"\u660e\u5929","field-thu-relative+1":"\u4e0b\u9031\u56db","dateFormatItem-GyMMMd":"G y \u5e74 M \u6708 d \u65e5","dateFormatItem-H":"H\u6642","months-standAlone-abbr":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"quarters-format-abbr":["\u7b2c1\u5b63","\u7b2c2\u5b63","\u7b2c3\u5b63","\u7b2c4\u5b63"],"quarters-standAlone-wide":["\u7b2c1\u5b63","\u7b2c2\u5b63","\u7b2c3\u5b63",
"\u7b2c4\u5b63"],"dateFormatItem-Gy":"G y \u5e74","dateFormatItem-M":"M\u6708","days-standAlone-wide":"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"ah:mm:ss","field-sun-relative+0":"\u672c\u9031\u65e5","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"\u4e0b\u9031\u65e5","quarters-standAlone-abbr":["\u7b2c1\u5b63","\u7b2c2\u5b63","\u7b2c3\u5b63",
"\u7b2c4\u5b63"],eraAbbr:["\u897f\u5143\u524d","\u897f\u5143"],"field-minute":"\u5206\u9418","field-dayperiod":"\u4e0a\u5348/\u4e0b\u5348","days-standAlone-abbr":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),"dateFormatItem-d":"d\u65e5","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"\u6628\u5929","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"\u4e0a\u5348","dateFormatItem-h":"ah\u6642",
"dateFormatItem-MMMd":"M\u6708d\u65e5","dateFormatItem-MEd":"M/d\uff08E\uff09","dateTimeFormat-full":"{1}{0}","field-fri-relative+0":"\u672c\u9031\u4e94","field-fri-relative+1":"\u4e0b\u9031\u4e94","field-day":"\u65e5","days-format-wide":"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),"field-zone":"\u6642\u5340","months-standAlone-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"dateFormatItem-y":"y\u5e74",
"dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"\u53bb\u5e74","field-month-relative+-1":"\u4e0a\u500b\u6708","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"ah:mm","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),eraNames:["\u897f\u5143\u524d","\u897f\u5143"],"dateFormatItem-yMMMd":"y\u5e74M\u6708d\u65e5",
"days-format-narrow":"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),"field-month":"\u6708","days-standAlone-narrow":"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),"dateFormatItem-MMM":"LLL","field-tue-relative+0":"\u672c\u9031\u4e8c","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"\u4e0b\u9031\u4e8c","dayPeriods-format-wide-am":"\u4e0a\u5348","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm",
"field-mon-relative+0":"\u672c\u9031\u4e00","field-mon-relative+1":"\u4e0b\u9031\u4e00","dateFormat-short":"y/M/d","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E a h:mm:ss","dayPeriods-format-narrow-noon":"\u4e2d\u5348","field-second":"\u79d2","field-sat-relative+-1":"\u4e0a\u9031\u516d","dateFormatItem-yMMMEd":"y\u5e74M\u6708d\u65e5E","field-sun-relative+-1":"\u4e0a\u9031\u65e5","field-month-relative+0":"\u672c\u6708","field-month-relative+1":"\u4e0b\u500b\u6708","dateTimeFormats-appendItem-Timezone":"{0} {1}",
"dateFormatItem-Ed":"d\u65e5\uff08E\uff09","field-week":"\u9031","dateFormat-medium":"y\u5e74M\u6708d\u65e5","field-week-relative+-1":"\u4e0a\u9031","field-year-relative+0":"\u4eca\u5e74","field-year-relative+1":"\u660e\u5e74","dayPeriods-format-narrow-pm":"\u4e0b\u5348","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"ah:mm:ss","dateFormatItem-GyMMM":"G y \u5e74 M \u6708","field-mon-relative+-1":"\u4e0a\u9031\u4e00","field-week-relative+0":"\u672c\u9031","field-week-relative+1":"\u4e0b\u9031",
"dateFormatItem-yMM":"y-MM","dayPeriods-format-wide-earlyMorning":"\u6e05\u6668","dayPeriods-format-wide-morning":"\u4e0a\u5348","dayPeriods-format-narrow-midDay":"\u4e2d\u5348","dateFormatItem-MMdd":"MM/dd","dayPeriods-format-narrow-morning":"\u4e0a\u5348","field-day-relative+2":"\u5f8c\u5929","dayPeriods-format-wide-night":"\u665a\u4e0a","field-day-relative+-2":"\u524d\u5929","dayPeriods-format-wide-midDay":"\u4e2d\u5348","dateFormatItem-yMMMM":"y\u5e74M\u6708","dayPeriods-format-narrow-night":"\u665a\u4e0a",
"dayPeriods-format-narrow-weeHours":"\u51cc\u6668","dayPeriods-format-narrow-earlyMorning":"\u6e05\u6668","dayPeriods-format-wide-weeHours":"\u51cc\u6668","dateFormatItem-MMMMdd":"M\u6708dd\u65e5","dayPeriods-format-wide-afternoon":"\u4e0b\u5348","dayPeriods-format-narrow-afternoon":"\u4e0b\u5348",$locale:"zh-hant-hk",_localized:{}}});