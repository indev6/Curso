
// Leia um numero inteiro e escreva a soma dos numero pares do 2 até ele

import java.util.Scanner;

public class Atividade3 {

    private static Scanner leitura = new Scanner(System.in);
    public static void main(String[] args) {
        
        int n1, soma = 0;
        
        System.out.println("Digite um numero: ");
        n1 = leitura.nextInt();

        for (int i = 0; i < n1; i++) {
    
        if (n1 % 2 == 0) {

            soma = soma + i;

        } else {

        } 
    }
        System.out.println(soma);
        
    }
}
