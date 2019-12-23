// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_tr",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000\u00a0Tn","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",
currencyFormat:"#,##0.00\u00a0\u00a4;(#,##0.00\u00a0\u00a4)",perMille:"\u2030",group:".",percentFormat:"%#,##0","decimalFormat-long":"000 trilyon",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E a h:mm","days-standAlone-short":"Pa Pt Sa \u00c7a Pe Cu Ct".split(" "),"months-format-narrow":"O\u015eMNMHTAEEKA".split(""),"field-second-relative+0":"\u015fimdi","quarters-standAlone-narrow":["1.",
"2.","3.","4."],"field-weekday":"Haftan\u0131n G\u00fcn\u00fc","dateFormatItem-yQQQ":"y/QQQ","dateFormatItem-yMEd":"dd.MM.y E","field-wed-relative+0":"bu \u00e7ar\u015famba","field-wed-relative+1":"gelecek \u00e7ar\u015famba","dateFormatItem-GyMMMEd":"G d MMM y E","dateFormatItem-MMMEd":"d MMMM E",eraNarrow:["M\u00d6","MS"],"field-tue-relative+-1":"ge\u00e7en sal\u0131","days-format-short":"Pa Pt Sa \u00c7a Pe Cu Ct".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y",
"field-fri-relative+-1":"ge\u00e7en cuma","field-wed-relative+-1":"ge\u00e7en \u00e7ar\u015famba","months-format-wide":"Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"\u00d6S","dateFormat-full":"d MMMM y EEEE","field-thu-relative+-1":"ge\u00e7en per\u015fembe","dateFormatItem-Md":"dd/MM","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})",
"dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"dd.MM.y","field-era":"Miladi D\u00f6nem","dateFormatItem-yM":"MM/y","months-standAlone-wide":"Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),"timeFormat-short":"HH:mm","quarters-format-wide":["1. \u00e7eyrek","2. \u00e7eyrek","3. \u00e7eyrek","4. \u00e7eyrek"],"dateFormatItem-yQQQQ":"y/QQQQ","timeFormat-long":"HH:mm:ss z","field-year":"Y\u0131l","dateFormatItem-yMMM":"MMM y",
"dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Saat","months-format-abbr":"Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),"field-sat-relative+0":"bu cumartesi","field-sat-relative+1":"gelecek cumartesi","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"bug\u00fcn","field-thu-relative+0":"bu per\u015fembe","field-day-relative+1":"yar\u0131n","field-thu-relative+1":"gelecek per\u015fembe","dateFormatItem-GyMMMd":"G dd MMM y",
"dateFormatItem-H":"HH","months-standAlone-abbr":"Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),"quarters-format-abbr":["\u00c71","\u00c72","\u00c73","\u00c74"],"quarters-standAlone-wide":["1. \u00e7eyrek","2. \u00e7eyrek","3. \u00e7eyrek","4. \u00e7eyrek"],"dateFormatItem-Gy":"G y","dateFormatItem-M":"L","days-standAlone-wide":"Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"HH:mm:ss",
"field-sun-relative+0":"bu pazar","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"gelecek pazar","quarters-standAlone-abbr":["\u00c71","\u00c72","\u00c73","\u00c74"],eraAbbr:["M\u00d6","MS"],"field-minute":"Dakika","field-dayperiod":"\u00d6\u00d6/\u00d6S","days-standAlone-abbr":"Paz Pzt Sal \u00c7ar Per Cum Cmt".split(" "),"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1.","2.","3.","4."],"field-day-relative+-1":"d\u00fcn","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a",
"dateFormatItem-h":"a h","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"dd/MM E","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"bu cuma","field-fri-relative+1":"gelecek cuma","field-day":"G\u00fcn","days-format-wide":"Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),"field-zone":"Saat Dilimi","months-standAlone-narrow":"O\u015eMNMHTAEEKA".split(""),"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"ge\u00e7en y\u0131l",
"field-month-relative+-1":"ge\u00e7en ay","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"a h:mm","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":"Paz Pzt Sal \u00c7ar Per Cum Cmt".split(" "),eraNames:["Milattan \u00d6nce","Milattan Sonra"],"dateFormatItem-yMMMd":"dd MMM y","days-format-narrow":"PPS\u00c7PCC".split(""),"field-month":"Ay","days-standAlone-narrow":"PPS\u00c7PCC".split(""),"dateFormatItem-MMM":"LLL","field-tue-relative+0":"bu sal\u0131",
"dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"gelecek sal\u0131","dayPeriods-format-wide-am":"\u00d6\u00d6","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"bu pazartesi","field-mon-relative+1":"gelecek pazartesi","dateFormat-short":"d.MM.y","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E a h:mm:ss","dayPeriods-format-narrow-noon":"n","field-second":"Saniye",
"field-sat-relative+-1":"ge\u00e7en cumartesi","dateFormatItem-yMMMEd":"d MMM y E","field-sun-relative+-1":"ge\u00e7en pazar","field-month-relative+0":"bu ay","field-month-relative+1":"gelecek ay","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"d E","field-week":"Hafta","dateFormat-medium":"d MMM y","field-week-relative+-1":"ge\u00e7en hafta","field-year-relative+0":"bu y\u0131l","field-year-relative+1":"gelecek y\u0131l","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}",
"dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"a h:mm:ss","dateFormatItem-GyMMM":"G MMM y","field-mon-relative+-1":"ge\u00e7en pazartesi","field-week-relative+0":"bu hafta","field-week-relative+1":"gelecek hafta","dateFormatItem-yMM":"MM.y","field-day-relative+2":"\u00f6b\u00fcr g\u00fcn","dateFormatItem-MMMMd":"dd MMMM","field-day-relative+-2":"evvelsi g\u00fcn","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-MMMMEd":"dd MMMM E","dateFormatItem-mmss":"mm:ss",_localized:{}}});