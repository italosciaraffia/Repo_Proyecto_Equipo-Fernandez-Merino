# Ficha técnica 

Una ficha técnica es un documento que acompaña a la base de datos, que explica la codificación de sus dimensiones o variables. Expliciten al menos los siguientes puntos:
•	Fuente de los datos: Departamento de Estadísticas e Información de Salud. Informe REM 2024.
•	Metodología de la construcción de la base: Descargamos el Excel del Deis con los datos hospitalarios entre 2013 y 2023. Luego realizamos un proceso de limpieza de estos datos a través de Google Colab, Python, en donde agrupamos en regiones los datos y homogeneizamos los nombres de los establecimientos que eran iguales, a través de una codificación cruzada. Luego eliminamos los duplicados. Después, armamos una tabla dinámica en Excel con los datos en que nos queremos centrar.
•	Alcance de los datos: nuestros datos son a nivel nacional, abarcando todas las regiones de nuestro país, de distintos hospitales públicos y cifras de 2013 a 2024. 
Característica de los datos: nuestros datos son cuantitativos y los llegamos a agrupar por región. Son anuales, organizados por establecimiento, área y año. Incluyen tanto indicadores como la ocupación de camas, egresos, como de resultados de letalidad, estadía promedio, etc.
•	Variables incorporadas: variable | descripción.
-	Región – en qué región de Chile se en encuentra el establecimiento
-	Establecimiento – nombre del hospital público 
-	Ocupación camas - Porcentaje de ocupación de camas promedio en el año
-	Letalidad – porcentaje de pacientes fallecidos respecto de los egresos 
-	Disponibilidad de camas – promedio de camas disponibles
-	Rotación – respecto a las camas y su uso
-	Eficiencia – índice calculado a partir de egresos, ocupación y estadía
-	Estadía promedio – promedio de días de hospitalización por paciente 
•	Otras observaciones que tengan sobre la base.

• Otras observaciones:
Existían nombres duplicados con leves variaciones ortográficas, los que fueron juntados manualmente.