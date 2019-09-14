/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicejour2;

import java.util.Scanner;

/**
 *
 * @author Clement
 */
public class ExerciceJour2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Voiture v1 = new Voiture("Tesla","Model S","200000 $");
        System.out.println(v1);
        
        
        Scanner s = new Scanner(System.in);
        System.out.println("Prénom :");
        String name = s.nextLine();
        
        System.out.println("Nom :");
        String name2 = s.nextLine();
        
        System.out.println("Je m'appel " + name + " " +  name2);
    }
    
}
