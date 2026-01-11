# Veterinaria JS

Este proyecto contempla una aplicación backend que registra las horas de atención en una veterinaria.

## Tecnologías Empleadas

- Node.js

## Instalación y uso.

Instrucciones de instalación y configuración del proyecto:

1. Clonar repositorio:

```bash
git clone https://github.com/pbl-o/veterinaria-js.git
```

2. Acceder al terminal:


3. Activar algunas de las funciones predeterminadas de la aplicación escribiendo alguno de las siguientes instrucciones en la terminal:

REGISTRO DE INFORMACIONES:

```bash
node index.js registrar nombre edad tipo color enfermadad
```

- Esta acción rellena el formulario de su mascota con datos requeridos para la atención como nombre, edad, tipo entendido como especie o raza de la mascota, color y enfermedad.

- En el caso de que alguna de los items precise de espacios para ser ingresado, debe ser colocado entre comillas:

-Ejemplo:
```bash
node index.js registrar 'Super perro' '3 años' bulldog café 'lesión cutánea'
```


LECTURA DEL FICHERO:

```bash
node index.js leer
```

VACIADO DE FICHERO:


```bash
node index.js borrar
```
(Esta función está abierta para uso público asumiendo que esta aplicación es para efectos de estudio, en un contexto real estaría restringida a usuarios selectos sob autenticación y autorización)

- Para Efectos de la evaluación se ha creado un fichero json manualmente, no obstante se puede autogenerar en caso de ausencia. Para esto se puede probar borrar el fichero json e intentar registrar una mascota nuevamente. 