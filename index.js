let cont = 0;

class banco {
    constructor(conta, saldo, tipoDeConta, agencia) {
        this.conta = cont;
        this.saldo = 0.0;
        this.tipoDeConta = "poupança";
        this.agencia = 4579;
        cont += 1;
    }

    buscarSaldo() {
        return this.saldo;
    }

    deposito(valor) {
        this.saldo = this.saldo + valor;
    }

    saque(valor) {

        if (valor <= 0) {
            console.log('Você não pode sacar zero ou menos')
        }
        if (valor > this.saldo) {
            console.log('Valor indisponível')
        }

        if (valor > 0 && valor <= this.saldo) {
            this.saldo = this.saldo - valor;
        }

    }

    conta() {
        return this.conta;
    }


} const conta1 = new banco();
console.log(conta1.buscarSaldo());
conta1.deposito(100);
conta1.saque(50);
console.log(conta1.buscarSaldo());
console.log(conta1.conta);
