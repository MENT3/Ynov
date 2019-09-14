/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connexion;

/**
 *
 * @author Clement
 */
public class User {
    private String mail;
    private String passwd;
    
    public User(String m, String p){
        mail = m;
        passwd = p;
    }

    @Override
    public String toString() {
        return mail + " -> " + passwd; //To change body of generated methods, choose Tools | Templates.
    }
    
}
