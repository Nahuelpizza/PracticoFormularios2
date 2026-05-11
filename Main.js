const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpiar errores
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    let hayErrores = false;

    // Validaciones comunes
    if (document.getElementById('pNombre')) {
        const nombre = document.getElementById('pNombre').value.trim();
        if (nombre === '') {
            document.getElementById('errorNombre').textContent = 'Ingrese su nombre';
            hayErrores = true;
        }
    }

    if (document.getElementById('Email')) {
        const email = document.getElementById('Email').value.trim();
        if (email === '') {
            document.getElementById('errorEmail').textContent = 'Ingrese un email';
            hayErrores = true;
        }
    }

    // Validaciones para RegistroIncidencia
    if (document.getElementById('tIncidencia')) {
        const titulo = document.getElementById('tIncidencia').value.trim();
        if (titulo === '') {
            document.getElementById('errorTitulo').textContent = 'Ingrese un título';
            hayErrores = true;
        }
    }

    if (document.getElementById('Descripcion')) {
        const descripcion = document.getElementById('Descripcion').value.trim();
        if (descripcion.length < 10) {
            document.getElementById('errorDescripcion').textContent = 'La descripción debe tener al menos 10 caracteres';
            hayErrores = true;
        }
    }

    if (document.getElementById('tipoProblema')) {
        const problema = document.getElementById('tipoProblema').value;
        if (problema === '') {
            document.getElementById('errorProblema').textContent = 'Seleccione un problema';
            hayErrores = true;
        }
    }

    if (document.getElementById('NivelPrioridad')) {
        const prioridad = document.getElementById('NivelPrioridad').value;
        if (prioridad === '') {
            document.getElementById('errorPrioridad').textContent = 'Seleccione una prioridad';
            hayErrores = true;
        }
    }

    // Validaciones para AltaEquipo
    if (document.getElementById('NombreEquipo')) {
        const nombreEquipo = document.getElementById('NombreEquipo').value.trim();
        if (nombreEquipo === '') {
            document.getElementById('errorNombre').textContent = 'Ingrese el nombre del equipo';
            hayErrores = true;
        }
    }

    if (document.getElementById('TipoEquipo')) {
        const tipoEquipo = document.getElementById('TipoEquipo').value.trim();
        if (tipoEquipo === '') {
            document.getElementById('errorTipo').textContent = 'Ingrese el tipo de equipo';
            hayErrores = true;
        }
    }

    if (document.getElementById('NumeroSerie')) {
        const numeroSerie = document.getElementById('NumeroSerie').value.trim();
        if (numeroSerie === '') {
            document.getElementById('errorSerie').textContent = 'Ingrese el número de serie';
            hayErrores = true;
        }
    }

    if (document.getElementById('FechaAdquisicion')) {
        const fecha = document.getElementById('FechaAdquisicion').value;
        if (fecha === '') {
            document.getElementById('errorFecha').textContent = 'Seleccione la fecha de adquisición';
            hayErrores = true;
        }
    }

    if (document.getElementById('EstadoEquipo')) {
        const estado = document.getElementById('EstadoEquipo').value;
        if (estado === '') {
            document.getElementById('errorEstado').textContent = 'Seleccione el estado del equipo';
            hayErrores = true;
        }
    }

    // Validaciones para SolicitudServicio
    if (document.getElementById('tServicio')) {
        const servicio = document.getElementById('tServicio').value;
        if (servicio === '') {
            document.getElementById('errorServicio').textContent = 'Seleccione un tipo de servicio';
            hayErrores = true;
        }
    }

    if (document.getElementById('fSolicitada')) {
        const fechaSolicitada = document.getElementById('fSolicitada').value;
        if (fechaSolicitada === '') {
            document.getElementById('errorFechaSolicitada').textContent = 'Seleccione la fecha solicitada';
            hayErrores = true;
        }
    }

    if (document.getElementById('DescripcionPedido')) {
        const descripcionPedido = document.getElementById('DescripcionPedido').value.trim();
        if (descripcionPedido === '') {
            document.getElementById('errorDescripcionPedido').textContent = 'Ingrese la descripción del pedido';
            hayErrores = true;
        }
    }

    if (!hayErrores) {
        alert('Formulario enviado correctamente');
    }
});