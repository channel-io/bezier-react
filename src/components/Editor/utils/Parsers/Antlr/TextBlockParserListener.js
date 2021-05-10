// Generated from src/components/Editor/utils/Parsers/Antlr/TextBlockParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TextBlockParser.
function TextBlockParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TextBlockParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TextBlockParserListener.prototype.constructor = TextBlockParserListener;

// Enter a parse tree produced by TextBlockParser#text.
TextBlockParserListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#text.
TextBlockParserListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#bold.
TextBlockParserListener.prototype.enterBold = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#bold.
TextBlockParserListener.prototype.exitBold = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#italic.
TextBlockParserListener.prototype.enterItalic = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#italic.
TextBlockParserListener.prototype.exitItalic = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#link.
TextBlockParserListener.prototype.enterLink = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#link.
TextBlockParserListener.prototype.exitLink = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#inner.
TextBlockParserListener.prototype.enterInner = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#inner.
TextBlockParserListener.prototype.exitInner = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#variable.
TextBlockParserListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#variable.
TextBlockParserListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#emoji.
TextBlockParserListener.prototype.enterEmoji = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#emoji.
TextBlockParserListener.prototype.exitEmoji = function(ctx) {
};


// Enter a parse tree produced by TextBlockParser#plain.
TextBlockParserListener.prototype.enterPlain = function(ctx) {
};

// Exit a parse tree produced by TextBlockParser#plain.
TextBlockParserListener.prototype.exitPlain = function(ctx) {
};



exports.TextBlockParserListener = TextBlockParserListener;