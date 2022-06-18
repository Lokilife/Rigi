import { Lexer } from './lexer'

const exampleForTest = `
const name: string = 'Test'

console.log(test)
console.log("Test")

/*
{
  type: "main",
  body: [
    {
      type: AST.Declaration,
      declarationType: 'const',
      name: 'name',
      varType: StdLib.string,
      value: 'Test',
    },
    {
      type: AST.Call,
      context: 'console',
      name: 'log',
      args: [{
        type: AST.Identifier,
        name: 'test',
      }]
    },
    {
      type: AST.Call,
      context: 'console',
      name: 'log',
      args: [{
        type: AST.String,
        name: "Test",
      }]
    },
  ]
}
*/
`

const lexerInstance = new Lexer(exampleForTest)
const result = lexerInstance.scan()
console.log(result)
