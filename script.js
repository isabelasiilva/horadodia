
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = x  // usar essa linha para teste de iteratividade - no lugar do x usar um número inteiro referente as horas do dia         
    
    msg.innerHTML = `Agora são ${hora} horas. ` 

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `Bom dia!` 
        img.src = 'imgmanha.png'
        document.body.style.background = '#F0E68C'

    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `Boa tarde!`
        img.src = 'imgtarde.png'
        document.body.style.background = '#DAA520'
        
    }
        else {
            msg.innerHTML += `Boa noite!`
            img.src = 'imgnoite.png'
            document.body.style.background = '#1C1C1C'
            
        }

}
