
// Faça um programa que verifique se a letra é vogal ou consoante

import java.util.Scanner;

public class Atividade4 {

    private static Scanner ler = new Scanner(System.in);

    public static void main(String[] args) {
        
        char letra;

        System.out.println("Digite uma letra: ");
        letra = ler.next().charAt(0);

        if((letra == 'a') || (letra == 'e') || (letra == 'i') || (letra == 'o') || (letra == 'u')) {
        System.out.println("A letra é uma vogal");
        } else {
        System.out.println("A letra é uma consoante");
    }
}

}
