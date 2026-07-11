function RAUM_KERNEL(raum){
    const ID = {
        ZUG: raum.ZUG,
        BLATT: raum.BLATT,
        STATUS: raum.STATUS,
        LEGO: raum.LEGO,
        TETRIZ: raum.TETRIZ,
        ARG: raum.ARG
    };

    const DATE = {
        IST: raum.IST,
        SOLL: raum.SOLL,
        NEU: raum.NEU,
        IST2: raum.IST2,
        SOLL2: raum.SOLL2
    };

    raum.RESULT = (raum.STATUS === "REAL") ? raum.IST : raum.NEU;

    return { ID, DATE, ...raum };
}
