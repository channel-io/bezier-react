// Generated from /Users/leo_zoyi/design-system/src/components/Editor/utils/Parsers/Antlr/TextBlockLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TextBlockLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LT=1, ESCAPED_LT=2, ESCAPED_GT=3, ESCAPED_AMP=4, WS=5, COLON=6, EMOJI_CODES=7, 
		UNICODES=8, ANY=9, GT=10, SLASH=11, EQUALS=12, BOLD=13, ITALIC=14, LINK=15, 
		VARIABLE=16, TAG_WS=17, ATTR_NAME=18, ATTR_VALUE=19, ATTR_WS=20;
	public static final int
		TAG=1, ATTRVALUE=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "TAG", "ATTRVALUE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LT", "ESCAPED_LT", "ESCAPED_GT", "ESCAPED_AMP", "WS", "COLON", "EMOJI_CODES", 
			"UNICODES", "ANY", "GT", "SLASH", "EQUALS", "BOLD", "ITALIC", "LINK", 
			"VARIABLE", "TAG_WS", "ATTR_NAME", "ATTR_VALUE", "ATTR_WS", "DOUBLE_QUOTE_STRING", 
			"SINGLE_QUOTE_STRING", "Ws", "A", "B", "C", "D", "E", "F", "G", "H", 
			"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
			"W", "X", "Y", "Z"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'<'", "'&lt;'", "'&gt;'", "'&amp;'", null, "':'", null, null, 
			null, "'>'", "'/'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LT", "ESCAPED_LT", "ESCAPED_GT", "ESCAPED_AMP", "WS", "COLON", 
			"EMOJI_CODES", "UNICODES", "ANY", "GT", "SLASH", "EQUALS", "BOLD", "ITALIC", 
			"LINK", "VARIABLE", "TAG_WS", "ATTR_NAME", "ATTR_VALUE", "ATTR_WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TextBlockLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TextBlockLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\26\u0105\b\1\b\1"+
		"\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4"+
		"\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t"+
		"\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t"+
		"\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t"+
		"\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4"+
		"*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\3\2\3"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\6\6\6}\n\6\r\6\16\6~\3\7\3\7\3\b\6\b\u0084\n\b\r\b\16\b\u0085\3"+
		"\t\6\t\u0089\n\t\r\t\16\t\u008a\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\6\23\u00b0"+
		"\n\23\r\23\16\23\u00b1\3\24\3\24\5\24\u00b6\n\24\3\24\3\24\3\25\3\25\3"+
		"\25\3\25\3\26\3\26\7\26\u00c0\n\26\f\26\16\26\u00c3\13\26\3\26\3\26\3"+
		"\27\3\27\7\27\u00c9\n\27\f\27\16\27\u00cc\13\27\3\27\3\27\3\30\3\30\3"+
		"\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3"+
		" \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3"+
		"+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\2\2\63\5\3"+
		"\7\4\t\5\13\6\r\7\17\b\21\t\23\n\25\13\27\f\31\r\33\16\35\17\37\20!\21"+
		"#\22%\23\'\24)\25+\26-\2/\2\61\2\63\2\65\2\67\29\2;\2=\2?\2A\2C\2E\2G"+
		"\2I\2K\2M\2O\2Q\2S\2U\2W\2Y\2[\2]\2_\2a\2c\2e\2\5\2\3\4\"\b\2--//\62;"+
		"C\\aac|\3\2\u0082\1\4\2C\\c|\4\2$$>>\4\2))>>\5\2\13\f\17\17\"\"\4\2CC"+
		"cc\4\2DDdd\4\2EEee\4\2FFff\4\2GGgg\4\2HHhh\4\2IIii\4\2JJjj\4\2KKkk\4\2"+
		"LLll\4\2MMmm\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQqq\4\2RRrr\4\2SSss\4\2TTtt\4"+
		"\2UUuu\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2ZZzz\4\2[[{{\4\2\\\\||\2\u00ec"+
		"\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2"+
		"\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\3\27\3\2\2\2\3\31\3\2\2\2"+
		"\3\33\3\2\2\2\3\35\3\2\2\2\3\37\3\2\2\2\3!\3\2\2\2\3#\3\2\2\2\3%\3\2\2"+
		"\2\3\'\3\2\2\2\4)\3\2\2\2\4+\3\2\2\2\5g\3\2\2\2\7k\3\2\2\2\tp\3\2\2\2"+
		"\13u\3\2\2\2\r|\3\2\2\2\17\u0080\3\2\2\2\21\u0083\3\2\2\2\23\u0088\3\2"+
		"\2\2\25\u008c\3\2\2\2\27\u008e\3\2\2\2\31\u0092\3\2\2\2\33\u0094\3\2\2"+
		"\2\35\u0098\3\2\2\2\37\u009a\3\2\2\2!\u009c\3\2\2\2#\u00a1\3\2\2\2%\u00aa"+
		"\3\2\2\2\'\u00af\3\2\2\2)\u00b5\3\2\2\2+\u00b9\3\2\2\2-\u00bd\3\2\2\2"+
		"/\u00c6\3\2\2\2\61\u00cf\3\2\2\2\63\u00d1\3\2\2\2\65\u00d3\3\2\2\2\67"+
		"\u00d5\3\2\2\29\u00d7\3\2\2\2;\u00d9\3\2\2\2=\u00db\3\2\2\2?\u00dd\3\2"+
		"\2\2A\u00df\3\2\2\2C\u00e1\3\2\2\2E\u00e3\3\2\2\2G\u00e5\3\2\2\2I\u00e7"+
		"\3\2\2\2K\u00e9\3\2\2\2M\u00eb\3\2\2\2O\u00ed\3\2\2\2Q\u00ef\3\2\2\2S"+
		"\u00f1\3\2\2\2U\u00f3\3\2\2\2W\u00f5\3\2\2\2Y\u00f7\3\2\2\2[\u00f9\3\2"+
		"\2\2]\u00fb\3\2\2\2_\u00fd\3\2\2\2a\u00ff\3\2\2\2c\u0101\3\2\2\2e\u0103"+
		"\3\2\2\2gh\7>\2\2hi\3\2\2\2ij\b\2\2\2j\6\3\2\2\2kl\7(\2\2lm\7n\2\2mn\7"+
		"v\2\2no\7=\2\2o\b\3\2\2\2pq\7(\2\2qr\7i\2\2rs\7v\2\2st\7=\2\2t\n\3\2\2"+
		"\2uv\7(\2\2vw\7c\2\2wx\7o\2\2xy\7r\2\2yz\7=\2\2z\f\3\2\2\2{}\5\61\30\2"+
		"|{\3\2\2\2}~\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\16\3\2\2\2\u0080\u0081"+
		"\7<\2\2\u0081\20\3\2\2\2\u0082\u0084\t\2\2\2\u0083\u0082\3\2\2\2\u0084"+
		"\u0085\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\22\3\2\2"+
		"\2\u0087\u0089\t\3\2\2\u0088\u0087\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u0088"+
		"\3\2\2\2\u008a\u008b\3\2\2\2\u008b\24\3\2\2\2\u008c\u008d\13\2\2\2\u008d"+
		"\26\3\2\2\2\u008e\u008f\7@\2\2\u008f\u0090\3\2\2\2\u0090\u0091\b\13\3"+
		"\2\u0091\30\3\2\2\2\u0092\u0093\7\61\2\2\u0093\32\3\2\2\2\u0094\u0095"+
		"\7?\2\2\u0095\u0096\3\2\2\2\u0096\u0097\b\r\4\2\u0097\34\3\2\2\2\u0098"+
		"\u0099\5\65\32\2\u0099\36\3\2\2\2\u009a\u009b\5C!\2\u009b \3\2\2\2\u009c"+
		"\u009d\5I$\2\u009d\u009e\5C!\2\u009e\u009f\5M&\2\u009f\u00a0\5G#\2\u00a0"+
		"\"\3\2\2\2\u00a1\u00a2\5].\2\u00a2\u00a3\5\63\31\2\u00a3\u00a4\5U*\2\u00a4"+
		"\u00a5\5C!\2\u00a5\u00a6\5\63\31\2\u00a6\u00a7\5\65\32\2\u00a7\u00a8\5"+
		"I$\2\u00a8\u00a9\5;\35\2\u00a9$\3\2\2\2\u00aa\u00ab\5\61\30\2\u00ab\u00ac"+
		"\3\2\2\2\u00ac\u00ad\b\22\5\2\u00ad&\3\2\2\2\u00ae\u00b0\t\4\2\2\u00af"+
		"\u00ae\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00af\3\2\2\2\u00b1\u00b2\3\2"+
		"\2\2\u00b2(\3\2\2\2\u00b3\u00b6\5-\26\2\u00b4\u00b6\5/\27\2\u00b5\u00b3"+
		"\3\2\2\2\u00b5\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\b\24\3\2"+
		"\u00b8*\3\2\2\2\u00b9\u00ba\5\61\30\2\u00ba\u00bb\3\2\2\2\u00bb\u00bc"+
		"\b\25\5\2\u00bc,\3\2\2\2\u00bd\u00c1\7$\2\2\u00be\u00c0\n\5\2\2\u00bf"+
		"\u00be\3\2\2\2\u00c0\u00c3\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c2\3\2"+
		"\2\2\u00c2\u00c4\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c4\u00c5\7$\2\2\u00c5"+
		".\3\2\2\2\u00c6\u00ca\7)\2\2\u00c7\u00c9\n\6\2\2\u00c8\u00c7\3\2\2\2\u00c9"+
		"\u00cc\3\2\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cd\3\2"+
		"\2\2\u00cc\u00ca\3\2\2\2\u00cd\u00ce\7)\2\2\u00ce\60\3\2\2\2\u00cf\u00d0"+
		"\t\7\2\2\u00d0\62\3\2\2\2\u00d1\u00d2\t\b\2\2\u00d2\64\3\2\2\2\u00d3\u00d4"+
		"\t\t\2\2\u00d4\66\3\2\2\2\u00d5\u00d6\t\n\2\2\u00d68\3\2\2\2\u00d7\u00d8"+
		"\t\13\2\2\u00d8:\3\2\2\2\u00d9\u00da\t\f\2\2\u00da<\3\2\2\2\u00db\u00dc"+
		"\t\r\2\2\u00dc>\3\2\2\2\u00dd\u00de\t\16\2\2\u00de@\3\2\2\2\u00df\u00e0"+
		"\t\17\2\2\u00e0B\3\2\2\2\u00e1\u00e2\t\20\2\2\u00e2D\3\2\2\2\u00e3\u00e4"+
		"\t\21\2\2\u00e4F\3\2\2\2\u00e5\u00e6\t\22\2\2\u00e6H\3\2\2\2\u00e7\u00e8"+
		"\t\23\2\2\u00e8J\3\2\2\2\u00e9\u00ea\t\24\2\2\u00eaL\3\2\2\2\u00eb\u00ec"+
		"\t\25\2\2\u00ecN\3\2\2\2\u00ed\u00ee\t\26\2\2\u00eeP\3\2\2\2\u00ef\u00f0"+
		"\t\27\2\2\u00f0R\3\2\2\2\u00f1\u00f2\t\30\2\2\u00f2T\3\2\2\2\u00f3\u00f4"+
		"\t\31\2\2\u00f4V\3\2\2\2\u00f5\u00f6\t\32\2\2\u00f6X\3\2\2\2\u00f7\u00f8"+
		"\t\33\2\2\u00f8Z\3\2\2\2\u00f9\u00fa\t\34\2\2\u00fa\\\3\2\2\2\u00fb\u00fc"+
		"\t\35\2\2\u00fc^\3\2\2\2\u00fd\u00fe\t\36\2\2\u00fe`\3\2\2\2\u00ff\u0100"+
		"\t\37\2\2\u0100b\3\2\2\2\u0101\u0102\t \2\2\u0102d\3\2\2\2\u0103\u0104"+
		"\t!\2\2\u0104f\3\2\2\2\f\2\3\4~\u0085\u008a\u00b1\u00b5\u00c1\u00ca\6"+
		"\7\3\2\6\2\2\7\4\2\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}