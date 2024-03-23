import java.util.Scanner;

public class leitura_int {

    private static Scanner ler = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        
        
        int numero;
        System.out.println("Digite um numero");
        numero = ler.nextInt();

        System.out.println("o numero digitado é " + numero);
    }
}