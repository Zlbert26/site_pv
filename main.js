    const botoes = document.querySelectorAll(«.botao»);
        console.log(botoes)
        for(leti=0;i<botoes.length;i++){
            botoes[i].onclick = function(){
                botoes[i].classList.add(«ativo»);
                const botoes = document.querySelectorAll(«.botao»);
                for(let i=0;i <botoes.length;i++){
                    botoes[i].onclick = function(){
                        for(let j=0;j<botoes.length;j++){
                            botoes [j].classList.remove("ativo");
                        }
                        botoes[i].classsList.add("ativo")
                    }
                }
            }

        }