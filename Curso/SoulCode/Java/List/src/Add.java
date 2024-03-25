
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
public class Add {

    private static Scanner ler = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        
        // Declarando a list
        List<String> nomelist = new ArrayList<String>();
        //List<Integer> nomelist2 = new ArrayList<Integer>();
        String n;
        
        // Adicionando a Lista
        nomelist.add("Ola");
        nomelist.add("curso java");
        
        for(int i = 0; i < 3; i++) {
        System.out.println("Digite um nome");
        n = ler.nextLine();
        nomelist.add(n); }

        // visualizando a lista

        for(String valor : nomelist) {
            System.out.println(valor);
            
        }
        
        System.out.println((nomelist.size()));


    }
    
}
