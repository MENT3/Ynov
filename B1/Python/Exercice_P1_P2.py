import random

def Compare(p1,p2) :
    if p1 > p2 :
        return print("P1 est pus grand à " + str(p1) + " contre " + str(p2))
    elif p1 == p2 :
        return print("P1 est égal à P2 avec comme valeur " + str(P1))
    else :
        return print("P2 est pus grand à " + str(p2) + " contre " + str(p1))

def GenereRandom(mini, maxi) :
    result = random.random()
    return round((maxi - mini)* result + mini)


Compare(GenereRandom(1,100),GenereRandom(1,100))
