class Description {
    constructor(personality, ideals, bonds, flaws){
        this.personality = personality;
        this.ideals = ideals;
        this.bonds = bonds;
        this.flaws = flaws;
    }
    setPersonality(text){
        this.personality = text;
    }
    setIdeals(text){
        this.ideals = text;
    }
    setBonds(text){
        this.bonds = text;
    }
    setFlaws(text){
        this.flaws = text;
    }
}
export default Description