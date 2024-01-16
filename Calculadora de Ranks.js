15/01/2024 ---> Desafio DIO
//Variaveís && Constantes
let vitorias = 100
let derrotas = 40
let xp = 1000
let jogador = "20_Matar"
const saldoTotal = vitorias - derrotas
let ranks = (["Bronze" , "Prata" , "Ouro" , "Diamante" , "Lendário" , "Imortal"])
       console.log ("Seu saldo total é de "+saldoTotal)
verify ()
function verify(){xp === 1000
        console.log ("O jogador "+ jogador + " está no level 3")}
switch (saldoTotal) 
  { case 10:
    console.log ("Seu jogador está no ranking " + ranks [0]);
    break;
      case  20:
      console.log ("Seu jogador está no ranking " + ranks [1]);
      break;
        case 30:
        console.log ("Seu jogador está no ranking " + ranks [2]);
        break;
          case  40:
          console.log ("Seu jogador está no ranking " + ranks [3]);
          break;
            case  50:
            console.log ("Seu jogador está no ranking " + ranks [4])
            break;
                default :
                        console.log ("Seu jogador está no ranking " + ranks [5])
   }
    
     //Saída
     console.log ("O jogador " + jogador + " tem o xp de " + xp + " e está no ranking " + ranks [5])
