const MIN_20 = 1200000;
const MIN_10 = 600000;
const fechasOcupadas = [];
class Scheduler {
  noSeSuperponeFechas(fecha, fechaOcupada) {
    a = fechaOcupada.getTime();
    return fecha.getTime() < a - MIN_20 || fecha.getTime() > a + MIN_20;
  }

  CouldScheduleAt(time) {
    time > newDate() &&
      fechasOcupadas.every(function(fechaOcupada) {
        this.noSeSuperponeFechas(time, fechaOcupada);
      });
  }

  ScheduleAt(time) {
    if (this.CouldScheduleAt(time)) {
      fechasOcupadas.push(time);
      return true;
    }
  }

  Schedule() {
    fechasOcupadas.sort(function(primerFecha, segundaFecha) {
      return primerFecha - segundaFecha;
    });

    if (this.noSeSuperponeFechas(Date.now + MIN_10, fechasOcupadas[0])) {
      return new Date(Date.now + MIN_10);
    }
    for (let i = 0; i < fechasOcupadas.length - 1; i++) {
    if (this.noSeSuperponeFechas(fechasOcupadas[i].getTime + MIN_20,fechasOcupadas[i + 1]));{
    return fechasOcupadas[i].getTime + MIN_20 }
    
  }

  UnscheduleAt(time) {
    fechasOcupadas.findIndex(function(elem) {
      if (elem.toString() === time.toString()) {
        fechasOcupadas.slice(elem);
        return true;
      }
    });
  }
}

function ingreso(fecha) {
  myDate = new Date(fecha);
  ocupados.push(myDate);
}
