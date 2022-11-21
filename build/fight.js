"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heal = exports.attack = void 0;
function attack(attacker, defenser) {
    console.log(`${attacker.getName.toUpperCase()} attacks ${defenser.getName} for ${attacker.getStr} damages`);
    defenser.setHp = defenser.getHp - attacker.getStr;
    return defenser;
}
exports.attack = attack;
function heal(character) {
    console.log(`${character.getName.toUpperCase()} heals for ${character.getMaxHp / 2} hp`);
    character.setHp = (character.getHp + (character.getMaxHp / 2));
    return character;
}
exports.heal = heal;
