/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jour1;

/**
 *
 * @author Clement
 */
public class Jour1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        User user1= new User();
        
        user1.lastname = "Clement";
        user1.firstname = "RAMOS";
        user1.presentation();
        
        user1.adressUser.adress = "3 rue de la rue à Paris";
        user1.presentation();
        
    }
    
}
