// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_bs",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000T","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",
currencyFormat:"\u00a4\u00a0#,##0.00",perMille:"\u2030",group:".",percentFormat:"#,##0%","decimalFormat-long":"000T",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":"ned pon uto sri \u010det pet sub".split(" "),"months-format-narrow":"jfmamjjasond".split(""),"field-second-relative+0":"now","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"dan u sedmici",
"dateFormatItem-yQQQ":"y QQQ","dateFormatItem-yMEd":"E, dd.MM.y.","field-wed-relative+0":"this Wednesday","field-wed-relative+1":"next Wednesday","dateFormatItem-GyMMMEd":"E, dd. MMM y. G","dateFormatItem-MMMEd":"E, dd. MMM",eraNarrow:["p. n. e.","n. e."],"field-tue-relative+-1":"last Tuesday","days-format-short":"ned pon uto sri \u010det pet sub".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"dd. MMMM y.","field-fri-relative+-1":"last Friday","field-wed-relative+-1":"last Wednesday",
"months-format-wide":"januar februar mart april maj juni juli august septembar oktobar novembar decembar".split(" "),"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"popodne","dateFormat-full":"EEEE, dd. MMMM y.","field-thu-relative+-1":"last Thursday","dateFormatItem-Md":"dd.MM.","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"dd.MM.y.","field-era":"era","dateFormatItem-yM":"MM.y.","months-standAlone-wide":"januar februar mart april maj juni juli august septembar oktobar novembar decembar".split(" "),
"timeFormat-short":"HH:mm","quarters-format-wide":["Prvi kvartal","Drugi kvartal","Tre\u0107i kvartal","\u010cetvrti kvartal"],"dateFormatItem-yQQQQ":"y QQQQ","timeFormat-long":"HH:mm:ss z","field-year":"godina","dateFormatItem-yMMM":"MMM y.","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"sat","months-format-abbr":"jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),"field-sat-relative+0":"this Saturday","field-sat-relative+1":"next Saturday","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})",
"field-day-relative+0":"danas","field-thu-relative+0":"this Thursday","field-day-relative+1":"sutra","field-thu-relative+1":"next Thursday","dateFormatItem-GyMMMd":"dd. MMM y. G","dateFormatItem-H":"HH","months-standAlone-abbr":"jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),"quarters-format-abbr":["K1","K2","K3","K4"],"quarters-standAlone-wide":["Prvi kvartal","Drugi kvartal","Tre\u0107i kvartal","\u010cetvrti kvartal"],"dateFormatItem-Gy":"y. G","dateFormatItem-M":"L","days-standAlone-wide":"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"HH:mm:ss","field-sun-relative+0":"this Sunday","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"next Sunday","quarters-standAlone-abbr":["K1","K2","K3","K4"],eraAbbr:["p. n. e.","n. e."],"field-minute":"minut","field-dayperiod":"prijepodne/poslijepodne","days-standAlone-abbr":"ned pon uto sri \u010det pet sub".split(" "),"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"ju\u010de",
"dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"h a","dateFormatItem-MMMd":"dd. MMM","dateFormatItem-MEd":"E, dd.MM.","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"this Friday","field-fri-relative+1":"next Friday","field-day":"dan","days-format-wide":"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),"field-zone":"zona","months-standAlone-narrow":"jfmamjjasond".split(""),"dateFormatItem-y":"y.","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})",
"field-year-relative+-1":"last year","field-month-relative+-1":"last month","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"hh:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":"ned pon uto sri \u010det pet sub".split(" "),eraNames:["Prije nove ere","Nove ere"],"dateFormatItem-yMMMd":"dd. MMM y.","days-format-narrow":"SMTWTFS".split(""),"field-month":"mjesec","days-standAlone-narrow":"SMTWTFS".split(""),"dateFormatItem-MMM":"LLL",
"field-tue-relative+0":"this Tuesday","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"next Tuesday","dayPeriods-format-wide-am":"prije podne","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"this Monday","field-mon-relative+1":"next Monday","dateFormat-short":"dd.MM.yy.","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"n",
"field-second":"sekund","field-sat-relative+-1":"last Saturday","dateFormatItem-yMMMEd":"E, dd. MMM y.","field-sun-relative+-1":"last Sunday","field-month-relative+0":"this month","field-month-relative+1":"next month","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E, dd.","field-week":"sedmica","dateFormat-medium":"dd. MMM. y.","field-week-relative+-1":"last week","field-year-relative+0":"this year","field-year-relative+1":"next year","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}",
"dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"hh:mm:ss a","dateFormatItem-GyMMM":"MMM y. G","field-mon-relative+-1":"last Monday","field-week-relative+0":"this week","field-week-relative+1":"next week","field-day-relative+-2":"prekju\u010de","field-day-relative+2":"prekosutra",_localized:{}}});