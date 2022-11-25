fr = open("media/links/allLinks.txt", "r")
count = 0
for line in fr:
    fw = open("media/links/R" + str(count) + ".txt", "w")
    count += 1
    fw.write(line)