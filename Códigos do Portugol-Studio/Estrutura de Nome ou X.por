programa
{
	inclua biblioteca Matematica --> M
	inclua biblioteca Util -->U
	cadeia nome
	cadeia nome2
	
	funcao inicio()
	{

	enquanto (verdadeiro) {
		escreva("Digite seu nome, ou x para sair: ")
		leia(nome)
		se (nome == "x") {
			pare
		}
		escreva("Bem-Vindo, " + nome + "\n")
		}
		escreva("\nAté logo! " + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 323; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */