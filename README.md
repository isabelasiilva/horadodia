Projeto que fiz acompanhando as aula do Curso em Video, no curso "Javascript [40 Horas]". Foi usado conhecimentos de functions e conditions em JS, além do HTML e CSS. 
A ideia era criar uma página que logo que é carregada, o JS executa de acordo com o horário atual na máquina do cliente e com isso mostra um tipo de layout com cores, texto e imagem diferentes.
Para testes de layout acrescentei uma linha "var hora = x" no script para que coloque a hora do dia desejada (em números inteiros).

Falhas sintáticas: 
- Os intervalos de horario funcionam somente com números inteiros, portando quando for 18h30 o texto constará apenas como "Agora são 18 horas". 
- O horário entre 00h até 12h são entendidos como "Bom dia"
