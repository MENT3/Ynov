from random import *
import os
import sys
print ("* le Juste Prix *")
print("")
print("Choississez votre mode de jeu : ")
print("1. Mode standard")
print("2. Mode hardcore ( 10 coups max )")
print("3. Mode personnalisé")
menu = int(input())
os.system("pause")
if menu > 3 :
    print("Erreur, nombre trop haut, merci de rentrez un nombre entre 1 et 3")
    sys.exit()
elif menu == 1 :
    print ("Le nombre a trouver est compris entre 1 000 et 10 0000 €")
    nb = randint(1000, 10000)
    essai = 0
    coup = 0
    while essai != nb :
        essai = int(input())
        if essai > nb :
            coup += 1
            print ("C'est - !")
        elif essai < nb :
            coup += 1
            print("C'est + !")
    coup += 1
    print("Bravo, vous avez gagné en ", coup, "coups !")
elif menu == 2 :
    print ("Le nombre a trouver est compris entre 1 000 et 10 0000 €")
    nb = randint(1000, 10000)
    essai = 0
    coup = 10
    while essai != nb :
        essai = int(input())
        if essai > nb :
            coup -= 1
            print ("C'est - !")
            print ("Il vous reste ", coup, "coups !")
        elif essai < nb :
            coup -= 1
            print("C'est + !")
            print ("Il vous reste ", coup, "coups !")
        if coup == 0 :
            print("Vous avez perdu, le nombre a trouver était : ", nb)
            sys.exit()
    print("Bravo, vous avez réussi à gagner en moins de 10 coups !")
elif menu == 3 :
    print("Donnez l'intervalle du nombre a trouver ( le plus petit ) :")
    it1 = int(input())
    print("Donnez l'intervalle du nombre a trouver ( le plus grand ) :")
    it2 = int(input())
    print ("Le nombre a trouver est compris entre ", it1," et ", it2,"€")
    nb = randint(it1, it2)
    essai = 0
    coup = 0
    while essai != nb :
        essai = int(input())
        if essai > nb :
            coup += 1
            print ("C'est - !")
        elif essai < nb :
            coup += 1
            print("C'est + !")
    coup =+ 1
    print("Bravo, vous avez gagné en ", coup, "coups !")
