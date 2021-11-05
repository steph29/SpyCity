"use strict";
exports.__esModule = true;
exports.Mission = void 0;
var Mission = /** @class */ (function () {
    function Mission(id, title, type, description, callsign, countryId, agents, contact, target, statusId, hideoursId, specialitiesId, dateOfBeginning, dateOfEnd) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.callsign = callsign;
        this.countryId = countryId;
        this.agents = agents;
        this.contact = contact;
        this.target = target;
        this.statusId = statusId;
        this.hideoursId = hideoursId;
        this.specialitiesId = specialitiesId;
        this.dateOfBeginning = dateOfBeginning;
        this.dateOfEnd = dateOfEnd;
    }
    return Mission;
}());
exports.Mission = Mission;
