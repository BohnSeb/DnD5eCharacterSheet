class Progression {
    constructor(xp){
        this.xp = xp;
        this.lvl = calcLevel(xp);
    }
    calcLevel(xp){
        if (xp >= 355000){return 20;}
        if (xp >= 305000){return 19;}
        if (xp >= 265000){return 18; }
        if (xp >= 225000){return 17;}
        if (xp >= 195000){return 16;}
        if (xp >= 165000){return 15;}
        if (xp >= 140000){return 14;}
        if (xp >= 120000){return 13;}
        if (xp >= 100000){return 12;}
        if (xp >= 85000){return 11;}
        if (xp >= 64000){return 10;}
        if (xp >= 48000){return 9;}
        if (xp >= 34000){return 8;}
        if (xp >= 23000){return 7;}
        if (xp >= 14000){return 6;}
        if (xp >= 6500){return 5;}
        if (xp >= 2700){return 4;}
        if (xp >= 900){return 3;}
        if (xp >= 300){return 2;}
        return 1;
    }
    setXp(xp){
        if (xp < 0){throw new Error("Invalid XP Amount")}
        this.xp = xp;
        this.lvl = calcLevel(xp);
    }
    setLevel(lvl){
        if (lvl <= 0 || lvl > 20){throw new Error("invalid Character Level");}
        this.lvl = lvl;
        this.xp = calcXp(lvl);
    }
    calcXp(lvl){
        if (lvl == 1){return 0;}
        if (lvl == 2){return 300;}
        if (lvl == 3){return 900;}
        if (lvl == 4){return 2700;}
        if (lvl == 5){return 6500;}
        if (lvl == 6){return 14000;}
        if (lvl == 7){return 23000;}
        if (lvl == 8){return 34000;}
        if (lvl == 9){return 48000;}
        if (lvl == 10){return 64000;}
        if (lvl == 11){return 85000;}
        if (lvl == 12){return 100000;}
        if (lvl == 13){return 120000;}
        if (lvl == 14){return 140000;}
        if (lvl == 15){return 165000;}
        if (lvl == 16){return 195000;}
        if (lvl == 17){return 225000;}
        if (lvl == 18){return 265000;}
        if (lvl == 19){return 305000;}
        if (lvl == 20){return 355000;}
        
    }
    getProficiency(){
        if (this.lvl >= 17){return 6;}
        if (this.lvl >= 13){return 5;}
        if (this.lvl >= 9){return 4;}
        if (this.lvl >= 5){return 3;}
        return 2;
    }
}
export default Progression;