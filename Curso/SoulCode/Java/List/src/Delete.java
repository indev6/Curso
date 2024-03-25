import java.util.ArrayList;
import java.util.List;

public class Delete {
    
    public static void main(String[] args) throws Exception {
        
        // Declarando a list
        List<String> nomelist = new ArrayList<String>();
        
        // Adicionando a Lista
        nomelist.add("Ola");
        nomelist.add("Curso java");
        nomelist.add("Igor");

        for(String valor : nomelist) {
            System.out.println(valor);  
        }

        // //Ordenando a list
        // Collections.sort(nomelist);
        // for(String valor : nomelist) {
        //     System.out.println(valor);  
        // }

        // Removendo item da list
        nomelist.remove(0);
        for(String valor : nomelist) {
            System.out.println(valor);  
        }

        // Removendo todos os itens
        nomelist.removeAll(nomelist);
        for(String valor : nomelist) {
            System.out.println(valor);  
        }

    }
}
