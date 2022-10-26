const share = (): void => {
    document.querySelector('.avatar')?.toggleAttribute('hidden');
    document.querySelector('.active')?.toggleAttribute('hidden');
}

const buttonShare = document.querySelector("#share1");
buttonShare.addEventListener('click', share );
const buttonShare2 = document.querySelector("#share2");
buttonShare2.addEventListener('click', share );
