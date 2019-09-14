/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jour1;
import jour1.userAdress;

/**
 *
 * @author Clement
 */
public class User {
    public String lastname;
    public String firstname;
    userAdress adressUser = new userAdress();
    
    public void presentation(){
        System.out.println("Bonjour,je m'appel : " + lastname + " " + firstname);
        if (adressUser.adress != null){
         System.out.println("Et j'habite à l'adresse suivant : " + adressUser.adress);   
        }
        else{}
    }
    
    public String fullName;
    
    public String nameUser(){
        fullName = lastname + " " + firstname;
        return fullName;
    }
    
}
