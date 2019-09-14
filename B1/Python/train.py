

words = input("Ecrire un mot :")

character = input("Ecrire une lettre :")

if character in words :
    print('Il y a bien un \'',character.upper(), '\' dans la variable recherche')
else :
    print('Il n\'y a pas de \'' , character.upper(), '\' dans la variable recherche')
