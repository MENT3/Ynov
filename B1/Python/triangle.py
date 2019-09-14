def triangle(tailletriangle) :
    star = "*"
    count = 0
    while True :
        print(star)
        star += "*"
        count += 1
        if count == tailletriangle :
            break

triangle(9)
