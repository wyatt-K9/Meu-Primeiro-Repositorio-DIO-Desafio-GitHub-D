programa
{	
		inteiro matriz[3][3]
		inteiro lin, col
		funcao inicio()
	{
		para(lin = 0; lin <= 2; lin++) {
			para(col = 0; col <=2; col++) {
				escreva("Digite um número: \n")
				leia(matriz[lin][col])
		}
	}
		para(lin = 0; lin <= 2; lin++) {
			para(col = 0; col <=2; col++) {
				se(col < 2) {
					escreva(matriz[lin][col] + " ")
			}
				senao {
					escreva(matriz[lin][col] + "\n") 
				}			
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 30; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 3, 10, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */