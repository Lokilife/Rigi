import { SyntaxKind } from './enums/SyntaxKind'

const textToToken = {
  '{': SyntaxKind.OpenBraceToken,
  '}': SyntaxKind.CloseBraceToken,
  '(': SyntaxKind.OpenParenToken,
  ')': SyntaxKind.CloseParenToken,
  '[': SyntaxKind.OpenBracketToken,
  ']': SyntaxKind.CloseBracketToken,
  '.': SyntaxKind.DotToken,
  '...': SyntaxKind.DotDotDotToken,
  ';': SyntaxKind.SemicolonToken,
  ',': SyntaxKind.CommaToken,
  '<': SyntaxKind.LessThanToken,
  '>': SyntaxKind.GreaterThanToken,
  '<=': SyntaxKind.LessThanEqualsToken,
  '>=': SyntaxKind.GreaterThanEqualsToken,
  '==': SyntaxKind.EqualsEqualsToken,
  '!=': SyntaxKind.ExclamationEqualsToken,
  '===': SyntaxKind.EqualsEqualsEqualsToken,
  '!==': SyntaxKind.ExclamationEqualsEqualsToken,
  '=>': SyntaxKind.EqualsGreaterThanToken,
  '+': SyntaxKind.PlusToken,
  '-': SyntaxKind.MinusToken,
  '**': SyntaxKind.AsteriskAsteriskToken,
  '*': SyntaxKind.AsteriskToken,
  '/': SyntaxKind.SlashToken,
  '%': SyntaxKind.PercentToken,
  '++': SyntaxKind.PlusPlusToken,
  '--': SyntaxKind.MinusMinusToken,
  '<<': SyntaxKind.LessThanLessThanToken,
  '>>': SyntaxKind.GreaterThanGreaterThanToken,
  '&': SyntaxKind.AmpersandToken,
  '|': SyntaxKind.BarToken,
  '!': SyntaxKind.ExclamationToken,
  '&&': SyntaxKind.AmpersandAmpersandToken,
  '||': SyntaxKind.BarBarToken,
  '?': SyntaxKind.QuestionToken,
  '?.': SyntaxKind.QuestionDotToken,
  ':': SyntaxKind.ColonToken,
  '=': SyntaxKind.EqualsToken,
  '+=': SyntaxKind.PlusEqualsToken,
  '-=': SyntaxKind.MinusEqualsToken,
  '*=': SyntaxKind.AsteriskEqualsToken,
  '@': SyntaxKind.AtToken,
  '`': SyntaxKind.BacktickToken,
  '//': SyntaxKind.SlashSlashToken,
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
  type: SyntaxKind
  value: string
}

export class Lexer {
  private position = 0

  constructor(private readonly text: string) {}

  scan() {
    const lexemes: Lexeme[] = []

    while (this.position != this.text.length - 1) {
      lexemes.push(this.getLexeme())
    }

    return lexemes
  }

  isEOF(char: string) {
    switch (char) {
      case '\t':
      case '\n':
      case '\r':
        return true
      default:
        return false
    }
  }

  isWhitespaceLike(char: string) {
    return !!char.match(/\s/g)
  }

  isOperator(string: string) {
    return !!string.match(/[+\-/*%!,?&|=<>]/g)
  }

  isNumber(string: string) {
    return !!string.match(/[0-9]/g)
  }

  isStringEdge(char: string) {
    switch (char) {
      case "'":
      case '"':
        return true
      default:
        return false
    }
  }

  isIdentifier(string: string) {
    return (
      !this.isNumber(string[0]) &&
      !this.isToken(string) &&
      !this.isOperator(string) &&
      !this.isWhitespaceLike(string)
    )
  }

  isToken(string: string) {
    return !!string.match(/[(){}@^~`;:.|]/g)
  }

  private getLexeme(): Lexeme {
    if (this.isWhitespaceLike(this.getCurrentChar()))
      this.readUntil((char) => !this.isWhitespaceLike(char))

    if (this.isToken(this.getCurrentChar())) {
      const fullTokenText = this.readUntil((char) => !this.isToken(char))

      if (!(fullTokenText in textToToken)) {
        throw new Error(
          `Unexpected token ${fullTokenText} at position ${this.position}`,
        )
      }

      return {
        type: textToToken[fullTokenText as keyof typeof textToToken],
        value: fullTokenText,
      }
    }

    if (this.isNumber(this.getCurrentChar())) {
      return {
        type: SyntaxKind.NumberLiteral,
        value: this.readUntil((char) => !this.isNumber(char)),
      }
    }

    if (this.isStringEdge(this.getCurrentChar())) {
      this.position++
      const result = {
        type: SyntaxKind.StringLiteral,
        value: this.readUntil((char) => this.isStringEdge(char)),
      }
      this.position++
      return result
    }

    if (this.getCurrentChar() == '/') {
      const nextChar = this.text[this.position + 1]

      if (nextChar == '/')
        return {
          type: SyntaxKind.SlashSlashToken,
          value: this.readUntil(this.isEOF),
        }

      if (nextChar == '*') {
        this.position += 2
        const result = {
          type: SyntaxKind.MultilineComment,
          value: this.readUntil(
            (char) => char == '*' && this.text[this.position + 1] == '/',
          ),
        }
        this.position += 2
        return result
      }
    }

    if (this.isOperator(this.getCurrentChar())) {
      const fullOperatorText = this.readUntil((char) => !this.isOperator(char))

      if (!(fullOperatorText in textToToken)) {
        throw new Error(
          `Unexpected token ${fullOperatorText} at position ${this.position}`,
        )
      }

      return {
        type: textToToken[fullOperatorText as keyof typeof textToToken],
        value: fullOperatorText,
      }
    }

    if (!this.isIdentifier(this.getCurrentChar())) {
      throw new Error(
        `Unknown token '${this.getCurrentChar()}' at position ${this.position}`,
      )
    }

    const fullIdentifierText = this.readUntil(
      (char) => !this.isIdentifier(char),
    ).replaceAll(/\s+/g, '')

    const keyword =
      textToKeyword[fullIdentifierText as keyof typeof textToKeyword]

    return {
      type: keyword || SyntaxKind.Identifier,
      value: fullIdentifierText,
    }
  }

  private getCurrentChar() {
    return this.text.charAt(this.position)
  }

  private readUntil(pattern: (char: string) => boolean): string {
    let result = ''

    for (
      let char = this.getCurrentChar();
      !pattern(char);
      this.position++, char = this.getCurrentChar()
    ) {
      result += char
    }

    return result
  }
}
