(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2514],{32514:()=>{ace.define("ace/mode/sql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,i,o){"use strict";var n=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,r=function(){var t="select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant",l="true|false",s="avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",u="int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer",g=this.createKeywordMapper({"support.function":s,keyword:t,"constant.language":l,"storage.type":u},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"string",regex:"`.*?`"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:g,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};n.inherits(r,a),i.SqlHighlightRules=r}),ace.define("ace/mode/sql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sql_highlight_rules"],function(e,i,o){"use strict";var n=e("../lib/oop"),a=e("./text").Mode,r=e("./sql_highlight_rules").SqlHighlightRules,t=function(){this.HighlightRules=r,this.$behaviour=this.$defaultBehaviour};n.inherits(t,a),function(){this.lineCommentStart="--",this.$id="ace/mode/sql"}.call(t.prototype),i.Mode=t})}}]);

//# sourceMappingURL=2514.c86950e9813e27962050.js.map