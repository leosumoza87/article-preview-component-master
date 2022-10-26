"use strict";
const share = () => {
    var _a, _b;
    (_a = document.querySelector('.avatar')) === null || _a === void 0 ? void 0 : _a.toggleAttribute('hidden');
    (_b = document.querySelector('.active')) === null || _b === void 0 ? void 0 : _b.toggleAttribute('hidden');
};
const buttonShare = document.querySelector("#share1");
buttonShare.addEventListener('click', share);
const buttonShare2 = document.querySelector("#share2");
buttonShare2.addEventListener('click', share);
