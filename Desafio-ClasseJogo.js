class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}


const heroiMago = new Heroi("Galdalf", 100, "mago");
const heroiGuerreiro = new Heroi("Lancelot", 30, "guerreiro");

heroiMago.atacar(); 
heroiGuerreiro.atacar();
