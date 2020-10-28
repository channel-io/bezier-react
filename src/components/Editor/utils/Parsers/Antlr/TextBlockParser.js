// Generated from src/components/Editor/utils/Parsers/Antlr/TextBlockParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TextBlockParserListener = require('./TextBlockParserListener').TextBlockParserListener;
var grammarFileName = "TextBlockParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016}\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u0017\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0006\u0003$\n\u0003\r\u0003\u000e\u0003%\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0006\u00042\n\u0004\r\u0004\u000e\u0004",
    "3\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005@",
    "\n\u0005\f\u0005\u000e\u0005C\u000b\u0005\u0003\u0005\u0003\u0005\u0006",
    "\u0005G\n\u0005\r\u0005\u000e\u0005H\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "S\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0006\u0007Z\n\u0007\r\u0007\u000e\u0007[\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0006\u0007a\n\u0007\r\u0007\u000e\u0007b\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0006\u0007o\n\u0007\r\u0007\u000e\u0007p\u0003",
    "\u0007\u0003\u0007\u0005\u0007u\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0002\u0003\u0003\u0002\u0004\u000b\u0002\u0086\u0002\u0018\u0003",
    "\u0002\u0002\u0002\u0004\u001d\u0003\u0002\u0002\u0002\u0006,\u0003",
    "\u0002\u0002\u0002\b:\u0003\u0002\u0002\u0002\nR\u0003\u0002\u0002\u0002",
    "\ft\u0003\u0002\u0002\u0002\u000ev\u0003\u0002\u0002\u0002\u0010z\u0003",
    "\u0002\u0002\u0002\u0012\u0017\u0005\u0004\u0003\u0002\u0013\u0017\u0005",
    "\u0006\u0004\u0002\u0014\u0017\u0005\b\u0005\u0002\u0015\u0017\u0005",
    "\n\u0006\u0002\u0016\u0012\u0003\u0002\u0002\u0002\u0016\u0013\u0003",
    "\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u0003",
    "\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001c\u0007",
    "\u0002\u0002\u0003\u001c\u0003\u0003\u0002\u0002\u0002\u001d\u001e\u0007",
    "\u0003\u0002\u0002\u001e\u001f\u0007\u000f\u0002\u0002\u001f#\u0007",
    "\f\u0002\u0002 $\u0005\u0006\u0004\u0002!$\u0005\b\u0005\u0002\"$\u0005",
    "\n\u0006\u0002# \u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#",
    "\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002",
    "\u0002%&\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'(\u0007",
    "\u0003\u0002\u0002()\u0007\r\u0002\u0002)*\u0007\u000f\u0002\u0002*",
    "+\u0007\f\u0002\u0002+\u0005\u0003\u0002\u0002\u0002,-\u0007\u0003\u0002",
    "\u0002-.\u0007\u0010\u0002\u0002.1\u0007\f\u0002\u0002/2\u0005\b\u0005",
    "\u000202\u0005\n\u0006\u00021/\u0003\u0002\u0002\u000210\u0003\u0002",
    "\u0002\u000223\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u000245\u0003\u0002\u0002\u000256\u0007\u0003\u0002\u0002",
    "67\u0007\r\u0002\u000278\u0007\u0010\u0002\u000289\u0007\f\u0002\u0002",
    "9\u0007\u0003\u0002\u0002\u0002:;\u0007\u0003\u0002\u0002;A\u0007\u0011",
    "\u0002\u0002<=\u0007\u0014\u0002\u0002=>\u0007\u000e\u0002\u0002>@\u0007",
    "\u0015\u0002\u0002?<\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BD\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002DF\u0007\f\u0002\u0002EG\u0005\n\u0006",
    "\u0002FE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HF\u0003\u0002",
    "\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0007",
    "\u0003\u0002\u0002KL\u0007\r\u0002\u0002LM\u0007\u0011\u0002\u0002M",
    "N\u0007\f\u0002\u0002N\t\u0003\u0002\u0002\u0002OS\u0005\f\u0007\u0002",
    "PS\u0005\u000e\b\u0002QS\u0005\u0010\t\u0002RO\u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002S\u000b\u0003\u0002",
    "\u0002\u0002TU\u0007\u0003\u0002\u0002UY\u0007\u0012\u0002\u0002VW\u0007",
    "\u0014\u0002\u0002WX\u0007\u000e\u0002\u0002XZ\u0007\u0015\u0002\u0002",
    "YV\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002",
    "\u0002[\\\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]`\u0007",
    "\f\u0002\u0002^a\u0005\u000e\b\u0002_a\u0005\u0010\t\u0002`^\u0003\u0002",
    "\u0002\u0002`_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b`\u0003",
    "\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "de\u0007\u0003\u0002\u0002ef\u0007\r\u0002\u0002fg\u0007\u0012\u0002",
    "\u0002gh\u0007\f\u0002\u0002hu\u0003\u0002\u0002\u0002ij\u0007\u0003",
    "\u0002\u0002jn\u0007\u0012\u0002\u0002kl\u0007\u0014\u0002\u0002lm\u0007",
    "\u000e\u0002\u0002mo\u0007\u0015\u0002\u0002nk\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002rs\u0007\r\u0002\u0002su\u0007\f\u0002",
    "\u0002tT\u0003\u0002\u0002\u0002ti\u0003\u0002\u0002\u0002u\r\u0003",
    "\u0002\u0002\u0002vw\u0007\b\u0002\u0002wx\u0007\t\u0002\u0002xy\u0007",
    "\b\u0002\u0002y\u000f\u0003\u0002\u0002\u0002z{\t\u0002\u0002\u0002",
    "{\u0011\u0003\u0002\u0002\u0002\u0010\u0016\u0018#%13AHR[`bpt"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'<'", "'&lt;'", "'&gt;'", "'&amp;'", null, "':'", 
                     null, null, null, "'>'", "'/'", "'='" ];

var symbolicNames = [ null, "LT", "ESCAPED_LT", "ESCAPED_GT", "ESCAPED_AMP", 
                      "WS", "COLON", "EMOJI_CODES", "UNICODES", "ANY", "GT", 
                      "SLASH", "EQUALS", "BOLD", "ITALIC", "LINK", "VARIABLE", 
                      "TAG_WS", "ATTR_NAME", "ATTR_VALUE", "ATTR_WS" ];

var ruleNames =  [ "text", "bold", "italic", "link", "inner", "variable", 
                   "emoji", "plain" ];

function TextBlockParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TextBlockParser.prototype = Object.create(antlr4.Parser.prototype);
TextBlockParser.prototype.constructor = TextBlockParser;

Object.defineProperty(TextBlockParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TextBlockParser.EOF = antlr4.Token.EOF;
TextBlockParser.LT = 1;
TextBlockParser.ESCAPED_LT = 2;
TextBlockParser.ESCAPED_GT = 3;
TextBlockParser.ESCAPED_AMP = 4;
TextBlockParser.WS = 5;
TextBlockParser.COLON = 6;
TextBlockParser.EMOJI_CODES = 7;
TextBlockParser.UNICODES = 8;
TextBlockParser.ANY = 9;
TextBlockParser.GT = 10;
TextBlockParser.SLASH = 11;
TextBlockParser.EQUALS = 12;
TextBlockParser.BOLD = 13;
TextBlockParser.ITALIC = 14;
TextBlockParser.LINK = 15;
TextBlockParser.VARIABLE = 16;
TextBlockParser.TAG_WS = 17;
TextBlockParser.ATTR_NAME = 18;
TextBlockParser.ATTR_VALUE = 19;
TextBlockParser.ATTR_WS = 20;

TextBlockParser.RULE_text = 0;
TextBlockParser.RULE_bold = 1;
TextBlockParser.RULE_italic = 2;
TextBlockParser.RULE_link = 3;
TextBlockParser.RULE_inner = 4;
TextBlockParser.RULE_variable = 5;
TextBlockParser.RULE_emoji = 6;
TextBlockParser.RULE_plain = 7;


function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.EOF = function() {
    return this.getToken(TextBlockParser.EOF, 0);
};

TextContext.prototype.bold = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BoldContext);
    } else {
        return this.getTypedRuleContext(BoldContext,i);
    }
};

TextContext.prototype.italic = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItalicContext);
    } else {
        return this.getTypedRuleContext(ItalicContext,i);
    }
};

TextContext.prototype.link = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LinkContext);
    } else {
        return this.getTypedRuleContext(LinkContext,i);
    }
};

TextContext.prototype.inner = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InnerContext);
    } else {
        return this.getTypedRuleContext(InnerContext,i);
    }
};

TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitText(this);
	}
};




TextBlockParser.TextContext = TextContext;

TextBlockParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TextBlockParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TextBlockParser.LT) | (1 << TextBlockParser.ESCAPED_LT) | (1 << TextBlockParser.ESCAPED_GT) | (1 << TextBlockParser.ESCAPED_AMP) | (1 << TextBlockParser.WS) | (1 << TextBlockParser.COLON) | (1 << TextBlockParser.EMOJI_CODES) | (1 << TextBlockParser.UNICODES) | (1 << TextBlockParser.ANY))) !== 0)) {
            this.state = 20;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 16;
                this.bold();
                break;

            case 2:
                this.state = 17;
                this.italic();
                break;

            case 3:
                this.state = 18;
                this.link();
                break;

            case 4:
                this.state = 19;
                this.inner();
                break;

            }
            this.state = 24;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 25;
        this.match(TextBlockParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_bold;
    return this;
}

BoldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoldContext.prototype.constructor = BoldContext;

BoldContext.prototype.LT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.LT);
    } else {
        return this.getToken(TextBlockParser.LT, i);
    }
};


BoldContext.prototype.BOLD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.BOLD);
    } else {
        return this.getToken(TextBlockParser.BOLD, i);
    }
};


BoldContext.prototype.GT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.GT);
    } else {
        return this.getToken(TextBlockParser.GT, i);
    }
};


BoldContext.prototype.SLASH = function() {
    return this.getToken(TextBlockParser.SLASH, 0);
};

BoldContext.prototype.italic = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItalicContext);
    } else {
        return this.getTypedRuleContext(ItalicContext,i);
    }
};

BoldContext.prototype.link = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LinkContext);
    } else {
        return this.getTypedRuleContext(LinkContext,i);
    }
};

BoldContext.prototype.inner = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InnerContext);
    } else {
        return this.getTypedRuleContext(InnerContext,i);
    }
};

BoldContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterBold(this);
	}
};

BoldContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitBold(this);
	}
};




TextBlockParser.BoldContext = BoldContext;

TextBlockParser.prototype.bold = function() {

    var localctx = new BoldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TextBlockParser.RULE_bold);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(TextBlockParser.LT);
        this.state = 28;
        this.match(TextBlockParser.BOLD);
        this.state = 29;
        this.match(TextBlockParser.GT);
        this.state = 33; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 33;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 30;
        		    this.italic();
        		    break;

        		case 2:
        		    this.state = 31;
        		    this.link();
        		    break;

        		case 3:
        		    this.state = 32;
        		    this.inner();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 35; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 37;
        this.match(TextBlockParser.LT);
        this.state = 38;
        this.match(TextBlockParser.SLASH);
        this.state = 39;
        this.match(TextBlockParser.BOLD);
        this.state = 40;
        this.match(TextBlockParser.GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ItalicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_italic;
    return this;
}

ItalicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItalicContext.prototype.constructor = ItalicContext;

ItalicContext.prototype.LT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.LT);
    } else {
        return this.getToken(TextBlockParser.LT, i);
    }
};


ItalicContext.prototype.ITALIC = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.ITALIC);
    } else {
        return this.getToken(TextBlockParser.ITALIC, i);
    }
};


ItalicContext.prototype.GT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.GT);
    } else {
        return this.getToken(TextBlockParser.GT, i);
    }
};


ItalicContext.prototype.SLASH = function() {
    return this.getToken(TextBlockParser.SLASH, 0);
};

ItalicContext.prototype.link = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LinkContext);
    } else {
        return this.getTypedRuleContext(LinkContext,i);
    }
};

ItalicContext.prototype.inner = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InnerContext);
    } else {
        return this.getTypedRuleContext(InnerContext,i);
    }
};

ItalicContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterItalic(this);
	}
};

ItalicContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitItalic(this);
	}
};




TextBlockParser.ItalicContext = ItalicContext;

TextBlockParser.prototype.italic = function() {

    var localctx = new ItalicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TextBlockParser.RULE_italic);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.match(TextBlockParser.LT);
        this.state = 43;
        this.match(TextBlockParser.ITALIC);
        this.state = 44;
        this.match(TextBlockParser.GT);
        this.state = 47; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 47;
        		this._errHandler.sync(this);
        		var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 45;
        		    this.link();
        		    break;

        		case 2:
        		    this.state = 46;
        		    this.inner();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 49; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 51;
        this.match(TextBlockParser.LT);
        this.state = 52;
        this.match(TextBlockParser.SLASH);
        this.state = 53;
        this.match(TextBlockParser.ITALIC);
        this.state = 54;
        this.match(TextBlockParser.GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LinkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_link;
    return this;
}

LinkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinkContext.prototype.constructor = LinkContext;

LinkContext.prototype.LT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.LT);
    } else {
        return this.getToken(TextBlockParser.LT, i);
    }
};


LinkContext.prototype.LINK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.LINK);
    } else {
        return this.getToken(TextBlockParser.LINK, i);
    }
};


LinkContext.prototype.GT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.GT);
    } else {
        return this.getToken(TextBlockParser.GT, i);
    }
};


LinkContext.prototype.SLASH = function() {
    return this.getToken(TextBlockParser.SLASH, 0);
};

LinkContext.prototype.ATTR_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.ATTR_NAME);
    } else {
        return this.getToken(TextBlockParser.ATTR_NAME, i);
    }
};


LinkContext.prototype.EQUALS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.EQUALS);
    } else {
        return this.getToken(TextBlockParser.EQUALS, i);
    }
};


LinkContext.prototype.ATTR_VALUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.ATTR_VALUE);
    } else {
        return this.getToken(TextBlockParser.ATTR_VALUE, i);
    }
};


LinkContext.prototype.inner = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InnerContext);
    } else {
        return this.getTypedRuleContext(InnerContext,i);
    }
};

LinkContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterLink(this);
	}
};

LinkContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitLink(this);
	}
};




TextBlockParser.LinkContext = LinkContext;

TextBlockParser.prototype.link = function() {

    var localctx = new LinkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TextBlockParser.RULE_link);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(TextBlockParser.LT);
        this.state = 57;
        this.match(TextBlockParser.LINK);
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TextBlockParser.ATTR_NAME) {
            this.state = 58;
            this.match(TextBlockParser.ATTR_NAME);
            this.state = 59;
            this.match(TextBlockParser.EQUALS);
            this.state = 60;
            this.match(TextBlockParser.ATTR_VALUE);
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 66;
        this.match(TextBlockParser.GT);
        this.state = 68; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 67;
        		this.inner();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 70; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 72;
        this.match(TextBlockParser.LT);
        this.state = 73;
        this.match(TextBlockParser.SLASH);
        this.state = 74;
        this.match(TextBlockParser.LINK);
        this.state = 75;
        this.match(TextBlockParser.GT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InnerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_inner;
    return this;
}

InnerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InnerContext.prototype.constructor = InnerContext;

InnerContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

InnerContext.prototype.emoji = function() {
    return this.getTypedRuleContext(EmojiContext,0);
};

InnerContext.prototype.plain = function() {
    return this.getTypedRuleContext(PlainContext,0);
};

InnerContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterInner(this);
	}
};

InnerContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitInner(this);
	}
};




TextBlockParser.InnerContext = InnerContext;

TextBlockParser.prototype.inner = function() {

    var localctx = new InnerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TextBlockParser.RULE_inner);
    try {
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.variable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.emoji();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
            this.plain();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.LT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.LT);
    } else {
        return this.getToken(TextBlockParser.LT, i);
    }
};


VariableContext.prototype.VARIABLE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.VARIABLE);
    } else {
        return this.getToken(TextBlockParser.VARIABLE, i);
    }
};


VariableContext.prototype.GT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.GT);
    } else {
        return this.getToken(TextBlockParser.GT, i);
    }
};


VariableContext.prototype.SLASH = function() {
    return this.getToken(TextBlockParser.SLASH, 0);
};

VariableContext.prototype.ATTR_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.ATTR_NAME);
    } else {
        return this.getToken(TextBlockParser.ATTR_NAME, i);
    }
};


VariableContext.prototype.EQUALS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.EQUALS);
    } else {
        return this.getToken(TextBlockParser.EQUALS, i);
    }
};


VariableContext.prototype.ATTR_VALUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.ATTR_VALUE);
    } else {
        return this.getToken(TextBlockParser.ATTR_VALUE, i);
    }
};


VariableContext.prototype.emoji = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmojiContext);
    } else {
        return this.getTypedRuleContext(EmojiContext,i);
    }
};

VariableContext.prototype.plain = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PlainContext);
    } else {
        return this.getTypedRuleContext(PlainContext,i);
    }
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitVariable(this);
	}
};




TextBlockParser.VariableContext = VariableContext;

TextBlockParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TextBlockParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.state = 114;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.match(TextBlockParser.LT);
            this.state = 83;
            this.match(TextBlockParser.VARIABLE);
            this.state = 87; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 84;
                this.match(TextBlockParser.ATTR_NAME);
                this.state = 85;
                this.match(TextBlockParser.EQUALS);
                this.state = 86;
                this.match(TextBlockParser.ATTR_VALUE);
                this.state = 89; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===TextBlockParser.ATTR_NAME);
            this.state = 91;
            this.match(TextBlockParser.GT);
            this.state = 94; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 94;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 92;
                    this.emoji();
                    break;

                case 2:
                    this.state = 93;
                    this.plain();
                    break;

                }
                this.state = 96; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TextBlockParser.ESCAPED_LT) | (1 << TextBlockParser.ESCAPED_GT) | (1 << TextBlockParser.ESCAPED_AMP) | (1 << TextBlockParser.WS) | (1 << TextBlockParser.COLON) | (1 << TextBlockParser.EMOJI_CODES) | (1 << TextBlockParser.UNICODES) | (1 << TextBlockParser.ANY))) !== 0));
            this.state = 98;
            this.match(TextBlockParser.LT);
            this.state = 99;
            this.match(TextBlockParser.SLASH);
            this.state = 100;
            this.match(TextBlockParser.VARIABLE);
            this.state = 101;
            this.match(TextBlockParser.GT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.match(TextBlockParser.LT);
            this.state = 104;
            this.match(TextBlockParser.VARIABLE);
            this.state = 108; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 105;
                this.match(TextBlockParser.ATTR_NAME);
                this.state = 106;
                this.match(TextBlockParser.EQUALS);
                this.state = 107;
                this.match(TextBlockParser.ATTR_VALUE);
                this.state = 110; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===TextBlockParser.ATTR_NAME);
            this.state = 112;
            this.match(TextBlockParser.SLASH);
            this.state = 113;
            this.match(TextBlockParser.GT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmojiContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_emoji;
    return this;
}

EmojiContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmojiContext.prototype.constructor = EmojiContext;

EmojiContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TextBlockParser.COLON);
    } else {
        return this.getToken(TextBlockParser.COLON, i);
    }
};


EmojiContext.prototype.EMOJI_CODES = function() {
    return this.getToken(TextBlockParser.EMOJI_CODES, 0);
};

EmojiContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterEmoji(this);
	}
};

EmojiContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitEmoji(this);
	}
};




TextBlockParser.EmojiContext = EmojiContext;

TextBlockParser.prototype.emoji = function() {

    var localctx = new EmojiContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TextBlockParser.RULE_emoji);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(TextBlockParser.COLON);
        this.state = 117;
        this.match(TextBlockParser.EMOJI_CODES);
        this.state = 118;
        this.match(TextBlockParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PlainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TextBlockParser.RULE_plain;
    return this;
}

PlainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlainContext.prototype.constructor = PlainContext;

PlainContext.prototype.COLON = function() {
    return this.getToken(TextBlockParser.COLON, 0);
};

PlainContext.prototype.EMOJI_CODES = function() {
    return this.getToken(TextBlockParser.EMOJI_CODES, 0);
};

PlainContext.prototype.ESCAPED_LT = function() {
    return this.getToken(TextBlockParser.ESCAPED_LT, 0);
};

PlainContext.prototype.ESCAPED_GT = function() {
    return this.getToken(TextBlockParser.ESCAPED_GT, 0);
};

PlainContext.prototype.ESCAPED_AMP = function() {
    return this.getToken(TextBlockParser.ESCAPED_AMP, 0);
};

PlainContext.prototype.WS = function() {
    return this.getToken(TextBlockParser.WS, 0);
};

PlainContext.prototype.UNICODES = function() {
    return this.getToken(TextBlockParser.UNICODES, 0);
};

PlainContext.prototype.ANY = function() {
    return this.getToken(TextBlockParser.ANY, 0);
};

PlainContext.prototype.enterRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.enterPlain(this);
	}
};

PlainContext.prototype.exitRule = function(listener) {
    if(listener instanceof TextBlockParserListener ) {
        listener.exitPlain(this);
	}
};




TextBlockParser.PlainContext = PlainContext;

TextBlockParser.prototype.plain = function() {

    var localctx = new PlainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TextBlockParser.RULE_plain);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TextBlockParser.ESCAPED_LT) | (1 << TextBlockParser.ESCAPED_GT) | (1 << TextBlockParser.ESCAPED_AMP) | (1 << TextBlockParser.WS) | (1 << TextBlockParser.COLON) | (1 << TextBlockParser.EMOJI_CODES) | (1 << TextBlockParser.UNICODES) | (1 << TextBlockParser.ANY))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TextBlockParser = TextBlockParser;
