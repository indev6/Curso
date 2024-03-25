
import java.util.ArrayList;
import java.util.List;

public class Set {
    
    public static void main(String[] args) throws Exception {
        
        // Declarando a list
        List<String> nomelist = new ArrayList<String>();
        
        // Adicionando a Lista
        nomelist.add("Ola");
        nomelist.add("curso java");
        nomelist.add("Igor");
        

        // visualizando a lista

        System.out.println("____METODO GET_____");
        System.out.println(nomelist.get(2));

        //"____METODO Set_____"); //Modificando a list
        nomelist.set(0, "ola2");
        
        
        for(String valor : nomelist) {
            System.out.println(valor);  
        }
        
        System.out.println("____numero Elementos_____"); 
        System.out.println((nomelist.size()));


    }
    
}
