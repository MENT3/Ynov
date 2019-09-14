/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package carnetadress;

/**
 *
 * @author Clement
 */
public class Adress {
    public String num;
    public String rue;
    public String pays;
    public String ville;
    public String codePostal;
    
    Adress(String n, String r, String p, String v, String cp){
        num = n;
        rue = r;
        pays = p;
        ville = v;
        codePostal = cp;
    }
}
