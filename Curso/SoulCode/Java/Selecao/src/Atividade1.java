
// Receba um programa em java que recebe um inteiro e diga se é par ou impar

import java.util.Scanner;

public class Atividade1 {

    private static Scanner ler = new Scanner(System.in);

    public static void main(String[] args) throws Exception {

        int n1;
       
        System.out.println("Digite um numero: ");
        n1 = ler.nextInt();

        if (n1 % 2 != 0) {
            System.out.println("O numero é impar");
        } else {
            System.out.println("O numero é par");
        }
        
    }
}
