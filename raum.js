RAUM_KERNEL(raum):
    ID = (ZUG, BLATT, STATUS, LEGO, TETRIZ, ARG)
    DATE = (IST, SOLL, NEU, IST2, SOLL2)

    if raum.STATUS == "REAL":
        raum.RESULT = raum.IST
    else:
        raum.RESULT = raum.NEU

    return raum
