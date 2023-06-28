AOS.init();

const dataEvento = new Date("Jan 03, 2024 22:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(timeStampDoEvento / (1000 * 60 * 60 * 24)); 
    const horasAteEvento = Math.floor((tempoAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutosAteEveneto = Math.floor((tempoAteEvento % (1000 * 60 *60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((tempoAteEvento % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEveneto}m ${segundosAteEvento}s` ;

    if (tempoAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

}, 1000);