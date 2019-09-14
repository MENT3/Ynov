def pair (modulo) :
    partie_0 = ""
    partie_pair = "**"
    partie_impair = "*"
    partie_1 = ""
    temp = ""
    testmodulo = modulo%2
    if modulo < 2 :
        print("Le nomnbre doit etre supperieur a 2.")

    else :
        if testmodulo == 0 :
            modulo -= 2
            temp = modulo/2
            while temp > 0 :
                partie_0 += "#"
                partie_1 += "#"
                temp -= 1
            print(partie_0 + partie_pair + partie_1)
        else :
            modulo -= 1
            temp = modulo/2
            while temp > 0 :
                partie_0 += "#"
                partie_1 += "#"
                temp -= 1
            print(partie_0 + partie_impair + partie_1)

pair(9)
