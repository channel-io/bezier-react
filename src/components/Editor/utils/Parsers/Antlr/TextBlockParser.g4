parser grammar TextBlockParser;

options { tokenVocab=TextBlockLexer; }


text: (bold | italic | link | inner)* EOF;

bold: LT BOLD GT (italic | link | inner)+ LT SLASH BOLD GT;

italic: LT ITALIC GT (link | inner)+ LT SLASH ITALIC GT;

link: LT LINK (ATTR_NAME EQUALS ATTR_VALUE)* GT inner+ LT SLASH LINK GT;


inner: variable | emoji | plain;

variable
    : LT VARIABLE (ATTR_NAME EQUALS ATTR_VALUE)+ GT (emoji | plain)+ LT SLASH VARIABLE GT
    | LT VARIABLE (ATTR_NAME EQUALS ATTR_VALUE)+ SLASH GT
    ;

emoji: COLON EMOJI_CODES COLON;

plain: COLON | EMOJI_CODES | ESCAPED_LT | ESCAPED_GT | ESCAPED_AMP | WS | UNICODES | ANY;
