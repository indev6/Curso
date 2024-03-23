
// Escreva um programa que le dois valores inteiros e escreva o maior deles 

import java.util.Scanner;

public class Atividade2 {

    private static Scanner ler = new Scanner(System.in);

    public static void main(String[] args) {

        int n1, n2;
        
        System.out.println("Digite um valor: ");
        n1 = ler.nextInt();
        System.out.println("Digite outro valor: ");
        n2 = ler.nextInt();

        System.out.println((n1 > n2) ? "O maior valor é " + n1 : "O maior valor é " + n2);
        
        // forma direta de fazer sem usar if e else
    }

}
