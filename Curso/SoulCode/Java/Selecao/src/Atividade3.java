
// Escreva uma programa pra dizer se a pessoa é maior ou menor de idade

import java.util.Scanner;


public class Atividade3 {

    private static Scanner ler = new Scanner(System.in);
    
    public static void main(String[] args) {
        
        int idade;

        System.out.println("Digite sua idade: ");
        idade = ler.nextInt();

        System.out.println((idade >= 18) ? "Voce é maior de idade" : "Voce é menor de idade");
    }

}
