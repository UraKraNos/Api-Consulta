
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Personal
 */
public class appappis {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //https://gsi.fly.dev/characters/?page=1
        //https://gsi.fly.dev/characters/search?vision=Hydro&weapon=Catalyst
        try{
            URL url = new URL ("https://gsi.fly.dev/characters/?page=1");
            URL urls = new URL ("https://gsi.fly.dev/characters/search?vision=Hydro&weapon=Catalyst");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();
            int responseCode = conn.getResponseCode();
            if (responseCode != 200) {
                throw new RuntimeException("Ocurrio un error "+responseCode);
            }else{
                StringBuilder informationString = new StringBuilder();
                Scanner scanner = new Scanner(url.openStream());
                
                while(scanner.hasNext()){
                    informationString.append(scanner.nextLine());
                }
                scanner.close();
                System.out.println(informationString);
            }
        }catch(Exception e){
            e.printStackTrace();
        }        
        
    }
    
}
