import java.util.Scanner;

// /*1- Crie uma classe que contenha uma declaração de variavel inteira */

// public class exercicios {
//     public static void main(String[] args) throws Exception {
    
//     int numero = 10;
//     System.out.println(numero);
//     }
// }

// /*2- Crie um programa em que voce declare a variavel string e atribua valor */

// public class exercicios {
//     public static void main(String[] args) throws Exception {
    
//     String nome = "Igor";
//     System.out.println(nome);
//     }
// }

// /*3- Crie variaveis do tipo int, double e bollean e atribua valores */

// public class exercicios {
//     public static void main(String[] args) throws Exception {
    
//     int numero = 11;
//     double valor = 12.0;
//     boolean cond = true;

//     System.out.println(numero);
//     System.out.println(valor);
//     System.out.println(cond);
    
//     }
// }

// /*4- Solicite ao usuario um numero e atribua a uma variavel inteira */


// public class exercicios {

//     private static Scanner ler = new Scanner(System.in);

//     public static void main(String[] args) throws Exception {

//         int numero;
//         System.out.println("Digite um numero: ");
//         numero = ler.nextInt();

//         System.out.println("o numero digitado é " + numero);

//     }
// }
// /*5- Solicite ao usuario que digite seu nome e sobre nome, ambos devem ser salvas em 
// variaveis diferentes e depois mostradas junstas */

public class exercicios {

    private static Scanner ler1 = new Scanner(System.in);

    public static void main(String[] args) throws Exception {

        String primeironome;
        String segundonome;

        System.out.println("Digite seu primeiro nome: ");
        primeironome = ler1.nextLine();
        System.out.println("Digite seu sobrenome: ");
        segundonome = ler1.nextLine();

        System.out.println("Seu nome é: " + primeironome + " " + segundonome);
    }
}