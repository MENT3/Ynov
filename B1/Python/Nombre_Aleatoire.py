import random

i = 1

def GeneretRandom() :
    result = random.random()
    lettre = chr(round((122 - 97)* result + 97))
    return lettre

def RandomLeter(longueurMot) :
    mot = ""
    listeLettre = []
    while longueurMot > 0 :
        listeLettre.append(GeneretRandom())
        longueurMot -= 1
        mot += listeLettre[0]
        del listeLettre[0]
    print(mot)

while i < 1000000 :
    RandomLeter(5)
    i += 1
