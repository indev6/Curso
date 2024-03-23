
// Leia a idade de 5 pessoas e exiba a média das idades

import java.util.Scanner;

public class Atividade4 {

    private static Scanner ler = new Scanner(System.in);
    public static void main(String[] args) {
        
        int n1 = 0, media, soma = 0;

        for (int i = 0; i < 5; i++) {

        System.out.println("Digite uma idade: ");
        n1 = ler.nextInt();
            soma = soma + n1;
            
        }

        media = soma / 5;
        System.out.println(media);
        System.out.println(soma);
    }
}
