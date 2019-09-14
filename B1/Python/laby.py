global x2, cave
cave = [
"▄▄▄▄▄▄",
"█   *█",
"█ ████",
"█    █",
"████ █",
"█☺   █",
"▀▀▀▀▀▀",
]
x1 = 1
x2 = 1
y1 =5
y2 = 5
corresp = 1
ligne = 4

print("bienvenue dans ma cave gamin!")

def AffichLaby() :
	for element in cave :
		print(element)

def DeplacementEnX(direction) :
	global x2, x1
	if direction == "gauche" :
		x2-=1
	elif direction == "droite" :
		x2+=1
	if cave[y1][x2] == "█" :
		print("Impossible de se déplacer ici")
		x2 = x1
	else :
		resultat = cave[y1].replace("☺"," ")
		cave[y1] = resultat
		resultat = cave[y1].replace(" ","☺",x2)
		cave[y1] = resultat
		resultat = cave[y1].replace("☺"," ",x2-1)
		cave[y1] = resultat
		x1 = x2
	return None
def DeplacementEnHaut() :
	global ligne, corresp
	if cave[ligne][corresp] == "█" :
		print("Impossible de se déplacer ici")
	else :
		resultat = cave[ligne+1].replace("☺"," ")
		cave[ligne+1] = resultat
		resultat = cave[ligne].replace(" ","☺",1)
		cave[ligne] = resultat
		ligne+=1
		return None
AffichLaby()
DeplacementEnHaut()
AffichLaby()
