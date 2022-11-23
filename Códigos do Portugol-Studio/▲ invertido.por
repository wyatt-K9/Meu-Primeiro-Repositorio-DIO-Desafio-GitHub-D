programa
{
	inteiro espacos = 25
	
	funcao inicio()
	{
		escreva("Olá, Seja Bem-Vindo Sr!\n")
	para(inteiro asteriscos = 15; asteriscos >0; asteriscos--) {
		para(inteiro auxEsp = espacos; auxEsp > 0; auxEsp--) {
			escreva(" ")
		}
		para(inteiro auxAst = asteriscos; auxAst > 0; auxAst--) {
			escreva("*")
		}
		asteriscos--
		espacos ++
		escreva("\n")
          
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 94; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */