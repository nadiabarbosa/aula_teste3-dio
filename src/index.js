// definindo a classe do herói

class hero {
	constructor(heroName, heroAge, heroType){
    	this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }
    
// função para o tipo de ataque

	toAttack(){
    	let attack;
// tipo de ataque
		switch(this.heroType){
        	case 'mago': 
            	attack = "magia"
                break
           	case 'guerreiro':
            	attack = "espada"
                break
            case 'monge': 
            	attack = "artes marciais"
                break
            case 'ninja':
            	attack = "shuriken"
                break
            default:
            	attack = "ataque desconhecido"   ;
        }
        
// mensagem do console

		console.log(`O ${this.heroType} atacou usando ${attack}`)
    }
}

// objeto da classe hero

const myHero = new hero ("Frodo", 25, "mago")

// chamar a função toAttack

myHero.toAttack()
