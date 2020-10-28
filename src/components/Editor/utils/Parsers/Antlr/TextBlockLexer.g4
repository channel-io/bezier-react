lexer grammar TextBlockLexer;


LT: '<' -> pushMode(TAG);

ESCAPED_LT: '&lt;';

ESCAPED_GT: '&gt;';

ESCAPED_AMP: '&amp;';

WS: Ws+;

COLON: ':';

EMOJI_CODES: [-+_0-9a-zA-Z]+;

UNICODES: [\u0080-\uFFFF]+;

ANY: .;


// Tag
mode TAG;

GT: '>' -> popMode;

SLASH: '/';

EQUALS: '=' -> pushMode(ATTRVALUE);

// tag name
BOLD: B;

ITALIC: I;

LINK: L I N K;

VARIABLE: V A R I A B L E;

TAG_WS: Ws -> skip;

// ATTR_NAME에는 Bold, Italic, Link 캐릭터는 들어갈 수 없음.
// ATTR_NAME을 다른 mode로 분리하여 해결하여야함
ATTR_NAME: [a-zA-Z]+;

// Attr Value
mode ATTRVALUE;

ATTR_VALUE: (DOUBLE_QUOTE_STRING | SINGLE_QUOTE_STRING) -> popMode;

ATTR_WS: Ws -> skip;


fragment DOUBLE_QUOTE_STRING
    : '"' ~[<"]* '"'
    ;

fragment SINGLE_QUOTE_STRING
    : '\'' ~[<']* '\''
    ;

fragment Ws : [ \t\r\n];
fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];
