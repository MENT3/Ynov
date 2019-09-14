/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connexion;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author Clement
 */
public class Connexion {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner s = new Scanner(System.in);
        System.out.println("Email : ");
        String mail = s.nextLine();
        
        System.out.println("Mot de passe :");
        String pwd = s.nextLine();
        
        User u1 = new User(mail, pwd);
        
        System.out.println(u1);
        
        ArrayList<String> s2 = new ArrayList<>();
        s2.add("clubs");
        s2.add("remes");
        s2.add("sacres");
        System.out.println(s2);
    }
    
}
