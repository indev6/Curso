
//Faça um programa que calcule a soma a substração a divisão e a multiplicação de dios numero

import java.util.Scanner;

public class atividade3 {

    private static Scanner ler = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        
        double num1, num2, soma, mult, div, sub;

        System.out.println("Digite um numero: ");
        num1 = ler.nextDouble();
        System.out.println("Digite outro numero: ");
        num2 = ler.nextDouble();

        soma = num1 + num2;
        mult = num1 * num2;
        div = num1 / num2;
        sub = num1 - num2;

        System.out.println(soma);
        System.out.println(sub);
        System.out.println(mult);
        System.out.println(div);

    }

}
