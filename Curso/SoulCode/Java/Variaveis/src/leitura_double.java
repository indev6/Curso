import java.util.Scanner;

public class leitura_double {

    private static Scanner ler = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        
        double numero;
        
        System.out.println("Digite um numero");
        numero = ler.nextDouble();

        System.out.println("o numero digitado é " + numero);
    }
}

