console.log('----------->>>>>>>>>>><<<<<<<<<<<<<----------------')
console.log(this)
function fora() {
    const juntar = () => {
        console.log('ARROW FUNCTION DENTRO', this)
    };

    console.log('ARROW FUNCTION FORA', this);
    juntar();
}

fora.call('VEREMOS')

console.log('----------->>>>>>>>>>><<<<<<<<<<<<<----------------')
function fora2() {
    const juntar2 = function () {
        console.log('FUNCTION DENTRO', this)
    };

    console.log('FUNCTION FORA', this);
    juntar2();
}

fora2.call('VEREMOS 2')
console.log('----------->>>>>>>>>>><<<<<<<<<<<<<----------------')