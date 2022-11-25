fr = open("media/texts/allTexts.txt", "r")
count = 0
for line in fr:
    fw = open("media/texts/R" + str(count) + ".txt", "w")
    count += 1
    fw.write(line)