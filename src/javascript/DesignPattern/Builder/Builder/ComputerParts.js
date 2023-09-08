"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memorySizes = exports.memoryTypes = exports.powersupplys = exports.gpus = exports.rams = exports.mainboards = exports.cpus = exports.computertypes = void 0;
var computertypes;
(function (computertypes) {
    computertypes["CUSTOM"] = "CUSTOM COMPUTER";
    computertypes["GAMINGPC"] = "GAMING COMPUTER";
    computertypes["OFFICEPC"] = "OFFICE COMPUTER";
    computertypes["LAPTOP"] = "LAPTOP";
})(computertypes || (exports.computertypes = computertypes = {}));
var cpus;
(function (cpus) {
    cpus["INTEL"] = "INTEL";
    cpus["AMD"] = "AMD";
})(cpus || (exports.cpus = cpus = {}));
var mainboards;
(function (mainboards) {
    mainboards["GIGABYTE"] = "GIGABYTE";
    mainboards["ASUS"] = "ASUS";
    mainboards["MSI"] = "MSI";
})(mainboards || (exports.mainboards = mainboards = {}));
var rams;
(function (rams) {
    rams["16GB"] = "16 GB";
    rams["8GB"] = "8 GB";
    rams["4GB"] = "4 GB";
})(rams || (exports.rams = rams = {}));
var gpus;
(function (gpus) {
    gpus["GFORCE"] = "GFORCE EXPERIENCE";
    gpus["AMD"] = "AMD";
    gpus["INTEL"] = "INTEL";
})(gpus || (exports.gpus = gpus = {}));
var powersupplys;
(function (powersupplys) {
    powersupplys["1200WATT"] = "1200 WATT";
    powersupplys["800WATT"] = "800 WATT";
    powersupplys["600WATT"] = "600 WATT";
})(powersupplys || (exports.powersupplys = powersupplys = {}));
var memoryTypes;
(function (memoryTypes) {
    memoryTypes["SSD"] = "SSD";
    memoryTypes["HDD"] = "HDD";
})(memoryTypes || (exports.memoryTypes = memoryTypes = {}));
var memorySizes;
(function (memorySizes) {
    memorySizes["1TB"] = "1 Terrabyte";
    memorySizes["800GB"] = "800 Gigabyte";
    memorySizes["500GB"] = "500 Gigabyte";
})(memorySizes || (exports.memorySizes = memorySizes = {}));
const computerParts = {
    computertypes: computertypes,
    mainboards: mainboards,
    cpus: cpus,
    rams: rams,
    gpus: gpus,
    powersupplys: powersupplys,
    memoryTypes: memoryTypes,
    memorySizes: memorySizes,
};
exports.default = computerParts;
