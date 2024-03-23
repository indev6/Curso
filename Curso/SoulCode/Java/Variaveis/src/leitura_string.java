import java.util.Scanner;

public class leitura_string {

    private static Scanner ler = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        
        
        String nome;

        System.out.println("Digite um nome ");
        nome = ler.nextLine();

        System.out.println("o numero digitado é " + nome);
    }
}
