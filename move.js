function MOVE(raum){
    if(raum.STATUS === "REAL") return raum.IST;
    if(raum.STATUS === "TMP") return raum.NEU;
    return null;
}
