/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exercicejour2;

/**
 *
 * @author Clement
 */
public class Voiture {
    public String marqueVoiture;
    public String modele;
    public String prix;


    public Voiture(String m, String md, String p){
        marqueVoiture = m;
        Marque M1 = new Marque(marqueVoiture);
        modele = md;
        prix = p;
    }

    @Override
    public String toString() {
        return marqueVoiture + " " + modele + " " + prix; //To change body of generated methods, choose Tools | Templates.
    }
    
}
