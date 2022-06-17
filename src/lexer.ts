import { SyntaxKind } from "./SyntaxKind"

const textToToken = {
  "{": SyntaxKind.OpenBraceToken,
  "}": SyntaxKind.CloseBraceToken,
  "(": SyntaxKind.OpenParenToken,
  ")": SyntaxKind.CloseParenToken,
  "[": SyntaxKind.OpenBracketToken,
  "]": SyntaxKind.CloseBracketToken,
  ".": SyntaxKind.DotToken,
  "...": SyntaxKind.DotDotDotToken,
  ";": SyntaxKind.SemicolonToken,
  ",": SyntaxKind.CommaToken,
  "<": SyntaxKind.LessThanToken,
  ">": SyntaxKind.GreaterThanToken,
  "<=": SyntaxKind.LessThanEqualsToken,
  ">=": SyntaxKind.GreaterThanEqualsToken,
  "==": SyntaxKind.EqualsEqualsToken,
  "!=": SyntaxKind.ExclamationEqualsToken,
  "===": SyntaxKind.EqualsEqualsEqualsToken,
  "!==": SyntaxKind.ExclamationEqualsEqualsToken,
  "=>": SyntaxKind.EqualsGreaterThanToken,
  "+": SyntaxKind.PlusToken,
  "-": SyntaxKind.MinusToken,
  "**": SyntaxKind.AsteriskAsteriskToken,
  "*": SyntaxKind.AsteriskToken,
  "/": SyntaxKind.SlashToken,
  "%": SyntaxKind.PercentToken,
  "++": SyntaxKind.PlusPlusToken,
  "--": SyntaxKind.MinusMinusToken,
  "<<": SyntaxKind.LessThanLessThanToken,
  ">>": SyntaxKind.GreaterThanGreaterThanToken,
  "&": SyntaxKind.AmpersandToken,
  "|": SyntaxKind.BarToken,
  "!": SyntaxKind.ExclamationToken,
  "&&": SyntaxKind.AmpersandAmpersandToken,
  "||": SyntaxKind.BarBarToken,
  "?": SyntaxKind.QuestionToken,
  "?.": SyntaxKind.QuestionDotToken,
  ":": SyntaxKind.ColonToken,
  "=": SyntaxKind.EqualsToken,
  "+=": SyntaxKind.PlusEqualsToken,
  "-=": SyntaxKind.MinusEqualsToken,
  "*=": SyntaxKind.AsteriskEqualsToken,
  "@": SyntaxKind.AtToken,
  "`": SyntaxKind.BacktickToken,
}

const textToKeyword = {
  abstract: SyntaxKind.AbstractKeyword,
  as: SyntaxKind.AsKeyword,
  asserts: SyntaxKind.AssertsKeyword,
  assert: SyntaxKind.AssertKeyword,
  bool: SyntaxKind.BooleanKeyword,
  boolean: SyntaxKind.BooleanKeyword,
  break: SyntaxKind.BreakKeyword,
  case: SyntaxKind.CaseKeyword,
  catch: SyntaxKind.CatchKeyword,
  class: SyntaxKind.ClassKeyword,
  continue: SyntaxKind.ContinueKeyword,
  const: SyntaxKind.ConstKeyword,
  constructor: SyntaxKind.ConstructorKeyword,
  declare: SyntaxKind.DeclareKeyword,
  default: SyntaxKind.DefaultKeyword,
  delete: SyntaxKind.DeleteKeyword,
  do: SyntaxKind.DoKeyword,
  else: SyntaxKind.ElseKeyword,
  enum: SyntaxKind.EnumKeyword,
  export: SyntaxKind.ExportKeyword,
  extends: SyntaxKind.ExtendsKeyword,
  false: SyntaxKind.FalseKeyword,
  finally: SyntaxKind.FinallyKeyword,
  for: SyntaxKind.ForKeyword,
  from: SyntaxKind.FromKeyword,
  function: SyntaxKind.FunctionKeyword,
  get: SyntaxKind.GetKeyword,
  if: SyntaxKind.IfKeyword,
  implements: SyntaxKind.ImplementsKeyword,
  import: SyntaxKind.ImportKeyword,
  in: SyntaxKind.InKeyword,
  int32: SyntaxKind.Int32Keyword,
  int64: SyntaxKind.Int64Keyword,
  instanceof: SyntaxKind.InstanceOfKeyword,
  interface: SyntaxKind.InterfaceKeyword,
  internal: SyntaxKind.InternalKeyword,
  is: SyntaxKind.IsKeyword,
  keyof: SyntaxKind.KeyOfKeyword,
  let: SyntaxKind.LetKeyword,
  long: SyntaxKind.LongKeyword,
  module: SyntaxKind.ModuleKeyword,
  namespace: SyntaxKind.NamespaceKeyword,
  never: SyntaxKind.NeverKeyword,
  new: SyntaxKind.NewKeyword,
  null: SyntaxKind.NullKeyword,
  object: SyntaxKind.ObjectKeyword,
  package: SyntaxKind.PackageKeyword,
  private: SyntaxKind.PrivateKeyword,
  protected: SyntaxKind.ProtectedKeyword,
  public: SyntaxKind.PublicKeyword,
  override: SyntaxKind.OverrideKeyword,
  out: SyntaxKind.OutKeyword,
  readonly: SyntaxKind.ReadonlyKeyword,
  global: SyntaxKind.GlobalKeyword,
  return: SyntaxKind.ReturnKeyword,
  set: SyntaxKind.SetKeyword,
  static: SyntaxKind.StaticKeyword,
  string: SyntaxKind.StringKeyword,
  super: SyntaxKind.SuperKeyword,
  switch: SyntaxKind.SwitchKeyword,
  Symbol: SyntaxKind.SymbolKeyword,
  this: SyntaxKind.ThisKeyword,
  throw: SyntaxKind.ThrowKeyword,
  true: SyntaxKind.TrueKeyword,
  try: SyntaxKind.TryKeyword,
  type: SyntaxKind.TypeKeyword,
  typeof: SyntaxKind.TypeOfKeyword,
  undefined: SyntaxKind.UndefinedKeyword,
  void: SyntaxKind.VoidKeyword,
  while: SyntaxKind.WhileKeyword,
  with: SyntaxKind.WithKeyword,
  yield: SyntaxKind.YieldKeyword,
  async: SyntaxKind.AsyncKeyword,
  await: SyntaxKind.AwaitKeyword,
  of: SyntaxKind.OfKeyword,
}

interface Lexeme {
  kind: SyntaxKind,
  value: string
}

export class Lexer {
  private position = 0

  constructor(
    private readonly text: string
  ) {}

  scan() {
    const lexemes: Lexeme[] = []

    while (this.position < this.text.length) {
      lexemes.push(this.getLexeme())
    }

    return lexemes
  }

  isWhitespaceLike(char: string) {
    switch (char) {
      case ' ':
      case '\t':
      case '\n':
      case '\r':
          return true
      default:
        return false
    }
  }

  isNumber(string: string) {
    return !isNaN(+string)
  }

  isIdentifier(string: string) {
    return !this.isNumber(string[0]) && !this.isToken(string)
  }

  isToken(string: string) {
    return !!string.match(/[(){}!@?%^&*~`'";:.,-+|/\\<>=\n\r\t]/g)
  }

  private getLexeme(): Lexeme {
    if (this.isToken(this.getCurrentChar())) {
      const fullTokenText = this.readUntil((char) => this.isIdentifier(char) || this.isWhitespaceLike(char))

      if (!(fullTokenText in textToToken)) {
        throw new Error(`Unexpected token ${fullTokenText} at position ${this.position}`)
      }

      return {
        kind: textToToken[fullTokenText as keyof typeof textToToken],
        value: fullTokenText,
      }
    }

    if (this.isNumber(this.getCurrentChar()))
      return {
        kind: SyntaxKind.NumberLiteral,
        value: this.readUntil((char) => !this.isNumber(char))
      }

    if (!this.isIdentifier(this.getCurrentChar()))
      throw new Error(`Unknown token '${this.getCurrentChar()}' at position ${this.position}`)

    const fullIdentifierText = this.readUntil((char) => this.isToken(char) || !this.isWhitespaceLike(char)).replaceAll(/\s+/g, '')

    const keyword = textToKeyword[fullIdentifierText as keyof typeof textToKeyword]

    return {
      kind: keyword || SyntaxKind.Identifier,
      value: fullIdentifierText,
    }
  }

  private getCurrentChar() {
    return this.text.charAt(this.position)
  }

  private readUntil(pattern: (char: string) => boolean): string {
    let result = ''

    for (let char = this.getCurrentChar(); !pattern(char); this.position++, char = this.getCurrentChar()) {
      result += char
    }

    return result
  }
}
