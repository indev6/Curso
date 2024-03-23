
// Crie uma variavel que some dois valores informados pelo usuario

import java.util.Scanner;

public class Atividade1 {

    private static Scanner ler = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        
        int num1, num2, resultado;

        System.out.println("Digite um numero: ");
        num1 = ler.nextInt();
        System.out.println("Digite outro numero: ");
        num2 = ler.nextInt();

        resultado = num1 + num2;

        System.out.println("A soma dos valores é :" + resultado);

    }
}
