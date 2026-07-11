function TOOLOMAT_DOM(dom){
    const TAGS = dom.TAGS;
    const DEPTH = dom.DEPTH;

    const Φ = TAGS;
    const φ = TAGS * DEPTH;
    const φ2 = DEPTH * DEPTH;
    const φ∞ = TAGS * DEPTH * 6;

    const MASS = φ;

    return {
        Φ,
        φ,
        φ2,
        φ∞,
        MASS,
        M5: [Φ, φ, φ2, φ∞, MASS]
    };
}
